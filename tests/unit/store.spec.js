/*
 * store.js
 * 測試包含
 * 測試思路 mutations, actions, getters 分別測試，測試其中一個的時候，其他依賴mockmock
 * 本質還是測試方法（官網列出了兩種測試方法，這邊選簡單易懂的做測試）
 */

import { mutations, actions, getters } from "@/store.js";

describe("store.js", () => {
  // ? 測試 mutations
  // ? mock state 測試 mutations下的方法
  it("mutations test", () => {
    const state = {
      count: 0,
    };
    mutations.increment(state);
    expect(state.count).toBe(1);
    mutations.decrement(state);
    expect(state.count).toBe(0);
  });

  //   ? 測試 getters
  // ? mock state 測試 evenOrOdd 的值
  it("getters test even", () => {
    const state = {
      count: 0,
    };
    expect(getters.evenOrOdd(state)).toBe("even");
  });

  it("getters test odd", () => {
    const state = {
      count: 1,
    };
    expect(getters.evenOrOdd(state)).toBe("odd");
  });

  //   ? 測試 actions
  //  ? mock commit 測試 mutations下的方法
  it("actions test", () => {
    const mock = jest.fn();
    actions.increment({ commit: mock });
    expect(mock).toBeCalled();
    expect(mock).toBeCalledWith("increment");
    actions.decrement({ commit: mock });
    expect(mock).toBeCalled();
    expect(mock).toBeCalledWith("decrement");
  });
});
