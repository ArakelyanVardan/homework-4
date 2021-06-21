// Number 1

function deepCoppy(obj) {
    let clone = {};
    for (let key in obj) {
        if (typeof(obj[key]) !== 'object') {
            clone[key] = obj[key];
        } else {
            clone[key] = deepCoppy(obj[key]);
        };
    };
    return clone;
};

// Number 2 

function range(x, y) {
    if (x === y) {
        return x;
    }
    console.log(x);
    return range(x + 1, y);
}

// Number 4

function f(arr, n = 0, j = n + 1, i = j + 1) {
    if (i === arr.length) {
        j++;
        i = j + 1;
        if (j === arr.length) {
            n++;
            j = n + 1;
            i = j + 1;
            if (n === arr.length - 2) {
                return;
            }
            return f(arr, n, j, i);
        }
        return f(arr, n, j, i);
    }
    let resalt = [];
    resalt.push(arr[n], arr[j], arr[i]);
    console.log(resalt);
    return f(arr, n, j, i + 1);
}