 namespace Sprite {
    //% block
    export function arrayOfAllSprites() {
    const allSprites: Sprite[] = [];

    for (const key of Object.keys(game.currentScene().spritesByKind)) {
        for (const sprite of game.currentScene().spritesByKind[parseInt(key)].sprites()) {
            allSprites.push(sprite);
        }
    }
    return allSprites;
}
}