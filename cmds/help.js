const menus = {
    main: `
        weather [command] <options>
        today........... show weather for today
        version......... show package version
        help............ show help commands
        forecast........ show 10 days forecasts
        `,
    today: `
        weather today <options>
        --location, -l ..... [location name]
        `,
    forecast: `
        weather forecast <options>
        --location, -l ..... [location name]
        `
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]
console.log(menus[subCmd] || menus.main)
}