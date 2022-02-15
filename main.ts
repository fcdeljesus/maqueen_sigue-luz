basic.forever(function () {
    if (input.lightLevel() > 60) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, input.lightLevel())
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
