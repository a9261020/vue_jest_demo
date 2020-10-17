// 熟悉mock是什麼
import { shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import PostTest from "@/components/PostTest";

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

describe("PostTest.vue", () => {
  it("mocking the axios call to get posts should work", async () => {
    var wrapper = shallowMount(PostTest);
    await flushPromises();
    expect(wrapper.vm.posts.length).toBe(1);
  });
});
