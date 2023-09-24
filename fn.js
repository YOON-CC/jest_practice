const fn = {
    add : (num1, num2) => num1 + num2,
    makeUser:(name, age) => ({name, age}),
    getName : (callback) =>{
        const name = "Mike";
        setTimeout(() => {callback(name);}, 3000);
    }
};

module.exports = fn;