/*
 * Header.vue
 * 測試包括
 * data v-bind
 * func
 * eventHub($emit)
 */

import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header";
import eventHub from "@/assets/js/EventHub.js";
import { checkWidth } from "@/assets/js/CommonMethods.js";
import flushPromises from "flush-promises";

describe("Header.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Header);
  });
  afterEach(() => {
    wrapper.destroy();
  });

  //   測試data v-bind
  //   判斷data中的默認值
  it("data test", async () => {
    expect(wrapper.vm.name).toBe("admin");
    expect(wrapper.vm.collapse).toBeTruthy();
    wrapper.vm.name = "holy";
    await flushPromises();
    expect(wrapper.find(".el-dropdown-link").text()).toBe("holy");

    // wrapper.vm.$nextTick(() => {
    //     expect(wrapper.find(".el-dropdown-link").text()).toBe("holy");
    // });
  });

  //   測試data中的checkWidth()
  it("checkWidth test", () => {
    //   window.document.body.offsetWidth的值在測試環境一直都是0，所以checkWidth的值一直都是true，無法改變
    expect(checkWidth()).toBeTruthy();
    expect(wrapper.vm.collapse).toBeTruthy();
  });

  //   測試collapseChage()
  //   點折疊側邊欄按鈕，正確觸發collapseChage函數
  it("collapseChage test", () => {
    // const mock = jest.fn();
    // wrapper.setMethods({
    //   collapseChage: mock,
    // });
    // wrapper.find(".collapse-btn").trigger("click");
    // expect(mock).toBeCalled();
    // expect(mock).toBeCalledTimes(1);

    const spy = jest.spyOn(Header.methods, "collapseChage");
    wrapper = shallowMount(Header);
    const button = wrapper.find(".collapse-btn");
    button.trigger("click");
    expect(spy).toBeCalled();
    expect(spy).toBeCalledTimes(1);
  });

  //   測試 collapseChage() 執行結果測試eventHub
  //   函數觸發後，collapse取回且eventHub的$emit觸發
  it("when collaspeChage() is called", () => {
    const mock = jest.fn();
    eventHub.$on("collapse", mock);

    wrapper.vm.collapseChage();
    expect(wrapper.vm.collapse).toBeFalsy();
    expect(mock).toBeCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith(false);

    wrapper.vm.collapseChage();
    expect(wrapper.vm.collapse).toBeTruthy();
    expect(mock).toBeCalled();
    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock).toHaveBeenCalledWith(true);
  });
});
