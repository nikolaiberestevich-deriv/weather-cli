#!/usr/bin/env node
import { getArgs } from './helpers/getArgs.js';
import { getWeather } from './services/api.services.js';
import { printError, printMessage, printHelp } from './services/log.services.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js'

const saveToken = async (token) => {
    if (!token.length) {
        printError("token is not set")
        return
    }
    try {
        await saveKeyValue("token", token)
        printMessage("token was saved")
    } catch (e) {
        printError(e.message)
    }
}

const weatherCli = () => {

    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }
    if (args.s) {

    }
    if (args.t) {
        saveToken(args.t)
    }
    return getWeather("minsk")
}

await weatherCli()
