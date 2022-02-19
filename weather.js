#!/usr/bin/env node
import { getArgs } from './helpers/getArgs.js';
import { getWeather, getIcon } from './services/api.services.js';
import { printError, printMessage, printHelp, PrintWeather } from './services/log.services.js';
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
    if (!city.length) {
        printError("city is not set")
        return
    }
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
        PrintWeather(weather, getIcon(weather.weather[0].icon))
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

const weatherCli = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        return printHelp()
    }
    if (args.s) {
        return saveCity(args.s)
    }
    if (args.t) {
        return saveToken(args.t)
    }
    getForecast()
}

weatherCli()
