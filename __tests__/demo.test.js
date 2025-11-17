function add (x, y){
   return x + y;
}


test("測試 add",() => {
    expect(add(1, 2)).toBe(3);
});