function sendColour (text: string) {
    channel = 1
    radio.setGroup(channel)
    for (let index = 0; index < mbits; index++) {
        radio.sendString(text)
        channel += 1
        radio.setGroup(channel)
        basic.pause(delay)
    }
}
input.onButtonPressed(Button.AB, function () {
    sendColour("yellow")
})
input.onButtonPressed(Button.B, function () {
    sendColour("green")
})
input.onButtonPressed(Button.A, function () {
    sendColour("red")
})
let delay = 0
let mbits = 0
let channel = 0
channel = 1
mbits = 12
delay = 100
basic.showNumber(channel)
radio.setGroup(channel)
