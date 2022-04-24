let a: number;
let b: string;

// 如果变量的申明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c: boolean = true;

function sum(a: number, b: number): number {
    return a + b;
}

// 字面量
let d: 10;
d = 10;

let e: 'male' | 'female';  // 可以使用｜来枚举几个值
e = 'female'

let f: string | boolean // 可以使用｜来连接多个类型
f = 'wangqing'

// unknown和any的区别就是any不仅仅影响自己的类型还影响别人的类型，比如可以将any赋值给string，但是unkonw类型就是不可以
// unknown实际上就是一个安全类型的any
let g1: unknown = true;
let g2: any = true;
let g3: string = g2;
let g4: string
// g4 = g1

// 如果必须要将unknown类型赋值给string，可以判断类型，或者是类型断言
if (typeof g1 === "string") g4 = g1
g4 = g1 as string
g4 = <string>g1

let h: undefined;

let i1: void = undefined;

// never表示永远不会有结果
function fn(): never {
    throw new Error("报错了！")
}

// {}用来指定对象可以包括哪些属性 {属性名：属性值类型}
let j1: { name: string, age?: number } = { name: 'wangqing', age: 25 }
// 限制对象必须存在name属性，其他的不做要求 
let j2: { name: string, [propName: string]: any } = { name: 'wangqing', age: 25, sex: 'male' }

// 限制为function
let k1: Function
// 限制为function并且限制function结构
let k2: (a: number, b: number) => number = (a ,b) => {
 return a+b
}
type k3 = (a: number, b: number, ...params:number[]) => void


// 数组  number[]表示数组中的元素都是number
let l1: number[]
let l2: Array<number>

// tuple元祖：固定长度的数组
let m: [string, string] = ["wang", "qing"]

// 枚举
enum Gender {
    Male = "男",
    Female = "女"
}
let n: { name: string, gender: Gender } = { name: 'wangqing', gender: Gender.Male }

// &同时满足
let o: { name: string } & { age: number } = { name: 'wangqing', age: 25 }

// 类型别名 type
type myType = 'male' | 'female'
let p: myType = 'male'
