module.exports = function RoflMod(mod) {
    mod.game.initialize("me");

    mod.game.me.on('die', () => {
        mod.log(mod.clientInterface.info.path + '/dancing_coffin.jpg');
        mod.log(mod);
        mod.send("S_CUSTOM_STYLE_SYSTEM_MESSAGE", 1, {
            message: `<img src="img://__Icon_Skills.rapidshot_Tex'}" width="300" height="300" vspace="-20"/><font size="24">&nbsp;Some really cool guys</font>`,
            style: 51
        });
    })
};
