function printMyBook(myBook) {
    console.log(myBook.title);
}
var myBook = { title: "Harry", author: "JK", numpages: 300 };
printMyBook(myBook);
var MyBook = (function () {
    function MyBook() {
    }
    return MyBook;
}());
