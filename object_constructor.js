function Book(title, author, pages, read)
{
	this.title = title;
	this.author = author;
	this.pages = pages;
	if (read)
		this.read = "already read";
	else
		this.read = "not read yet";
	this.info = title + " by " + author + ", " + pages + " pages, " + this.read + "\n";
	return this.info;
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(theHobbit.info);

let head = {
	glasses: 1
  };
  
  let table = {
	pen: 3,
	__proto__: head
  };
  
  let bed = {
	sheet: 1,
	pillow: 2,
	__proto__: table
  };
  
  let pockets = {
	money: 2000,
	__proto__: bed
  };
  console.log("Hello " + pockets.glasses);