
const JSpromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is Working")
    }, 2000);
});

JSpromise.then((value) => {console.log(value)});
