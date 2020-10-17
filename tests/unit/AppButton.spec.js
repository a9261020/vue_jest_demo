/*
 * AppButton組件
 * 測試內容
 * props
 * computed
 * func
 * $emit
 * slots (普通及命名)
 * DOM測試
 */

import { shallowMount } from "@vue/test-utils";
import AppButton from "@/basics/AppButton";

describe("AppButton test", () => {
  let wrapper;
  afterEach(() => {
    wrapper.destroy();
  });

  // ? props
  // ? 自定義props 傳遞給AppButton，判斷組件是否接收到props
  it("props test", () => {
    const buttonProps = {
      type: "danger",
      size: "lg",
      disabled: true,
    };
    wrapper = shallowMount(AppButton, {
      propsData: buttonProps,
    });
    expect(wrapper.props().type).toBe("danger");
    expect(wrapper.props().size).toBe("lg");
    expect(wrapper.props().disabled).toBeTruthy();
  });

  // ? 測試 computed (注意 computed不是一個函數，而是一個變數，)
  // ? 改變props的type, size, disabled值，判斷cssClasses是否改變
  it("computed test", () => {
    wrapper = shallowMount(AppButton);

    wrapper.setProps({
      type: "danger",
    });

    expect(wrapper.vm.cssClasses).toBe(
      "app-button app-button--md app-button--danger"
    );

    wrapper.setProps({
      size: "lg",
      disabled: true,
    });

    expect(wrapper.vm.cssClasses).toBe(
      "app-button app-button--lg app-button--disabled"
    );
  });

  //   ? func測試
  //   ? 點擊按鈕時，觸發事件
  it("func test", () => {
    wrapper = shallowMount(AppButton);
    const mock = jest.fn();
    wrapper.setMethods({
      onClick: mock,
    });
    const button = wrapper.find("button");
    button.trigger("click");
    expect(mock).toBeCalled();
    expect(mock).toBeCalledTimes(1);
  });

  //   ? 測試$emit
  //   ? 函數被觸發後，emit的函數也會被觸發
  it("when onClick is called $emit is called", () => {
    wrapper = shallowMount(AppButton);
    const mock = jest.fn();
    wrapper.vm.$on("click", mock);
    wrapper.vm.onClick();
    expect(mock).toBeCalled();
    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith("i am params");
  });

  //   ? 測試slots 普通插槽
  //   ? 測試default
  it("slots default", () => {
    wrapper = shallowMount(AppButton);
    expect(wrapper.find("button").text()).toBe("submit");
    wrapper.destroy;
  });

  //   ? 測試slots 普通插槽
  //   ? mount 時傳入值作為slots，然後再判斷傳入值是否存在
  //   ? 傳入值可能為text, html, components等
  it("slots test", () => {
    wrapper = shallowMount(AppButton, {
      slots: {
        default: "i am slots text",
      },
    });

    const button = wrapper.find("button");
    expect(button.text()).toBe("i am slots text");
  });

  //  ? 測試slots 命名插槽
  //  ? 測試方法跟slots相同，此處傳入html
  //  ? 當傳入組件時，只需判斷wrapper是否包含組件DOM即可
  it("named slots test", () => {
    wrapper = shallowMount(AppButton, {
      slots: {
        namedSlot: `<span>i am slots html</span>`,
      },
    });
    const button = wrapper.find("button");
    expect(button.contains("span")).toBe(true);
    const span = wrapper.find("button span");
    expect(span.text()).toBe("i am slots html");
  });

  //  ? 測試slots 作用域插槽
  //  ? 測試方法跟slots相同，此處傳入html
  //  ? 當傳入組件時，只需判斷wrapper是否包含組件DOM即可
  it("scoped slots test", () => {
    wrapper = shallowMount(AppButton, {
      scopedSlots: {
        scopedSlot: `<span slot-scope="foo">{{foo.user.lastName}} </span>`,
      },
    });
    const button = wrapper.find("button");
    expect(button.contains("span")).toBe(true);
    const span = wrapper.find("button span");
    expect(span.text()).toBe("holy");
  });
  // ?  測試DOM
  it("DOM test", () => {
    wrapper = shallowMount(AppButton);
    expect(wrapper.contains("button")).toBeTruthy();
  });
});
