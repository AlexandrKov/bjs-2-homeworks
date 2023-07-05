class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        if (this.state < 100) {
            this.state = this.state * 1.5;
        }
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        } else if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
        super(name, releaseDate, pagesCount, state);
        this.type = type;
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = "book") {
        super(releaseDate, pagesCount, state);
        this.author = name;
        this.type = type;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state = 100, type = "novel") {
        super(name, releaseDate, pagesCount, state);
        this.type = type;
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state = 100, type = "fantastic") {
        super(name, releaseDate, pagesCount, state);
        this.type = type;
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state = 100, type = "detective") {
        super(name, releaseDate, pagesCount, state);
        this.type = type;
    }
}


class Library {
    constructor(name = String, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
  }

    giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName);
        if (book) {
            this.books.splice(this.books.indexOf(book), 1)
        }
        return book;
    }
}