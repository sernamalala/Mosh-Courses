// function Book(name,publicationYear,bookID){

//     this.name = name;
//     this.publicationYear = publicationYear;
//     this.bookID = bookID;

//     console.log(this.name+" was created in "+this.publicationYear);
// }

// const cinderella = new Book('Cinderella and her thieves',1925,12454);
// console.log(cinderella.name);
// console.log(cinderella.publicationYear);

function Book(title,author,pages,haveRead){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    let message = "";
    if(this.haveRead == true){
        message = "has been read";
    }
    else{
        message = "not read yet";
    }
    this.info = function (){

        return this.title+" by "+this.author+", "+this.pages+" pages, "+message;

    }
}

const Hobbit = new Book("The Hobbit","J.R.R. Tolkien",295,false);
console.log(Hobbit.info());

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  player1.sayName(); // logs 'steve'
  player2.sayName(); // logs 'also steve'