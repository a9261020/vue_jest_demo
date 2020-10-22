import { shallowMount } from "@vue/test-utils";
import OverView from "@/views/OverView";

describe("OverView.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(OverView, {
      stubs: ["filter-test", "axios-test", "router-test", "vuex-test"],
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("check overview is exists", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
