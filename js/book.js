
/*
    Constructor function required as exercise by
    https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors
*/

var bookCount = 0;
const arrLib = [];
function Book (title, author, noPages, isRead) {
    this.title = title;
    this.author = author || "unknown author";
    this.noPages = noPages || 0;
    this.isRead = isRead;
    this.id = bookCount++;
}

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
}

function bookAdd (title, author, noPages, isRead) {
    let newbook = new Book(title, author, noPages, isRead);
    arrLib.push(newbook);
    return newbook.id;
    /*
    let index = arrLib.push(newbook) - 1;
    return index;
    */
}

function bookRemoveByIndex (idx) {
    arrLib.splice(idx, 1);
}

function bookGetByIndex (idx) {
    return arrLib[idx];
}

function bookGetById (id) {
    let foundAt = arrLib.findIndex(
        (testeditem)=> testeditem.id === id
    );
    return bookGetByIndex(foundAt);
}

function bookRemoveById(id) {
    let foundAt = arrLib.findIndex(
        (testeditem, arrindex, arrLib)=> testeditem.id === id
    );
    bookRemoveByIndex(foundAt);
}