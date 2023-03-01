function clearlevel2 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    if (level == 1) {
        level = 3
    } else {
        level = 1
    }
    createLevel()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direc2 = -90
    direc = 0
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    gunUsed = true
    playerSlime.setImage(assets.image`playerslimesword`)
    bullet = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f d e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, playerSlime, direc, direc2)
    bullet.setFlag(SpriteFlag.AutoDestroy, true)
    pause(500)
    playerSlime.setImage(assets.image`playerslime`)
    gunUsed = false
})
function createLevel () {
    if (level == 1) {
        if (room1done == false) {
            playerSlime.setPosition(8, 8)
        } else {
            if (throughwhere == 1) {
                playerSlime.setPosition(136, 232)
            }
            if (throughwhere == 2) {
                playerSlime.setPosition(232, 94)
            }
        }
        tiles.setCurrentTilemap(tilemap`level1`)
    }
    if (level == 2) {
        playerSlime.setPosition(130, 25)
        tiles.setCurrentTilemap(tilemap`level2`)
    }
    if (level == 3) {
        playerSlime.setPosition(25, 165)
        tiles.setCurrentTilemap(tilemap`level3`)
    }
    enemy_spawn_mechanic()
    for (let index = 0; index < 10; index++) {
        coin = sprites.create(assets.image`coin`, SpriteKind.Food)
        tiles.placeOnRandomTile(coin, sprites.dungeon.floorLight2)
        animation.runImageAnimation(
        coin,
        assets.animation`blinkingplayer`,
        100,
        true
        )
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    throughwhere = 1
    room1done = true
    clearlevel()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    swordused = true
    playerSlime.setImage(assets.image`playerslimesword0`)
    pause(500)
    playerSlime.setImage(assets.image`playerslime`)
    swordused = false
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direc = -90
    direc2 = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direc = 90
    direc2 = 0
})
function enemy_spawn_mechanic () {
    if (level == 1) {
        counter = 0
        for (let index = 0; index < 2; index++) {
            enemySlime = sprites.create(assets.image`enemyslime`, SpriteKind.Enemy)
            enemySlime.follow(playerSlime, 50)
            counter += 2
            counter = 0
            tiles.placeOnRandomTile(enemySlime, sprites.dungeon.floorLight2)
        }
        for (let index = 0; index < 1; index++) {
            enemySlime = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
            enemySlime.follow(playerSlime, 125)
            counter += 2
            tiles.placeOnRandomTile(enemySlime, sprites.dungeon.floorLight2)
        }
    }
}
function clearlevel () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    if (level == 1) {
        level = 2
    } else {
        level = 1
    }
    createLevel()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direc2 = 90
    direc = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
    info.changeScoreBy(100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    throughwhere = 2
    room1done = true
    clearlevel2()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.warmRadial, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (swordused == true) {
        sprites.destroy(otherSprite, effects.warmRadial, 500)
    } else {
        info.changeLifeBy(-1)
        pause(500)
    }
})
let enemySlime: Sprite = null
let counter = 0
let swordused = false
let coin: Sprite = null
let throughwhere = 0
let room1done = false
let bullet: Sprite = null
let gunUsed = false
let direc = 0
let direc2 = 0
let playerSlime: Sprite = null
let level = 0
music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
level = 1
info.setLife(3)
info.setScore(0)
playerSlime = sprites.create(assets.image`playerslime`, SpriteKind.Player)
controller.moveSprite(playerSlime)
scene.cameraFollowSprite(playerSlime)
createLevel()
