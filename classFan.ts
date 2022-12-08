enum Speed {
    SLOW = 1,
    MEDIUM = 2,
    FAST = 3
}

class Fan {
    private speed: Speed = Speed.SLOW
    private on: boolean = true
    private radius: number = 5
    private color: string = 'blue'

    constructor() {

    }

    getSpeed() {
        return this.speed
    }

    setSpeed(speed: Speed) {
        this.speed = speed
    }

    getOn(){
        return this.on
    }
    setOn(on : boolean){
        this.on = on
    }
    getRadius(){
        return this.radius
    }
    setRadius(radius : number){
        this.radius = radius
    }
    getColor(){
        return this.color
    }
    setColor(color: string){
        this.color = color
    }

    toString(){
        if(this.on === false){
            console.log('Quat dang tat')
        }
        else {
            console.log(`Toc do quat : ${this.speed} , Mau quat : ${this.color}, Ban kinh : ${this.radius}`)
        }
    }
}

let fan = new Fan()
fan.setColor('123')
fan.toString()
