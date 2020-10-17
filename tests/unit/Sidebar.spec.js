/*
 * Sidebar.vue
 * 測試包含
 * func
 * element-ui插件使用
 * $route(偽造$route測試computed)
 * computed
 * DOM
 */

import { shallowMount, createLocalVue } from "@vue/test-utils";
import Sidebar from "@/components/Sidebar";
import ElementUI from "element-ui";
import eventHub from "@/assets/js/EventHub.js";
import { checkWidth } from "@/assets/js/CommonMethods.js";

const localVue = createLocalVue();
localVue.use(ElementUI);

const $route = {
  path: "/vips",
};

describe("Sidebar.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Sidebar, { localVue, mocks: { $route } });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  //  ? 測試 data中的checkWidth()
  it("checkWidth() test", () => {
    expect(checkWidth()).toBeTruthy();
    expect(wrapper.vm.collapse).toBeTruthy();
  });

  //  ? 測試 computed中的onRoutes
  it("computed", () => {
    expect(wrapper.vm.onRoutes).toBe("vips");
  });

  //   ? 測試 eventHub $on
  it("eventHub $on test", () => {
    wrapper.vm.collapse = false;
    eventHub.$emit("collapse", true);
    expect(wrapper.vm.collapse).toBeTruthy();
  });
});
