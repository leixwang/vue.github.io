function sayHimy (name: string): string{
	return 'Hi, ' + name;
}


var user = 'Tom';

console.log('00000', sayHimy(user));

function showTypehandle () {
	let isDone: boolean = false
	let createByNewBoolean: boolean = Boolean(1);
	console.error('Boolen', isDone, createByNewBoolean)

	// number
	let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
console.error('Number: ', decLiteral, hexLiteral, binaryLiteral, octalLiteral, notANumber, infinityNumber)

// string
let myName: string = 'Tom';
let myAge: number = 25;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
console.error('string:', sentence)


let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
console.error('union:', myFavoriteNumber)


interface Person {
	readonly id: number;
	name: string;
	age?: number;
	[propName: string]: any;
}

let tom: Person = {
	id: 2342453,
	name: 'Tom',
	gender: 'male',
	addrs: 'aabbccddeeff'
}
console.error('interface', tom, tom.name, tom.age)


}

showTypehandle()
