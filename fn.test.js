const fn = require("./fn");

test("1은 1이야.", ()=>{
    expect(1).toBe(1)
});

test("2 더하기 3은 5이.", ()=>{
    expect(fn.add(2, 3)).toBe(5);
});

test("3 더하기 3은 5이.", ()=>{
    expect(fn.add(3, 3)).not.toBe(5);
});

test("이름과 나이를 전달받아서 객체를 반환해줘", ()=>{
    expect(fn.makeUser('Mike', 30)).toBe({
        name : "Mike",
        age : 30,
    });
});

test("3초 후에 받아온 이름은 Mike", (done)=>{
    function callback(name) {
        expect(name).toBe("Mike");
        done();
    }
    fn.getName(callback)
});