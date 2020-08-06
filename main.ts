function dumpCircleData (circle2: Sprite) {
    console.log("__________________")
    console.logValue("radius", circle.getRadius(circle2))
    console.logValue("color", circle.getColor(circle2))
    console.logValue("filled", circle.getFilled(circle2))
}
let myCircleSprite: Sprite = null
let myCircleSprite2 = circle.create(30, 2)
for (let index = 0; index < 1; index++) {
    myCircleSprite = circle.create(60, 2)
    dumpCircleData(myCircleSprite)
    pause(2000)
    circle.fill(myCircleSprite)
    dumpCircleData(myCircleSprite)
    pause(2000)
    circle.setColor(myCircleSprite, 4)
    dumpCircleData(myCircleSprite)
    pause(2000)
    circle.unfill(myCircleSprite)
    dumpCircleData(myCircleSprite)
    pause(2000)
    circle.fill(myCircleSprite)
    dumpCircleData(myCircleSprite)
}
