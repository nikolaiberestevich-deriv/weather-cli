import chalk from 'chalk'
import dedent from 'dedent-js'

export const printError = (error) => {
    console.log(chalk.bgRed`ERROR: ` + error)
}
export const printMessage = (message) => {
    console.log(chalk.bgGreenBright`Message: ` + message)
}

export const printHelp = () => {
    console.log(
        dedent`${chalk.bgBlue('HELP ')}
        without arguments = weather output
        -s [SITY] for city setting
        -h for help
        -t [API_KEY] for token saving
        }`
    )
}