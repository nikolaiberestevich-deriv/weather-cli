#!/usr/bin/env node
import { getArgs } from './helpers/getArgs.js';
import { printError, printMessage, printHelp } from './services/log.services.js';
import { saveKeyValue, getKeyValue } from './services/storage.service'

const saveToken = async (token) => {
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
        //save city
    }
    if (args.t) {
        saveToken(args.t)
    }
}

weatherCli()
