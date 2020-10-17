/*
 * Home.vue
 * 測試內容
 * 掛載子組件-stubs
 * 臨時vue掛上vue-router
 */

import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home";
import Router from "vue-router";
import eventHub from "@/assets/js/EventHub.js";
import flushPromises from "flush-promises";

const localVue = createLocalVue();
localVue.use(Router);

describe("Home.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Home, {
      localVue,
      stubs: ["app-header", "app-sidebar"],
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("eventHub $on test", async () => {
    wrapper.vm.collapse = false;
    await flushPromises();
    expect(wrapper.find(".content").classes()).not.toContain(
      "content--collapse"
    );
    await eventHub.$emit("collapse", true);
    expect(wrapper.vm.collapse).toBeTruthy();
    expect(wrapper.find(".content").classes()).toContain("content--collapse");
  });
});
