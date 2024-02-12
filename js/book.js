
/*
    Constructor function required as exercise by
    https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors
*/
function Book (title, author, noPages, isRead) {
    this.title = title;
    this.author = author || "unknown author";
    this.noPages = noPages || 0;
    this.isRead = isRead;
}

Book.prototype.info = function() {
    let status = (this.isRead == true) ? "already read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.noPages} pages, ${status}`;
}

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
}

const arrLib = [];

function bookAdd (title, author, noPages, isRead) {
    let newbook = new Book(title, author, noPages, isRead);
    let index = arrLib.push(newbook) - 1;
    return index;
}

function bookRemoveByIndex (idx) {
    arrLib.splice(idx, 1);
}

function bookGetByIndex (idx) {
    return arrLib[idx];
}