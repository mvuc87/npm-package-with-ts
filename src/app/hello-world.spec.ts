import { say } from "./hello-world"

describe("Say", () => {
  it("should always say hello world", () => {
    expect(say()).toBe("Hello, world!");
  })
})