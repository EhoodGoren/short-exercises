class BookList {
    constructor(){
        this.readBooks = 0;
        this.notReadBooks = 0;
        this.nextBook;
        this.currentBook;
        this.lastReadBook;
        this.bookArray = [];
    }
    add(book){
        if(!this.currentBook){
            this.currentBook = book;
        }
        this.bookArray.push(book);
        this.notReadBooks++;
        return this;
    }
    finishCurrentBook(){
        this.readBooks++;
        this.notReadBooks--;
        this.currentBook.isRead = true;
        this.currentBook.readDate = Date();
        this.lastReadBook = this.currentBook;

        const bookIndex = this.bookArray.indexOf(this.currentBook);
        this.currentBook = this.bookArray[bookIndex + 1];

        let bookCounter = 0;
        this.nextBook = this.bookArray[bookCounter];
        while(this.nextBook.isRead === true || this.nextBook === this.currentBook){
            this.nextBook = this.bookArray[bookCounter];
            if(!this.nextBook){
                this.nextBook = 'You read all books!';
                break;
            }
            bookCounter++;
        }
        return this;
    }
    display(){
        return this.bookArray;
    }
}
class Book{
    constructor(_title, _genre, _author){
        this.title = _title;
        this.genre = _genre;
        this.author = _genre;
        this.isRead = false;
        this.readDate;
    }
}

const harryPotter = new Book('harry potter', 'fantasy', 'JK');
const percyJackson = new Book('Percy Jackson', 'fantasy', 'Rick');
const spiderman = new Book('Spiderman', 'comics', 'Marvel');
const myReadingList = new BookList();

myReadingList.add(harryPotter).add(percyJackson).add(spiderman);
myReadingList.finishCurrentBook();
