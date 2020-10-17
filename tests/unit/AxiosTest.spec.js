/*
 * AxiosTest.vue
 * 測試包含
 * 自定義func
 * axios
 */

import { shallowMount, createLocalVue } from "@vue/test-utils";
import AxiosTest from "@/components/AxiosTest";
import axios from "axios";

jest.mock("axios");

const localVue = createLocalVue();
localVue.prototype.$axios = axios;

describe("AxiosTest.vue", () => {
  let wrapper;
  beforeEach(() => {
    axios.mockClear();
    wrapper = shallowMount(AxiosTest, { localVue, stubs: ["app-button"] });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("when button is clicked getData will be called", () => {
    const mock = jest.fn();
    wrapper.setMethods({ getData: mock });
    const axiosButton = wrapper.find(".axios app-button-stub");
    axiosButton.vm.$emit("click");
    expect(mock).toBeCalled();
    expect(mock).toBeCalledTimes(1);
  });

  it("get reject", async () => {
    //   const asyncMock = jest.fn().mockRejectedValue("Error");
    //   await asyncMock().catch((e) => {
    //     expect(e).toBe("Error");
    //   });
    axios.get.mockRejectedValue("error");
    await wrapper.vm.getData().catch((e) => expect(e).toMatch("asdf"));
  });

  it("get success", async () => {
    const mockData = { data: { name: "James" } };
    axios.get.mockResolvedValue(mockData);
    await wrapper.vm.getData().then((res) => {
      expect(res).toEqual(mockData);
      expect(wrapper.vm.usersInfo).toEqual(mockData.data);
    });
  });
});
