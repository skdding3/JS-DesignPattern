// # Singleton Pattern

// Cat

// class Cat {
//     constructor(name) {
//         this.name = name
//     }
//     speak() {
//         console.log(this.name, 'meow')
//     }
// }
//
//
// let kitty = new Cat('kitty')
// let nabi = new Cat('nabi')
// //
// // kitty.speak();
// // nabi.speak();
//
// if (kitty === nabi) {
//     console.log('they are same')
// } else {
//     console.log('they are not same')
// }


class Singleton {
    static instance;
    constructor(name) {
        this.name = name
        if(!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    speak() {
        console.log(this.name, '미야옹')
    }
}

// let s1 = new Singleton();
// let s2 = new Singleton();
//
// if (s1 === s2) {
//     console.log('그들은 같아요, 싱글톤!')
// } else {
//     console.log('그들은 같지 않아요')
// }

let sKitty = new Singleton('kitty')
let sNabi = new Singleton('nabi')

sKitty.speak(); // kitty 미야옹
sNabi.speak(); // kitty 미야옹

// 싱글톤 주요 요점은 단 하나의 오브젝트만 생성한다. 그 오브젝트를 통해 여러 변수가 돌아가서 프로세스에 하나의 리소스만 차지한다.