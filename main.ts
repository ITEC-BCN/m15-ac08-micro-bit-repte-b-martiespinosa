input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C C5 C C5 C C5 C C5 ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
