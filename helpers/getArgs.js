
const getArgs = (args) => {
    const res = {};
    const [executer, file, ...rest] = args;
    rest.forEach((value, index, array) => {
        if (value.charAt(0) == '-') {
            if (index == array.length - 1) {
                res[value.substring(1)] = true;
                console.log(1);
            } else if (array[index + 1].charAt(0) != '-') {
                res[value.substring(1)] = array[index + 1];
                console.log(2);
            } else {
                res[value.substring(1)] = true;
                console.log(3);
            }
        }
    });
    return res;
};

export { getArgs }