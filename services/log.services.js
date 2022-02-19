import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (error) => {
    console.log(chalk.bgRed`ERROR: ` + error)
}
const printMessage = (message) => {
    console.log(chalk.bgGreenBright`Message: ` + message)
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgBlue('HELP ')}
        without arguments = weather output
        -s [SITY] for city setting
        -h for help
        -t [API_KEY] for token saving
        }`
    )
}

const PrintWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgGreen('CURRENT WEATHER')} in ${res.name} city
        ${icon} ${res.weather[0].description}
       temperature: ${res.main.temp} C (Feels like ${res.main.feels_like} C)
       Humidity: ${res.main.humidity}%
       Wind speed: ${res.wind.speed} m/sec`
    )
}
export { printError, printMessage, printHelp, PrintWeather }