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

  it("when button is clicked getData will be called", async () => {
    // * setMethods過時了。
    const mock = jest.fn();
    wrapper.setMethods({ getData: mock });
    const axiosButton = wrapper.find(".axios app-button-stub");
    axiosButton.vm.$emit("click");
    expect(mock).toBeCalled();
    expect(mock).toBeCalledTimes(1);

    // ? 測試沒錯，但會跳個錯誤訊息
    // const spy = jest.spyOn(AxiosTest.methods, "getData");
    // await shallowMount(AxiosTest, { localVue, stubs: ["app-button"] })
    //   .find(".axios app-button-stub")
    //   .vm.$emit("click");
    // expect(spy).toBeCalled();
    // expect(spy).toBeCalledTimes(1);

    // ! 測試有錯
    // const spy = jest.spyOn(AxiosTest.methods, "getData");
    // wrapper = shallowMount(AxiosTest, { localVue, stubs: ["app-button"] });
    // const axiosButton = wrapper.find(".axios app-button-stub");
    // await axiosButton.vm.$emit("click");
    // expect(spy).toBeCalled();
    // expect(spy).toBeCalledTimes(1);
  });

  it("get reject", async () => {
    // ! 不知道為什麼，在AxiosTest.vue中把.catch那段拿掉這個測試才有辦法跑。
    axios.get.mockRejectedValue("Error");
    await wrapper.vm.getData().catch((e) => expect(e).toMatch("Error"));
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
