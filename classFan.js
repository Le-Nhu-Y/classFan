var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 1] = "SLOW";
    Speed[Speed["MEDIUM"] = 2] = "MEDIUM";
    Speed[Speed["FAST"] = 3] = "FAST";
})(Speed || (Speed = {}));
var Fan = /** @class */ (function () {
    function Fan() {
        this.speed = Speed.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = 'blue';
    }
    Fan.prototype.getSpeed = function () {
        return this.speed;
    };
    Fan.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Fan.prototype.getOn = function () {
        return this.on;
    };
    Fan.prototype.setOn = function (on) {
        this.on = on;
    };
    Fan.prototype.getRadius = function () {
        return this.radius;
    };
    Fan.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Fan.prototype.getColor = function () {
        return this.color;
    };
    Fan.prototype.setColor = function (color) {
        this.color = color;
    };
    Fan.prototype.toString = function () {
        if (this.on === false) {
            console.log('Quat dang tat');
        }
        else {
            console.log("Toc do quat : ".concat(this.speed, " , Mau quat : ").concat(this.color, ", Ban kinh : ").concat(this.radius));
        }
    };
    return Fan;
}());
var fan = new Fan();
fan.setColor('123');
fan.toString();
