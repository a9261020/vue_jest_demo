import { shallowMount } from "@vue/test-utils";
import RouterTest from "@/components/RouterTest";

const $route = {
  path: "/some",
};

const mockPush = jest.fn();
const $router = {
  push: mockPush,
};

describe("RouterTest.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(RouterTest, {
      stubs: ["app-button"],
      mocks: {
        $route,
        $router,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("RouterTest.vue is exists", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("when button is clicked goVIPs will be called", () => {
    const mock = jest.fn();
    wrapper.setMethods({ goVIPs: mock });
    const routerButton = wrapper.find(".router app-button-stub");
    routerButton.vm.$emit("click");
    expect(mock).toBeCalled();
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("goVIPs() is called", () => {
    wrapper.vm.goVIPs();
    expect(mockPush).toBeCalled();
  });
});
