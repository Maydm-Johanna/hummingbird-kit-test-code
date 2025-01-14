input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        hummingbird.setPositionServo(FourPort.Three, 0)
        hummingbird.setPositionServo(FourPort.Four, 0)
        basic.pause(500)
        hummingbird.setPositionServo(FourPort.Three, 180)
        hummingbird.setPositionServo(FourPort.Four, 180)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(hummingbird.getSensor(SensorType.Light, ThreePort.Three))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(hummingbird.getSensor(SensorType.Distance, ThreePort.Two))
})
hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setRotationServo(FourPort.One, 100)
    hummingbird.setRotationServo(FourPort.Two, -100)
})
basic.forever(function () {
    hummingbird.setTriLED(
    TwoPort.One,
    255,
    255,
    255
    )
    hummingbird.setTriLED(
    TwoPort.Two,
    255,
    255,
    255
    )
})
basic.forever(function () {
    hummingbird.setLED(ThreePort.One, hummingbird.getSensor(SensorType.Dial, ThreePort.One) / 2.55)
    hummingbird.setLED(ThreePort.Two, hummingbird.getSensor(SensorType.Dial, ThreePort.One) / 2.55)
    hummingbird.setLED(ThreePort.Three, hummingbird.getSensor(SensorType.Dial, ThreePort.One) / 2.55)
})
