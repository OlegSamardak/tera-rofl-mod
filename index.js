module.exports = function RoflMod(mod) {
    mod.command.add('huy', (x, y, z) => {
        mod.command.message('pizda in : ' + [x, y, z].join(', '))
    })

    mod.hook('S_SHOW_DEAD_UI', 1, event => {
        mod.log(event);
    })
};
