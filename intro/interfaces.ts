interface Book {
    title: string;
    author: string;
    numpages: number;
}

function printMyBook(myBook: Book) {
    console.log(myBook.title);
}

let myBook : Book= {title: "Harry", author: "JK" , numpages:300};
printMyBook(myBook);

class MyBook implements Book {
   
}