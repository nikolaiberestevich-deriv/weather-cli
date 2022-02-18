#!/usr/bin/env node
import { getArgs } from './helpers/getArgs.js';
import { getWeather } from './services/api.services.js';
import { printError, printMessage, printHelp } from './services/log.services.js';
import { saveKeyValue, getKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js'

const saveToken = async (token) => {
    if (!token.length) {
        printError("token is not set")
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printMessage("token was saved")
    } catch (e) {
        printError(e.message)
    }
}

const saveCity = async (city) => {
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printMessage("city was saved")
    } catch (e) {
        printError(e.message)
    }
}

const getForecast = async () => {
    try {
        const city = await getKeyValue(TOKEN_DICTIONARY.city)
        const weather = await getWeather(process.env.CITY ?? city)
        console.log(weather);
    } catch (e) {
        if (e?.responce?.status === "404") {
            printError("city was not found")
        } else if (e?.responce?.status === "401") {
            printError("token was not found")
        }
        else {
            printError(e.message)
        }
    }
}

const weatherCli = async () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        await saveCity(args.s)
    }
    if (args.t) {
        await saveToken(args.t)
    }
    getForecast()
}

weatherCli()
