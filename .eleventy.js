module.exports = function (config) {
    config.addPassthroughCopy('./style.css');
    config.addPassthroughCopy('./src/img');
    config.addWatchTarget('./style.css');
    config.addWatchTarget('./src/img');

    return {
        dir: {
            input: 'pages',
            output: 'public'
        }
    }
}
