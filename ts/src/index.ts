
class Dog {
    name: string
    age: number
    // constructor 构造函数,构造函数会在对象创建时调用
    constructor(name: string, age: number) {
        // 在构造函数中this表示的就是当前创建的对象,可以通过this向新建的对象中添加属性
        this.name = name
        this.age = age
        console.log('this', this)
    }
    break() {
        console.log("汪汪汪")
    }
}

const dog = new Dog("旺财1", 3)
console.log(dog)


// 继承
// 以abstract开头的类就是抽象类，抽象类和其他类区别不大，只是不能用来创建对象；抽象类是专门用来被继承的类
abstract class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHello() {
        console.log("动物在叫")
    }
    // 抽象方法只能在抽象类中，并且子类必须继承抽象方法
    abstract run(): void;
}

class Cat extends Animal {
    sayHello(): void {
        // super表示当前类的父类
        super.sayHello()
    }
    run() {
        console.log("我在run")
    }
}

// 接口：用来定义一个类或者对象的结构，其中应该包括哪些属性或方法，通识可以当成类型申明去使用
interface MyInterface {
    name: string,
    sayHello: () => void
}

class Tiger implements MyInterface {
    public name: string
    constructor(name: string) {
        this.name = name
    }
    sayHello(): void {

    }
}

// 属性封装，保证安全性
class Person {
    /**
     * public 修饰的属性可以在任意位置访问(修改)默认值
     * private 私有属性只能在类的内部进行访问(修改)
     * protected 受保护的属性，只能在当前类以及当前类的子类中访问(修改)
     */
    private _name: string
    private _age: number
    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }
    // getter/setter 被称为属性的存储器
    // 定义方法，获取name属性
    getName() {
        return this._name
    }
    // 定义方法，设置name属性
    setName(name: string) {
        this._name = name
    }

    // TS中的setter/getter
    get age() {
        return this._age
    }
    set age(age: number) {
        this._age = age
    }
}

const person = new Person("wangqing", 25)
// 使用TS的getter/setter更加方便修改和获取
person.age = 23
console.log(person.age)

// 泛型
function fn1<T>(a: T): T {
    return a;
}
fn1<string>("hell0")

function fn2<T, K>(a: T, b: K): T | K {
    return a
}
fn2<string, number>('wangqing', 23)

interface MyTInterface {
    length: number,
    score: number
}
function fn3<T extends MyTInterface>(a: T) {
    return a.length
}
console.log(fn3<MyTInterface>({ length: 3, score: 100 }))

// A1和A2功能相同都是对函数进行约束
interface A1<T> {
    <T>(arg: T): T[]
}
type A2 = <T extends string>(arg: T) => T[]
const a1: A1<string> = (arg: any) => {
    return [arg]
}
const a2: A2 = (arg: any) => {
    return [arg]
}
a1("wangiqng")
a2("wangiqng")

// keyof T 类似于是T属性名的组合数组
const getProps = <T, K extends keyof T>(object: T, paramName: K) => {
    return object[paramName]
}
getProps({name: 'wangiqng'}, 'name')

