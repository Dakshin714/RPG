// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010505010201010101010101010501010505010101010101050501010505010105010101020101050501020202020201010101010201010501010201010101020202020202010105010102010501020101010101010101010101020101010405050101010101010101010205050102010501010101010101010102010501010101010105010101050101020202010201010101050501010501010101010505010101010101010101050501010101010101010505010101010101010505010101010105010501010101010101010101050101010105050105050105050505010501010101010101010101010101010101010101010102030302010101010101`, img`
. . . . . 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . 2 2 2 2 2 
. . . . . 2 . . . . . 2 . . . . 
2 2 2 2 2 2 . . . . . 2 . . . 2 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . 2 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 2 2 . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.dungeon.stairLadder,sprites.dungeon.stairLarge,sprites.dungeon.floorLight4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
