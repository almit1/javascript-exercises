const getTheTitles = function (books) {
    let arrTitles = [];
    for (let book of books) {
        arrTitles.push(book.title);
    }
    return arrTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
