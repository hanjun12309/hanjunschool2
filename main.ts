radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2 && input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        radio.sendNumber(2)
    } else if (receivedNumber == 2 && input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.No)
        radio.sendNumber(1)
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    }
})
radio.setGroup(10)
