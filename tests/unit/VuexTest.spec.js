/*
 * VuexTest.vue 組件
 * 臨時vue掛載element-ui
 * func
 * vue store內的state, mutations, actions, getters
 */
import { shallowMount, createLocalVue } from "@vue/test-utils";
import VuexTest from "@/components/VuexTest";
import Vuex from "vuex";
import { Button } from "element-ui";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("VuexTest.vue", () => {
  let wrapper;
  let state;
  let mutations;
  let actions;
  let getters;
  let store;
  beforeEach(() => {
    actions = {
      increment: jest.fn(),
      decrement: jest.fn(),
    };
    mutations = {
      increment: jest.fn(),
      decrement: jest.fn(),
    };
    state = {
      count: 0,
    };
    getters = {
      evenOrOdd: () => "gettersVal",
    };
    store = new Vuex.Store({
      state,
      mutations,
      actions,
      getters,
    });
    wrapper = shallowMount(VuexTest, {
      localVue,
      store,
      stubs: ["app-button"],
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  // 測試state
  // 測試偽造的state值是否存在於DOM中
  it("getters test", () => {
    const text = wrapper.find(".text");
    expect(text.text()).toContain(state.count);
  });

  //   測試actions
  //   點持按鈕測試偽造函數是否被調用
  it("actions test", () => {
    const btnAdd = wrapper.find(".add");
    const btnMinus = wrapper.find(".minus");
    btnAdd.vm.$emit("click");
    expect(actions.increment).toBeCalled();
    expect(actions.increment).toBeCalledTimes(1);
    btnMinus.vm.$emit("click");
    expect(actions.decrement).toBeCalled();
    expect(actions.decrement).toBeCalledTimes(1);
  });

  // 測試dispatchIncrement()
  // 點擊按鈕測試dispatchIncrement()是否被調用
  it("dispatch actions test", () => {
    wrapper.vm.dispatchIncrement();
    expect(actions.increment).toBeCalled();
    expect(actions.increment).toBeCalledTimes(1);
  });

  // 測試mutationsDecrement()
  // 點擊按鈕測試mutationsDecrement()是否被調用
  it("mutationsDecrement test", () => {
    const btnMutationsMinus = wrapper.find(".mutationsMinus");
    const mock = jest.fn();
    wrapper.setMethods({
      mutationsDecrement: mock,
    });
    btnMutationsMinus.vm.$emit("click");
    expect(mock).toBeCalled();
    expect(mock).toBeCalledTimes(1);
  });

  //   測試mutations
  //   調用函數測試偽造函數是否被調用
  it("mutations test", () => {
    wrapper.vm.mutationsDecrement();
    expect(mutations.decrement).toBeCalled();
    expect(mutations.decrement).toBeCalledTimes(1);
  });

  //   測試getters
  //   測試偽造getters值是否存在於DOM中
  it("getters test", () => {
    const text = wrapper.find(".text");
    console.log(getters.evenOrOdd());
    expect(text.text()).toContain(getters.evenOrOdd());
  });
});
