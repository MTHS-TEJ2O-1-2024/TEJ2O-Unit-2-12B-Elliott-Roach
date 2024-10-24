/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: oct 2024
 * This program senses distance and terns red if to close
*/

let distanceToObject: number = 0
let neopixleStrip: neopixel.Strip = null

//clean
basic.clearScreen()
neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixleStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()

    //taking distance
    distanceToObject = sonar.ping(
        DigitalPin.P15,
        DigitalPin.P14,
        PingUnit.Centimeters,
    )

    //terning red if 9 cm or less and green if 10 or more
    if (distanceToObject < 10) {
        neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        neopixleStrip.show()
    } else {
        neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        neopixleStrip.show()
    }
    basic.showIcon(IconNames.Happy)
})
