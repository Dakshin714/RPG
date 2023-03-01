controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    swordused = true
    playerSlime.setImage(assets.image`playerslimesword`)
    pause(500)
    playerSlime.setImage(assets.image`playerslime`)
    swordused = false
})
function enemy_spawn_mechanic () {
    counter = 0
    for (let index = 0; index < 2; index++) {
        enemySlime = sprites.create(assets.image`enemyslime`, SpriteKind.Enemy)
        enemylocations = [
        104,
        56,
        200,
        104
        ]
        enemySlime.setPosition(enemylocations[counter], enemylocations[counter + 1])
        enemySlime.follow(playerSlime, 50)
        counter += 2
        counter = 0
        for (let index = 0; index < 1; index++) {
            enemySlime = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
            enemy2locations = [136, 232]
            enemySlime.setPosition(enemy2locations[counter], enemy2locations[counter + 1])
            enemySlime.follow(playerSlime, 75)
            counter += 2
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (swordused == true) {
        sprites.destroy(otherSprite)
    } else {
        info.changeLifeBy(-1)
        pause(500)
    }
})
let enemy2locations: number[] = []
let enemylocations: number[] = []
let enemySlime: Sprite = null
let counter = 0
let swordused = false
let playerSlime: Sprite = null
info.setLife(3)
playerSlime = sprites.create(assets.image`playerslime`, SpriteKind.Player)
controller.moveSprite(playerSlime)
playerSlime.setPosition(8, 8)
enemy_spawn_mechanic()
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(playerSlime)
