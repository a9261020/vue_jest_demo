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

  it("when button is clicked goVIPs will be called", async () => {
    // const mock = jest.fn();
    // wrapper.setMethods({ goVIPs: mock });
    // const routerButton = wrapper.find(".router app-button-stub");
    // routerButton.vm.$emit("click");
    // expect(mock).toBeCalled();
    // expect(mock).toHaveBeenCalledTimes(1);

    const spy = jest.spyOn(RouterTest.methods, "goVIPs");
    wrapper = shallowMount(RouterTest, {
      stubs: ["app-button","el-input"],
      mocks: { $route, $router },
    });
    const routerButton = wrapper.find(".router app-button-stub");
    await routerButton.vm.$emit("click");
    expect(spy).toBeCalled();
    expect(spy).toBeCalledTimes(1);
  });

  it("goVIPs() is called", () => {
    wrapper.vm.goVIPs();
    expect(mockPush).toBeCalled();
  });
});
