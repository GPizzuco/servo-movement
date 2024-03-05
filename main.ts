let servopos = 0
let light2 = 0
servos.P0.setAngle(0)
if (input.lightLevel() >= 100) {
    for (let index = 0; index <= 180; index++) {
        servos.P0.setAngle(index)
        basic.pause(40)
    }
}
basic.forever(function () {
    light2 = input.lightLevel()
    servopos = pins.map(
    light2,
    0,
    255,
    0,
    255
    )
    servos.P0.setAngle(servopos)
})
