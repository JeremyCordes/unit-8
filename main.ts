input.onGesture(Gesture.Shake, function () {
    if (player1Turn == true && randint(0, 4) < 3) {
        basic.clearScreen()
        delay = 0
        while (delay < 500) {
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # .
                . # # . .
                . . # . .
                `)
            delay += 50
            basic.pause(delay)
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . . . .
                `)
            delay += 50
            basic.pause(delay)
            basic.showLeds(`
                . . # . .
                . . # # .
                . # # # #
                . . # # .
                . . # . .
                `)
            delay += 50
            basic.pause(delay)
            basic.showLeds(`
                . . . . .
                . . # . .
                # # # # #
                . # # # .
                . . # . .
                `)
            basic.pause(delay)
            delay += 50
            player1Turn = false
        }
    } else if (player1Turn) {
        basic.showString("Crash!")
        player1Turn = false
    } else if (randint(0, 4) < 3) {
        basic.clearScreen()
        delay = 0
        while (delay < 500) {
            basic.showLeds(`
                . . # . .
                . # # . #
                # # # # #
                . # # . #
                . . # . .
                `)
            delay += 50
            basic.pause(delay)
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . # # # .
                `)
            delay += 50
            basic.pause(delay)
            basic.showLeds(`
                . . # . .
                # . # # .
                # # # # #
                # . # # .
                . . # . .
                `)
            delay += 50
            basic.pause(delay)
            basic.showLeds(`
                . # # # .
                . . # . .
                # # # # #
                . # # # .
                . . # . .
                `)
            basic.pause(delay)
            delay += 50
            player1Turn = true
        }
    } else {
        basic.showString("Crash!")
        player1Turn = true
    }
})
let player1Turn = false
let delay = 0
let spin = 0
delay = 0
player1Turn = true
