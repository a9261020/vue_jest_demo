/*
 * CommonMethods
 * 測試包含
 * 文件內存放的函數測試
 */

import { checkWidth } from "@/assets/js/CommonMethods.js";

describe("CommonMethods.js", () => {
  // 測試checkWidth
  // 測試應該包含函數的所有可能性
  it("checkWidth()", () => {
    // 不傳入參數，默認使用window.document.body.offsetWidth，在測試環境下都為0
    expect(checkWidth()).toBe(true);
    expect(checkWidth(1024)).toBe(true);
    expect(checkWidth(1025)).toBe(false);
  });
});
