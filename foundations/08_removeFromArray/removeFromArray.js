const removeFromArray = function () {

    let args = Array.from(arguments);
    let array = args[0];
    let valuesToRemove = args.slice(1);

    for (let i = 0; i < valuesToRemove.length; i++) {
        let value = valuesToRemove[i];

        for (let j = 0; j < array.length; j++) {
            if (array[j] === value) {
                array.splice(j, 1);
                j--;
            }
        }


    }
    return array;


};

// Do not edit below this line
module.exports = removeFromArray;
