player.onItemInteracted(FEATHER, function () {
    player.say(":)")
})
player.onItemInteracted(BLAZE_ROD, function () {
    player.tell(mobs.target(NEAREST_PLAYER), "ahhhhhhhhhhhhhhhhhhhhhhhhh")
})
player.onChat("chicken", function () {
    for (let index = 0; index < 100; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
gameplay.setGameMode(
SURVIVAL,
mobs.target(NEAREST_PLAYER)
)
mobs.applyEffect(SPEED, mobs.target(ALL_PLAYERS), 1e+38, 1e+43)
mobs.give(
mobs.target(NEAREST_PLAYER),
DISPENSER,
64
)
mobs.give(
mobs.target(NEAREST_PLAYER),
STICKY_PISTON,
64
)
mobs.give(
mobs.target(NEAREST_PLAYER),
REDSTONE_BLOCK,
64
)
mobs.give(
mobs.target(NEAREST_PLAYER),
GRASS,
64
)
mobs.give(
mobs.target(NEAREST_PLAYER),
PISTON,
64
)
mobs.give(
mobs.target(NEAREST_PLAYER),
REDSTONE_WIRE,
64
)
mobs.give(
mobs.target(NEAREST_PLAYER),
REDSTONE_TORCH,
64
)
mobs.give(
mobs.target(NEAREST_PLAYER),
DISPENSER,
64
)
mobs.give(
mobs.target(NEAREST_PLAYER),
UNPOWERED_COMPARATOR,
64
)
mobs.give(
mobs.target(NEAREST_PLAYER),
UNPOWERED_REPEATER,
64
)
