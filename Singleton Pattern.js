// # Singleton Pattern


class Cat {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(this.name, 'meow')
    }
}

let kitty = new Cat('kitty')
let nabi = new Cat('nabi')

if (kitty === nabi) {
    console.log('they are same')
} else {
    console.log('they are not same')
}