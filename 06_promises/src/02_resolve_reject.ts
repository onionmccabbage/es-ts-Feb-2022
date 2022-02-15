const go = (isWorking: boolean ): Promise<string | boolean | Error > => {
    // return new Promise((resolve, reject) => {
    return new Promise((reject, resolve) => { // see the problem - need to return string or boolean
        setTimeout(() => {
            if (isWorking) {
                resolve('a string');
            } else {
                reject( new Error('It Broke'));
            }
        }, 200);
    });
}

// go(true)
//     .then((val) => console.log(val))
//     .catch((err) => console.log(err));

go(false)
    .then((val) => console.log(val))
    .catch((err) => console.log(err));