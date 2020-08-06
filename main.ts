function dumpCircleData (circle2: Sprite) {
    console.log("__________________")
    console.logValue("radius", circle.getRadius(circle2))
    console.logValue("color", circle.getColor(circle2))
    console.logValue("filled", circle.getFilled(circle2))
}
let myCircleSprite: Sprite = null
for (let index = 0; index < 3; index++) {
    myCircleSprite = circle.createCircle(randint(10, 60), 2)
    dumpCircleData(myCircleSprite)
    pause(2000)
    circle.fill(myCircleSprite)
    dumpCircleData(myCircleSprite)
    pause(2000)
    circle.setColor(myCircleSprite, circle.randomColor(3, 0, 15, 2))
    dumpCircleData(myCircleSprite)
    pause(2000)
    circle.unfill(myCircleSprite)
    dumpCircleData(myCircleSprite)
    pause(2000)
    circle.fill(myCircleSprite)
    dumpCircleData(myCircleSprite)
    pause(2000)
    myCircleSprite.setVelocity(50, 50)
    myCircleSprite.setFlag(SpriteFlag.BounceOnWall, true)
    pause(2000)
    myCircleSprite.destroy(effects.spray, 500)
    pause(2000)
}
