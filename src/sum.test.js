const sum = require('./sum')

test("add 1 + 2 be equal 3", ()=> {
    expect(sum(1,2)).toBe(3);
});