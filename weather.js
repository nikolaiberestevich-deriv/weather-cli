#!/usr/bin/env node
import { getArgs } from './helpers/getArgs.js';
const weatherCli = () => {

    const args = getArgs(process.argv)
    console.log(args);

}

weatherCli()
