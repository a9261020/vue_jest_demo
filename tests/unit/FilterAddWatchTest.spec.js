/*
    FilterTest.vue 組件
    測試內容如下
    臨時vue實例掛載elementui
    v-show (v-if v-bind)
    filter
    自定義func
    watch
*/

import { shallowMount, createLocalVue } from "@vue/test-utils";
import FilterTest from "@/components/FilterAddWatchTest";
import ElementUI from "element-ui";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("Filter Test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(FilterTest, {
      localVue,
      stubs: ["app-button"],
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("v-show", async () => {
    const truediv = wrapper.find(".text.format");
    const falsediv = wrapper.find(".text.noformat");
    expect(truediv.isVisible()).toBe(true);
    expect(falsediv.isVisible()).toBe(false);
    await wrapper.setData({
      toggleShow: false,
    });
    expect(truediv.isVisible()).toBe(false);
    expect(falsediv.isVisible()).toBe(true);
  });

  it("filter test", () => {
    expect(FilterTest.filters.formatText("12345678")).toBe("12...78");
    expect(FilterTest.filters.formatText("12345")).toBe("12345");
    expect(FilterTest.filters.formatText()).toBe("");
  });

  it("when button is clicked changeShow will be called", async () => {
    const mock = jest.fn();
    wrapper.setMethods({ changeShow: mock });
    const axiosButton = wrapper.find(".filter app-button-stub");
    await axiosButton.vm.$emit("click");
    expect(mock).toBeCalled();
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("called changeShow()", () => {
    wrapper.setData({ toggleShow: false });
    wrapper.vm.changeShow();
    expect(wrapper.vm.toggleShow).toBe(true);
    wrapper.vm.changeShow();
    expect(wrapper.vm.toggleShow).toBe(false);
  });

  it("watch test", async () => {
    const spy = jest.spyOn(console, "log");
    await wrapper.setData({ toggleShow: "測試" });
    expect(spy).toBeCalled();
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith("測試");
    spy.mockClear();
  });
});
