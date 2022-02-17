import { homedir } from 'os'
import { join } from 'path'
import { promises } from 'fs'
// import { basename, dirname, extname, relative, isAbsolute, resolve, sep } from 'path'

const filePath = join(homedir(), "weather-data.json")
//join = combines path for different OS 
//homedir() = returns home directiry for different OS
// console.log(basename(filePath)) // returns file or folder of our path
// console.log(dirname(filePath)) // returns absolute path of our path
// console.log(extname(filePath)) // returns extention name of our path (.json hered)
// console.log(relative(filePath, dirname(filePath))) // returns relative path between 1st and 2nd arguments (paths)
// console.log(isAbsolute(filePath)) // is the path absolute  
// console.log(resolve(".."))// returns absolute path with added routes (../ in example)
// console.log(sep())// returns separator of the current OS

const isExist = async (path) => {
    try {
        await promises.stat(path) //.stat() method is used to return information about 
        //the given file or directory. The Promise is resolved with the fs.Stats object for the given path.
        //can be used as fsPromises.stat(path)
        return true
    }
    catch {
        return false
    }
}

const saveKeyValue = (key, value) => {
    let data = {}
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath)
        data = JSON.parse(file)
    }
    data[key] = value
    await promises.writeFile(filePath, JSON.stringify(data))
}

const getKeyValue = async (key) => {
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath)
        data = JSON.parse(file)
        return data[key]
    }
    return undefined
}

export { saveKeyValue, getKeyValue }