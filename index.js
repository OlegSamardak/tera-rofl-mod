module.exports = function RoflMod(mod) {
    mod.command.add('huy', (x, y, z) => {
        mod.command.message('pizda in : ' + [x, y, z].join(', '))
    })

    mod.hook('S_SHOW_HP', 3, event => {
        if (event.curHp == 0) {
            mod.command.message('jebat ti loh');
        }
    })
};
