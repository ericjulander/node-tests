console.log([].concat(process.argv).slice(2).map(a => parseInt(a)).reduce((a, b) => a + b));