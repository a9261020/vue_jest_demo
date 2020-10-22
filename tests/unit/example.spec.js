import { shallowMount,createLocalVue } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

const localVue = createLocalVue();

describe("HelloWorld.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(HelloWorld);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("renders props.msg when passed", () => {
    const msg = "new message";
    wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("changeTest func", () => {
    wrapper.vm.test = false;
    expect(wrapper.vm.test).toBe(false);
    wrapper.vm.changeTest();
    expect(wrapper.vm.test).toBe(true);
  });

  describe("watcher input Value", () => {
    let spy;
    beforeEach(() => {
      spy = jest.spyOn(console, "log");
    });
    afterEach(() => {
      spy.mockClear();
    });

    describe("is called with the new value in other cases", () => {
      // 在vue中 watcher 是 async 事件，所以如果直接寫
    // wrapper.vm.inputValue = "foo";
      // expect(spy).toBeCalled();
      // 會變成先跑完測試才去呼叫watch，這個時候就會出錯

      // 方式一 是直接去改變資料，vue本來就沒辦法監測到，要用$nextTick去更新
      // it("method1", (done) => {
      //   wrapper.vm.inputValue = "foo";
      //   wrapper.vm.$nextTick(() => {
      //     expect(spy).toBeCalled();
      //     done();
      //   });
      // });

      // 更簡潔的寫法
      it("method1 改寫", async () => {
        wrapper.vm.inputValue = "foo";
        await localVue.nextTick();
        expect(spy).toBeCalled()
      });

      // 方式二 直接改變data的資料，並觸發watch，而且要await改變完之後
      it("method2", async () => {
        await wrapper.setData({ inputValue: "foo" });
        expect(spy).toBeCalled();
      });
    });

    it("is not called if value is empty (trimmed)", () => {
      wrapper.setData({ inputValue: "        " });
      expect(spy).not.toBeCalled();
    });

    it("is not called if values are the smae", () => {
      wrapper = shallowMount(HelloWorld, {
        // data: () => ({ inputValue: "foo" }),
        data() {
          return {
            inputValue: "foo",
          };
        },
      });
      wrapper.setData({ inputValue: "foo" });
      expect(spy).not.toBeCalled();
    });
  });
});
