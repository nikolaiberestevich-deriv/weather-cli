#!/usr/bin/env node
import { getArgs } from './helpers/getArgs.js';
import { printError, printMessage, printHelp } from './services/log.services.js';
const weatherCli = () => {

    const args = getArgs(process.argv)

    if (args.h) {
        printHelp()
    }
    if (args.s) {
        //save city
    }
    if (args.t) {
        //save token
    }
}

weatherCli()
