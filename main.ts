function タイトル () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    led.plotBrightness(2, 1, 255)
    led.plotBrightness(2, 2, 255)
    basic.pause(100)
    led.plotBrightness(2, 3, 200)
    basic.pause(200)
    led.plotBrightness(1, 2, 200)
    led.plotBrightness(3, 2, 200)
    led.plotBrightness(2, 4, 200)
    while (ゲーム == 1) {
        if (input.buttonIsPressed(Button.A)) {
            開始 = 1
            break;
        }
        if (input.buttonIsPressed(Button.B)) {
            開始 = 2
            break;
        }
    }
}
function ムービー切替 () {
    ムービー = 0
    basic.clearScreen()
}
function 地下鉄 () {
    自機 = 0
    自機 = 1
}
function 画面固定 () {
	
}
function 店 () {
    自機 = 0
    自機 = 1
}
let ロード硬直 = 0
let 読み込み開始 = 0
let ロード = 0
let ロードｙ = 0
let ロードｘ = 0
let 壁下 = 0
let 壁上 = 0
let 壁右 = 0
let 壁左 = 0
let 駅 = 0
let ショップ = 0
let 実機Y = 0
let 自機X = 0
let マップY = 0
let マップX = 0
let マップサイズ = 0
let スクロ = 0
let 生成 = 0
let マップ = 0
let ワールド = 0
let 自機 = 0
let ムービー = 0
let ゲーム = 0
let 開始 = 0
開始 = 0
ゲーム = 0
ムービー = 1
if (ムービー == 1) {
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    led.plotBrightness(3, 0, 200)
    led.plotBrightness(4, 0, 255)
    led.plotBrightness(3, 1, 255)
    led.plotBrightness(4, 1, 200)
    led.plotBrightness(2, 2, 255)
    basic.pause(500)
    basic.clearScreen()
    led.plotBrightness(1, 0, 255)
    led.plotBrightness(3, 0, 200)
    led.plotBrightness(4, 0, 255)
    led.plotBrightness(2, 1, 200)
    led.plotBrightness(3, 1, 255)
    led.plotBrightness(4, 1, 200)
    led.plotBrightness(2, 2, 255)
    led.plotBrightness(3, 2, 200)
    led.plotBrightness(1, 3, 255)
    led.plotBrightness(4, 3, 255)
    basic.pause(500)
    basic.clearScreen()
    led.plotBrightness(3, 0, 200)
    led.plotBrightness(4, 0, 255)
    led.plotBrightness(0, 1, 255)
    led.plotBrightness(2, 1, 200)
    led.plotBrightness(3, 1, 255)
    led.plotBrightness(4, 1, 200)
    led.plotBrightness(1, 2, 200)
    led.plotBrightness(2, 2, 255)
    led.plotBrightness(3, 2, 200)
    led.plotBrightness(1, 3, 255)
    led.plotBrightness(2, 3, 200)
    led.plotBrightness(0, 4, 255)
    led.plotBrightness(3, 4, 255)
    basic.pause(500)
    basic.clearScreen()
    led.plotBrightness(0, 0, 200)
    led.plotBrightness(1, 0, 255)
    led.plotBrightness(0, 1, 255)
    led.plotBrightness(1, 1, 255)
    basic.pause(500)
    basic.clearScreen()
    led.plotBrightness(0, 0, 200)
    led.plotBrightness(2, 0, 255)
    led.plotBrightness(1, 1, 200)
    led.plotBrightness(2, 1, 255)
    led.plotBrightness(0, 2, 255)
    led.plotBrightness(1, 2, 255)
    led.plotBrightness(2, 2, 255)
    basic.pause(500)
    basic.clearScreen()
    led.plotBrightness(0, 0, 200)
    led.plotBrightness(2, 0, 200)
    led.plotBrightness(3, 0, 255)
    led.plotBrightness(1, 1, 200)
    led.plotBrightness(3, 1, 255)
    led.plotBrightness(0, 2, 200)
    led.plotBrightness(2, 2, 200)
    led.plotBrightness(3, 2, 200)
    led.plotBrightness(0, 3, 255)
    led.plotBrightness(1, 3, 255)
    led.plotBrightness(2, 3, 255)
    led.plotBrightness(3, 3, 255)
    basic.pause(500)
    basic.clearScreen()
    led.plotBrightness(1, 0, 255)
    led.plotBrightness(3, 0, 255)
    led.plotBrightness(0, 1, 255)
    led.plotBrightness(1, 1, 200)
    led.plotBrightness(3, 1, 200)
    led.plotBrightness(4, 1, 255)
    led.plotBrightness(2, 2, 200)
    led.plotBrightness(4, 2, 255)
    led.plotBrightness(0, 3, 255)
    led.plotBrightness(1, 3, 200)
    led.plotBrightness(3, 3, 200)
    led.plotBrightness(4, 3, 255)
    led.plotBrightness(1, 4, 255)
    led.plotBrightness(2, 4, 255)
    led.plotBrightness(3, 4, 255)
    led.plotBrightness(4, 4, 255)
    basic.pause(500)
    basic.clearScreen()
    led.plotBrightness(3, 0, 255)
    led.plotBrightness(2, 1, 255)
    led.plotBrightness(4, 1, 255)
    led.plotBrightness(1, 2, 255)
    led.plotBrightness(2, 2, 200)
    led.plotBrightness(4, 2, 200)
    led.plotBrightness(0, 3, 255)
    led.plotBrightness(3, 3, 200)
    led.plotBrightness(1, 4, 255)
    led.plotBrightness(2, 4, 200)
    led.plotBrightness(4, 4, 200)
    basic.pause(500)
    basic.clearScreen()
    katakana.setScrollTime(70)
    katakana.showString("RPG!")
    ゲーム = 1
    ムービー切替()
    タイトル()
}
basic.forever(function () {
    if (ワールド == 0 && マップ == 1) {
        if (生成 == 1) {
            マップサイズ = 2
            生成 = 0
        } else if (スクロ == 1) {
            led.plot(マップX, マップY)
            led.plot(マップX + 1, マップY)
            led.plot(マップX + 2, マップY)
            led.plot(マップX + 4, マップY)
            led.plotBrightness(マップX + 8, マップY, 200)
            led.plot(マップX, マップY + 1)
            led.plot(マップX + 1, マップY + 1)
            led.plot(マップX + 2, マップY + 1)
            led.plot(マップX + 4, マップY + 1)
            led.plot(マップX + 7, マップY + 1)
            led.plot(マップX + 8, マップY + 1)
            led.plot(マップX + 9, マップY + 1)
            led.plot(マップX + 4, マップY + 2)
            led.plotBrightness(マップX, マップY + 3, 250)
            led.plotBrightness(マップX + 1, マップY + 3, 250)
            led.plot(マップX + 4, マップY + 3)
            led.plot(マップX + 7, マップY + 3)
            led.plot(マップX + 8, マップY + 3)
            led.plot(マップX, マップY + 4)
            led.plot(マップX + 1, マップY + 4)
            led.plot(マップX + 2, マップY + 4)
            led.plot(マップX + 4, マップY + 4)
            led.plotBrightness(マップX + 6, マップY + 4, 230)
            led.plot(マップX + 7, マップY + 4)
            led.plot(マップX + 8, マップY + 4)
            led.plotBrightness(マップX + 9, マップY + 4, 230)
            led.plot(マップX + 7, マップY + 5)
            led.plot(マップX + 8, マップY + 5)
            led.plot(マップX + 2, マップY + 6)
            led.plot(マップX + 3, マップY + 6)
            led.plot(マップX, マップY + 7)
            led.plot(マップX + 2, マップY + 7)
            led.plot(マップX + 3, マップY + 7)
            led.plot(マップX, マップY + 8)
            led.plotBrightness(マップX + 9, マップY + 8, 100)
            led.plotBrightness(マップX + 4, マップY + 9, 100)
            led.plotBrightness(マップX + 5, マップY + 9, 100)
            led.plotBrightness(マップX + 8, マップY + 9, 100)
            led.plot(マップX + 9, マップY + 9)
            スクロ = 0
        }
        if (マップX + 4 == 自機X && マップY + 9 == 実機Y || マップX + 5 == 自機X && マップY + 9 == 実機Y) {
            ワールド = 0
            マップ = 2
            マップX = 0
            マップY = -2
            basic.clearScreen()
            生成 = 1
            自機X = 2
            実機Y = 2
            スクロ = 1
        } else if (マップX + 8 == 自機X && マップY + 9 == 実機Y || マップX + 9 == 自機X && マップY + 8 == 実機Y) {
            ワールド = 0
            マップ = 0
            マップX = 0
            マップY = 0
            スクロ = 0
            自機X = 2
            実機Y = 4
            生成 = 1
        }
    }
})
basic.forever(function () {
    if (ワールド == 0 && マップ == 2) {
        if (生成 == 1) {
            マップサイズ = 5
            生成 = 0
        } else if (スクロ == 1) {
            led.plot(マップX + 1, マップY)
            led.plot(マップX + 2, マップY)
            led.plot(マップX + 3, マップY)
            led.plot(マップX + 7, マップY)
            led.plot(マップX + 8, マップY)
            led.plot(マップX + 9, マップY)
            led.plot(マップX + 14, マップY)
            led.plot(マップX + 15, マップY)
            led.plot(マップX + 16, マップY)
            led.plot(マップX + 17, マップY)
            led.plot(マップX + 18, マップY)
            led.plot(マップX + 19, マップY)
            led.plot(マップX, マップY + 1)
            led.plot(マップX + 1, マップY + 1)
            led.plot(マップX + 2, マップY + 1)
            led.plot(マップX + 3, マップY + 1)
            led.plot(マップX + 4, マップY + 1)
            led.plot(マップX + 6, マップY + 1)
            led.plot(マップX + 7, マップY + 1)
            led.plot(マップX + 8, マップY + 1)
            led.plot(マップX + 9, マップY + 1)
            led.plot(マップX + 10, マップY + 1)
            led.plot(マップX + 14, マップY + 1)
            led.plot(マップX + 15, マップY + 1)
            led.plotBrightness(マップX + 16, マップY + 1, 170)
            led.plot(マップX + 17, マップY + 1)
            led.plot(マップX + 19, マップY + 1)
            led.plot(マップX + 1, マップY + 2)
            led.plot(マップX + 3, マップY + 2)
            led.plot(マップX + 7, マップY + 2)
            led.plot(マップX + 9, マップY + 2)
            led.plot(マップX + 14, マップY + 2)
            led.plot(マップX + 15, マップY + 2)
            led.plotBrightness(マップX + 16, マップY + 2, 170)
            led.plot(マップX + 17, マップY + 2)
            led.plot(マップX + 18, マップY + 2)
            led.plot(マップX + 19, マップY + 2)
            led.plot(マップX + 1, マップY + 3)
            led.plotBrightness(マップX + 2, マップY + 3, 240)
            led.plot(マップX + 3, マップY + 3)
            led.plot(マップX + 7, マップY + 3)
            led.plotBrightness(マップX + 8, マップY + 3, 240)
            led.plot(マップX + 9, マップY + 3)
            led.plotBrightness(マップX + 16, マップY + 3, 30)
            led.plotBrightness(マップX + 2, マップY + 4, 30)
            led.plotBrightness(マップX + 8, マップY + 4, 30)
            led.plotBrightness(マップX + 11, マップY + 4, 30)
            led.plotBrightness(マップX + 12, マップY + 4, 30)
            led.plotBrightness(マップX + 13, マップY + 4, 30)
            led.plotBrightness(マップX + 14, マップY + 4, 30)
            led.plotBrightness(マップX + 15, マップY + 4, 30)
            led.plotBrightness(マップX + 16, マップY + 4, 30)
            led.plotBrightness(マップX + 2, マップY + 5, 30)
            led.plotBrightness(マップX + 3, マップY + 5, 30)
            led.plot(マップX + 4, マップY + 5)
            led.plot(マップX + 5, マップY + 5)
            led.plotBrightness(マップX + 6, マップY + 5, 30)
            led.plotBrightness(マップX + 7, マップY + 5, 30)
            led.plotBrightness(マップX + 8, マップY + 5, 30)
            led.plotBrightness(マップX + 9, マップY + 5, 30)
            led.plotBrightness(マップX + 10, マップY + 5, 30)
            led.plotBrightness(マップX + 11, マップY + 5, 30)
            led.plot(マップX + 13, マップY + 5)
            led.plot(マップX + 14, マップY + 5)
            led.plot(マップX + 15, マップY + 5)
            led.plot(マップX + 16, マップY + 5)
            led.plot(マップX + 17, マップY + 5)
            led.plot(マップX + 18, マップY + 5)
            led.plot(マップX + 19, マップY + 5)
            led.plotBrightness(マップX + 1, マップY + 6, 30)
            led.plotBrightness(マップX + 2, マップY + 6, 30)
            led.plotBrightness(マップX + 3, マップY + 6, 30)
            led.plotBrightness(マップX + 4, マップY + 6, 30)
            led.plotBrightness(マップX + 5, マップY + 6, 30)
            led.plotBrightness(マップX + 6, マップY + 6, 30)
            led.plotBrightness(マップX + 7, マップY + 6, 30)
            led.plotBrightness(マップX + 8, マップY + 6, 30)
            led.plot(マップX + 13, マップY + 6)
            led.plot(マップX + 15, マップY + 6)
            led.plot(マップX + 17, マップY + 6)
            led.plot(マップX + 19, マップY + 6)
            led.plot(マップX + 1, マップY + 7)
            led.plotBrightness(マップX + 2, マップY + 7, 30)
            led.plotBrightness(マップX + 3, マップY + 7, 30)
            led.plotBrightness(マップX + 4, マップY + 7, 30)
            led.plotBrightness(マップX + 5, マップY + 7, 30)
            led.plotBrightness(マップX + 6, マップY + 7, 30)
            led.plotBrightness(マップX + 7, マップY + 7, 30)
            led.plot(マップX + 8, マップY + 7)
            led.plot(マップX + 13, マップY + 7)
            led.plot(マップX + 14, マップY + 7)
            led.plot(マップX + 15, マップY + 7)
            led.plot(マップX + 16, マップY + 7)
            led.plot(マップX + 17, マップY + 7)
            led.plot(マップX + 18, マップY + 7)
            led.plot(マップX + 19, マップY + 7)
            led.plot(マップX + 1, マップY + 8)
            led.plotBrightness(マップX + 2, マップY + 8, 30)
            led.plotBrightness(マップX + 3, マップY + 8, 30)
            led.plotBrightness(マップX + 4, マップY + 8, 30)
            led.plotBrightness(マップX + 5, マップY + 8, 30)
            led.plotBrightness(マップX + 6, マップY + 8, 30)
            led.plotBrightness(マップX + 7, マップY + 8, 30)
            led.plot(マップX + 8, マップY + 8)
            led.plot(マップX + 13, マップY + 8)
            led.plotBrightness(マップX + 14, マップY + 8, 150)
            led.plot(マップX + 15, マップY + 8)
            led.plotBrightness(マップX + 16, マップY + 8, 150)
            led.plot(マップX + 17, マップY + 8)
            led.plotBrightness(マップX + 18, マップY + 8, 150)
            led.plot(マップX + 19, マップY + 8)
            led.plotBrightness(マップX + 1, マップY + 9, 30)
            led.plotBrightness(マップX + 2, マップY + 9, 30)
            led.plotBrightness(マップX + 3, マップY + 9, 30)
            led.plotBrightness(マップX + 4, マップY + 9, 30)
            led.plotBrightness(マップX + 5, マップY + 9, 30)
            led.plotBrightness(マップX + 6, マップY + 9, 30)
            led.plotBrightness(マップX + 7, マップY + 9, 30)
            led.plotBrightness(マップX + 8, マップY + 9, 30)
            led.plotBrightness(マップX + 9, マップY + 9, 30)
            led.plotBrightness(マップX + 10, マップY + 9, 30)
            led.plotBrightness(マップX + 11, マップY + 9, 30)
            led.plotBrightness(マップX + 12, マップY + 9, 30)
            led.plotBrightness(マップX + 13, マップY + 9, 30)
            led.plotBrightness(マップX + 14, マップY + 9, 30)
            led.plotBrightness(マップX + 15, マップY + 9, 30)
            led.plotBrightness(マップX + 16, マップY + 9, 30)
            led.plotBrightness(マップX + 17, マップY + 9, 30)
            led.plotBrightness(マップX + 18, マップY + 9, 30)
            led.plot(マップX, マップY + 10)
            led.plot(マップX + 1, マップY + 10)
            led.plot(マップX + 2, マップY + 10)
            led.plotBrightness(マップX + 3, マップY + 10, 30)
            led.plot(マップX + 4, マップY + 10)
            led.plot(マップX + 5, マップY + 10)
            led.plotBrightness(マップX + 6, マップY + 10, 30)
            led.plotBrightness(マップX + 7, マップY + 10, 30)
            led.plotBrightness(マップX + 9, マップY + 10, 30)
            led.plotBrightness(マップX + 10, マップY + 10, 30)
            led.plotBrightness(マップX + 12, マップY + 10, 30)
            led.plot(マップX + 13, マップY + 10)
            led.plotBrightness(マップX + 13, マップY + 10, 30)
            led.plotBrightness(マップX + 14, マップY + 10, 30)
            led.plot(マップX + 15, マップY + 10)
            led.plotBrightness(マップX + 16, マップY + 10, 30)
            led.plot(マップX + 17, マップY + 10)
            led.plotBrightness(マップX + 18, マップY + 10, 30)
            led.plot(マップX + 19, マップY + 10)
            led.plot(マップX, マップY + 11)
            led.plotBrightness(マップX + 1, マップY + 11, 180)
            led.plotBrightness(マップX + 2, マップY + 11, 30)
            led.plotBrightness(マップX + 3, マップY + 11, 30)
            led.plotBrightness(マップX + 4, マップY + 11, 30)
            led.plotBrightness(マップX + 5, マップY + 11, 30)
            led.plotBrightness(マップX + 6, マップY + 11, 30)
            led.plotBrightness(マップX + 7, マップY + 11, 30)
            led.plotBrightness(マップX + 8, マップY + 11, 30)
            led.plotBrightness(マップX + 9, マップY + 11, 30)
            led.plotBrightness(マップX + 10, マップY + 11, 30)
            led.plotBrightness(マップX + 12, マップY + 11, 30)
            led.plotBrightness(マップX + 13, マップY + 11, 30)
            led.plotBrightness(マップX + 14, マップY + 11, 30)
            led.plot(マップX + 15, マップY + 11)
            led.plotBrightness(マップX + 16, マップY + 11, 30)
            led.plotBrightness(マップX + 17, マップY + 11, 30)
            led.plotBrightness(マップX + 18, マップY + 11, 30)
            led.plot(マップX + 19, マップY + 11)
            led.plot(マップX, マップY + 12)
            led.plot(マップX + 1, マップY + 12)
            led.plot(マップX + 2, マップY + 12)
            led.plotBrightness(マップX + 9, マップY + 12, 30)
            led.plotBrightness(マップX + 10, マップY + 12, 30)
            led.plotBrightness(マップX + 12, マップY + 12, 30)
            led.plot(マップX + 13, マップY + 12)
            led.plotBrightness(マップX + 14, マップY + 12, 30)
            led.plotBrightness(マップX + 15, マップY + 12, 30)
            led.plotBrightness(マップX + 16, マップY + 12, 30)
            led.plot(マップX + 17, マップY + 12)
            led.plot(マップX + 18, マップY + 12)
            led.plotBrightness(マップX + 19, マップY + 12, 30)
            led.plot(マップX + 8, マップY + 13)
            led.plotBrightness(マップX + 9, マップY + 13, 30)
            led.plotBrightness(マップX + 10, マップY + 13, 30)
            led.plot(マップX + 11, マップY + 13)
            led.plotBrightness(マップX + 12, マップY + 13, 30)
            led.plotBrightness(マップX + 13, マップY + 13, 30)
            led.plot(マップX + 14, マップY + 13)
            led.plotBrightness(マップX + 15, マップY + 13, 30)
            led.plot(マップX + 16, マップY + 13)
            led.plotBrightness(マップX + 17, マップY + 13, 30)
            led.plotBrightness(マップX + 18, マップY + 13, 30)
            led.plot(マップX + 19, マップY + 13)
            led.plot(マップX, マップY + 14)
            led.plot(マップX + 1, マップY + 14)
            led.plot(マップX + 2, マップY + 14)
            led.plot(マップX + 3, マップY + 14)
            led.plot(マップX + 4, マップY + 14)
            led.plot(マップX + 5, マップY + 14)
            led.plot(マップX + 6, マップY + 14)
            led.plot(マップX + 7, マップY + 14)
            led.plot(マップX + 8, マップY + 14)
            led.plotBrightness(マップX + 9, マップY + 14, 30)
            led.plotBrightness(マップX + 10, マップY + 14, 30)
            led.plot(マップX + 11, マップY + 14)
            led.plot(マップX + 12, マップY + 14)
            led.plot(マップX + 13, マップY + 14)
            led.plot(マップX + 14, マップY + 14)
            led.plot(マップX + 15, マップY + 14)
            led.plot(マップX + 16, マップY + 14)
            led.plot(マップX + 17, マップY + 14)
            led.plot(マップX + 18, マップY + 14)
            led.plot(マップX + 19, マップY + 14)
        }
        if (マップX + 2 == 自機X && マップY + 3 == 実機Y) {
            ワールド = 0
            マップ = 1
            マップX = -5
            マップY = -8
            スクロ = 1
            basic.clearScreen()
            生成 = 1
            自機X = 2
            実機Y = 2
        } else if (マップX + 8 == 自機X && マップY + 3 == 実機Y) {
            ワールド = 0
            マップ = 2
            マップX = -1
            マップY = -1
            スクロ = 1
            basic.clearScreen()
            生成 = 1
            自機X = 2
            実機Y = 2
        } else if (マップX + 16 == 自機X && マップY + 2 == 実機Y) {
            ワールド = 0
            マップ = 3
            マップX = 0
            マップY = 0
            スクロ = 1
            basic.clearScreen()
            生成 = 1
            自機X = 1
            実機Y = 3
        } else if (マップX + randint(14, 18) == 自機X && マップY + 8 == 実機Y) {
            ワールド = 0
            マップ = 2
            マップX = -1
            マップY = -1
            スクロ = 1
            basic.clearScreen()
            生成 = 1
            自機X = 2
            実機Y = 2
        } else if (マップX + 1 == 自機X && マップY + 11 == 実機Y) {
            ワールド = 0
            マップ = 5
            マップX = -6
            マップY = 2
            スクロ = 1
            basic.clearScreen()
            生成 = 1
            自機X = 2
            実機Y = 2
        } else if (マップY + 14 == 実機Y) {
            ワールド = 1
            マップ = 2
            マップX = -1
            マップY = -1
            スクロ = 1
            basic.clearScreen()
            生成 = 1
            自機X = 2
            実機Y = 2
        }
    }
})
basic.forever(function () {
    if (ワールド == 0 && マップ == 3) {
        if (生成 == 1) {
            マップサイズ = 0
            生成 = 0
        } else if (スクロ == 1) {
            basic.showLeds(`
                # # . . #
                . . # . #
                # # # # #
                . . . . .
                . # . . .
                `)
            led.plotBrightness(2, 1, 200)
            led.plotBrightness(2, 3, 100)
            led.plotBrightness(1, 4, 30)
            スクロ = 0
        }
        if (自機X == 2 && 実機Y == 3 && 0 == 0) {
            ショップ = 1
            自機X = -1
            実機Y = -1
            店()
        }
        if (自機X == 1 && 実機Y == 4) {
            ワールド = 0
            マップ = 2
            マップX = 14
            マップY = -1
            スクロ = 1
            basic.clearScreen()
            生成 = 1
            自機X = 2
            実機Y = 2
        }
    }
})
basic.forever(function () {
    if (ワールド == 0 && マップ == 5) {
        if (生成 == 1) {
            マップサイズ = 2
            生成 = 0
        } else if (スクロ == 1) {
            led.plot(マップX + 3, マップY)
            led.plot(マップX + 4, マップY)
            led.plotBrightness(マップX + 9, マップY, 200)
            led.plot(マップX, マップY + 1)
            led.plotBrightness(マップX + 8, マップY + 1, 200)
            led.plot(マップX + 9, マップY + 1)
            led.plot(マップX, マップY + 2)
            led.plot(マップX + 3, マップY + 2)
            led.plot(マップX + 4, マップY + 2)
            led.plot(マップX, マップY + 4)
            led.plot(マップX + 3, マップY + 4)
            led.plot(マップX + 4, マップY + 4)
            led.plot(マップX + 5, マップY + 4)
            led.plot(マップX + 6, マップY + 4)
            led.plot(マップX + 7, マップY + 4)
            led.plot(マップX + 8, マップY + 4)
            led.plot(マップX + 9, マップY + 4)
            led.plot(マップX, マップY + 5)
            led.plot(マップX, マップY + 6)
            led.plot(マップX + 1, マップY + 6)
            led.plot(マップX + 4, マップY + 6)
            led.plot(マップX + 5, マップY + 6)
            led.plot(マップX + 6, マップY + 6)
            led.plot(マップX + 9, マップY + 6)
            led.plotBrightness(マップX, マップY + 7, 50)
            led.plotBrightness(マップX + 1, マップY + 7, 100)
            led.plotBrightness(マップX + 2, マップY + 7, 255)
            led.plotBrightness(マップX + 3, マップY + 7, 255)
            led.plotBrightness(マップX + 4, マップY + 7, 255)
            led.plotBrightness(マップX + 5, マップY + 7, 50)
            led.plotBrightness(マップX + 6, マップY + 7, 255)
            led.plotBrightness(マップX + 7, マップY + 7, 255)
            led.plotBrightness(マップX + 8, マップY + 7, 255)
            led.plotBrightness(マップX + 9, マップY + 7, 255)
            led.plotBrightness(マップX + 1, マップY + 8, 255)
            led.plotBrightness(マップX + 2, マップY + 8, 255)
            led.plotBrightness(マップX + 3, マップY + 8, 255)
            led.plotBrightness(マップX + 4, マップY + 8, 255)
            led.plotBrightness(マップX + 5, マップY + 8, 255)
            led.plotBrightness(マップX + 6, マップY + 8, 255)
            led.plotBrightness(マップX + 7, マップY + 8, 255)
            led.plotBrightness(マップX + 8, マップY + 8, 255)
            led.plotBrightness(マップX + 9, マップY + 8, 255)
            led.plotBrightness(マップX, マップY + 9, 50)
            led.plotBrightness(マップX + 1, マップY + 9, 100)
            led.plotBrightness(マップX + 2, マップY + 9, 255)
            led.plotBrightness(マップX + 3, マップY + 9, 255)
            led.plotBrightness(マップX + 4, マップY + 9, 255)
            led.plotBrightness(マップX + 5, マップY + 9, 50)
            led.plotBrightness(マップX + 6, マップY + 9, 255)
            led.plotBrightness(マップX + 7, マップY + 9, 255)
            led.plotBrightness(マップX + 8, マップY + 9, 255)
            led.plotBrightness(マップX + 9, マップY + 9, 255)
        }
        if (マップY + 6 == 実機Y) {
            駅 = 1
            地下鉄()
        }
        if (マップX + 9 == 自機X && マップY == 実機Y || マップX + 8 == 自機X && 実機Y + 1 == 実機Y) {
            ワールド = 0
            マップ = 2
            マップX = 0
            マップY = -9
            スクロ = 1
            basic.clearScreen()
            生成 = 1
            自機X = 2
            実機Y = 2
        }
    }
})
basic.forever(function () {
    if (ワールド == 0 && マップ == 2) {
        if (生成 == 1) {
            マップサイズ = 5
            生成 = 0
        } else if (スクロ == 1) {
            led.plot(マップX + 1, マップY)
            led.plot(マップX + 1, マップY + 1)
        }
        if (マップX + 0 == 自機X && マップY + 0 == 実機Y) {
            ワールド = 0
            マップ = 0
            マップX = 0
            マップY = 0
            スクロ = 1
            basic.clearScreen()
            生成 = 1
            自機X = 2
            実機Y = 2
        } else if (false) {
        	
        }
    }
})
basic.forever(function () {
    if (自機X == 0) {
        壁左 = 1
    } else {
        壁左 = 0
    }
    if (自機X == 4) {
        壁右 = 1
    } else {
        壁右 = 0
    }
    if (実機Y == 0) {
        壁上 = 1
    } else {
        壁上 = 0
    }
    if (実機Y == 4) {
        壁下 = 1
    } else {
        壁下 = 0
    }
})
basic.forever(function () {
    if (自機 == 1) {
        led.plotBrightness(自機X, 実機Y, 150)
    }
})
basic.forever(function () {
    if (生成 == 1 && ワールド == 0 && マップ == 0) {
        マップサイズ = 0
        // 屋根裏部屋
        // べ　　机
        // ッ　椅子
        // ト
        // 棚　階段
        basic.showLeds(`
            # # . # #
            # # . . .
            # # . . #
            . . . . .
            # . . . #
            `)
        led.plotBrightness(3, 4, 200)
        生成 = 0
    } else if (自機X == 3 && 実機Y == 4 && ワールド == 0 && マップ == 0) {
        マップ = 1
        マップX = -6
        マップY = -6
        スクロ = 1
        basic.clearScreen()
        生成 = 1
        自機X = 2
        実機Y = 2
    }
})
basic.forever(function () {
    if (開始 == 2) {
        ゲーム = 0
        basic.clearScreen()
        basic.pause(100)
        ロードｘ = 0
        ロードｙ = 0
        ロード = 1
        開始 = 0
    }
})
basic.forever(function () {
    if (ロード == 3) {
    	
    }
})
basic.forever(function () {
    if (読み込み開始 == 1) {
        if (led.point(0, 0)) {
        	
        } else if (!(led.point(0, 0))) {
        	
        }
        if (led.point(0, 1)) {
        	
        } else if (!(led.point(0, 1))) {
        	
        }
        if (led.point(0, 2)) {
        	
        } else if (!(led.point(0, 2))) {
        	
        }
        if (led.point(0, 3)) {
        	
        } else if (!(led.point(0, 3))) {
        	
        }
        if (led.point(0, 4)) {
        	
        } else if (!(led.point(0, 4))) {
        	
        }
        if (led.point(1, 0)) {
        	
        } else if (!(led.point(1, 0))) {
        	
        }
        if (led.point(1, 1)) {
        	
        } else if (!(led.point(1, 1))) {
        	
        }
        if (led.point(1, 2)) {
        	
        } else if (!(led.point(1, 2))) {
        	
        }
        if (led.point(1, 3)) {
        	
        } else if (!(led.point(1, 3))) {
        	
        }
        if (led.point(1, 4)) {
        	
        } else if (!(led.point(1, 4))) {
        	
        }
        if (led.point(2, 0)) {
        	
        } else if (!(led.point(2, 0))) {
        	
        }
        if (led.point(2, 1)) {
        	
        } else if (!(led.point(2, 1))) {
        	
        }
        if (led.point(2, 2)) {
        	
        } else if (!(led.point(2, 2))) {
        	
        }
        if (led.point(2, 3)) {
        	
        } else if (!(led.point(2, 3))) {
        	
        }
        if (led.point(2, 4)) {
        	
        } else if (!(led.point(2, 4))) {
        	
        }
        if (led.point(3, 0)) {
        	
        } else if (!(led.point(3, 0))) {
        	
        }
        if (led.point(3, 1)) {
        	
        } else if (!(led.point(3, 1))) {
        	
        }
        if (led.point(3, 2)) {
        	
        } else if (!(led.point(3, 2))) {
        	
        }
        if (led.point(3, 3)) {
        	
        } else if (!(led.point(3, 3))) {
        	
        }
        if (led.point(3, 4)) {
        	
        } else if (!(led.point(3, 4))) {
        	
        }
        if (led.point(4, 0)) {
        	
        } else if (!(led.point(4, 0))) {
        	
        }
        if (led.point(4, 1)) {
        	
        } else if (!(led.point(4, 1))) {
        	
        }
        if (led.point(4, 2)) {
        	
        } else if (!(led.point(4, 2))) {
        	
        }
        if (led.point(4, 3)) {
        	
        } else if (!(led.point(4, 3))) {
        	
        }
        if (led.point(4, 4)) {
        	
        } else if (!(led.point(4, 4))) {
        	
        }
        読み込み開始 = 0
        ロード = 3
    }
})
basic.forever(function () {
    if (ロード == 1) {
        if (ロード硬直 == 0) {
            if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
                led.plot(ロードｘ, ロードｙ)
                ロードｘ += 1
                ロード硬直 = 1
            } else if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
                led.unplot(ロードｘ, ロードｙ)
                ロードｘ += 1
                ロード硬直 = 1
            } else if (input.buttonIsPressed(Button.AB) || input.pinIsPressed(TouchPin.P0)) {
                ロード硬直 = 1
            }
        }
        if (ロード硬直 == 1) {
            if (ロードｘ == 5) {
                ロードｘ = 0
                ロードｙ += 1
                basic.pause(100)
                ロード硬直 = 0
                if (ロードｙ == 5) {
                    読み込み開始 = 1
                    ロード = 2
                }
            } else {
                basic.pause(200)
                ロード硬直 = 0
            }
        }
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    let 画面固定変 = 0
    if (input.buttonIsPressed(Button.A)) {
        if (!(led.pointBrightness(自機X, 実機Y - 1) == 255) && 壁上 == 0) {
            if (マップサイズ == 0 || 画面固定変 == 1) {
                led.unplot(自機X, 実機Y)
                実機Y += -1
            } else if (!(マップサイズ == 0)) {
                マップY += 1
                basic.clearScreen()
                スクロ = 1
            }
            basic.pause(100)
        }
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        if (!(led.pointBrightness(自機X - 1, 実機Y) == 255) && 壁左 == 0) {
            if (マップサイズ == 0 || 画面固定変 == 1) {
                led.unplot(自機X, 実機Y)
                自機X += -1
            } else if (!(マップサイズ == 0)) {
                マップX += 1
                basic.clearScreen()
                スクロ = 1
            }
            basic.pause(100)
        }
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        if (!(led.pointBrightness(自機X, 実機Y + 1) == 255) && 壁下 == 0) {
            if (マップサイズ == 0 || 画面固定変 == 1) {
                led.unplot(自機X, 実機Y)
                実機Y += 1
            } else if (!(マップサイズ == 0)) {
                マップY += -1
                basic.clearScreen()
                スクロ = 1
            }
            basic.pause(100)
        }
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        if (!(led.pointBrightness(自機X + 1, 実機Y) == 255) && 壁右 == 0) {
            if (マップサイズ == 0 || 画面固定変 == 1) {
                led.unplot(自機X, 実機Y)
                自機X += 1
            } else if (!(マップサイズ == 0)) {
                マップX += -1
                basic.clearScreen()
                スクロ = 1
            }
            basic.pause(100)
        }
    }
})
basic.forever(function () {
    if (開始 == 1) {
        basic.clearScreen()
        生成 = 1
        壁上 = 0
        壁左 = 0
        壁右 = 0
        壁下 = 0
        自機X = 2
        実機Y = 2
        ワールド = 0
        マップ = 0
        マップX = 0
        マップY = 0
        自機 = 1
        開始 = 0
    }
})
