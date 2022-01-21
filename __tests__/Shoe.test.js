const Shoe = require("../lib/Shoe")

test("set the size for the shoe", () => {
    const testSize = 8;
    const myShoe = new Shoe(testSize, "red", "Nike", "120")

    expect(myShoe.size).toBe(testSize)
})

test("set the color for the shoe", () => {
    const testColor = "red";
    const myShoe = new Shoe(8, testColor, "Nike", "120")

    expect(myShoe.color).toBe(testColor)
})
