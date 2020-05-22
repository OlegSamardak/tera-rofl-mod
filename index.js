module.exports = function RoflMod(mod) {
    mod.command.add('huy', (x, y, z) => {
        mod.command.message('pizda in : ' + [x, y, z].join(', '))
    })

    mod.hook('S_SHOW_DEAD_UI', 2, event => {
        mod.log(mod.clientInterface.info.path + '/dancing_coffin.jpg');
        mod.send("S_CUSTOM_STYLE_SYSTEM_MESSAGE", 1, {
            message: `<img src="img://__${mod.clientInterface.info.path + '/dancing_coffin.jpg'}" width="48" height="48" vspace="-20"/><font size="24">&nbsp;Some really cool guys</font>`,
            style: mod.settings.resetStyle
        });
    })
};
