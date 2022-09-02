function sayHimy(name) {
    return 'Hi, ' + name;
}
var user = 'Tom';
console.log('00000', sayHimy(user));
function showTypehandle() {
    var isDone = false;
    var createByNewBoolean = Boolean(1);
    console.error('Boolen', isDone, createByNewBoolean);
    // number
    var decLiteral = 6;
    var hexLiteral = 0xf00d;
    // ES6 中的二进制表示法
    var binaryLiteral = 10;
    // ES6 中的八进制表示法
    var octalLiteral = 484;
    var notANumber = NaN;
    var infinityNumber = Infinity;
    console.error('Number: ', decLiteral, hexLiteral, binaryLiteral, octalLiteral, notANumber, infinityNumber);
    // string
    var myName = 'Tom';
    var myAge = 25;
    // 模板字符串
    var sentence = "Hello, my name is ".concat(myName, ".\nI'll be ").concat(myAge + 1, " years old next month.");
    console.error('string:', sentence);
    var myFavoriteNumber;
    myFavoriteNumber = 'seven';
    myFavoriteNumber = 7;
    console.error('union:', myFavoriteNumber);
    var tom = {
        id: 2342453,
        name: 'Tom',
        gender: 'male',
        addrs: 'aabbccddeeff'
    };
    console.error('interface', tom, tom.name, tom.age);
}
showTypehandle();
