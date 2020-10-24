input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
input.onGesture(Gesture.TiltLeft, function () {
    volume += -32
    // Stops the volume variable going below minimum of 0.
    if (volume < 0) {
        volume = 0
    }
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
})
input.onGesture(Gesture.TiltRight, function () {
    volume += 32
    // Stops the volume variable going above the maximum of 255
    if (volume > 255) {
        volume = 255
    }
})
let volume = 0
volume = 128
// Keep updating the micro:bit's volume setting and bar graph display
basic.forever(function () {
    music.setVolume(volume)
    led.plotBarGraph(
    volume,
    255
    )
})
