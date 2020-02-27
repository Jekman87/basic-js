module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error;
    if (arr.length === 0) return arr;
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!/^--/.test(arr[i])) {
            resultArr.push(arr[i]);
        } else {
            switch (arr[i]) {
                case '--discard-next':
                    i++;

                    break;
                case '--discard-prev':
                    if (resultArr.length) resultArr.pop();

                    break;
                case '--double-next':
                    if (arr.length > i + 1) resultArr.push(arr[i + 1]);

                    break;
                case '--double-prev':
                    if (i - 1 >= 0) resultArr.push(arr[i - 1]);

                    break;
                default:
                    break;
            }
        }
    }

    return resultArr;
};
