class Car {
    constructor (name,color,speed){
        this.name = name
        this.color = color
        this.speed = speed
    }

    drive () {
        console.log('I drove 2 miles')
    }
    stop () {
        console.log( 'after i drove two miles stoped')
    }
}

ferari = new Car('Ferari','black','360')

console.log(ferari.name)
console.log(ferari.color)
console.log(ferari.speed)
console.log(ferari.drive)
console.log(ferari.stop)