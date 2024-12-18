const myLibrary = [];

function Book(title, author, pages, read) {
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


function addBookToLibrary(title, author, pages, read) {
	book = new Book(title, author, pages, read);
	myLibrary.push(book);
	let row = bookTable.insertRow(-1);
	row.dataset.key = myLibrary.length - 1;
	let c0 = row.insertCell(0);
	let c1 = row.insertCell(1);
	let c2 = row.insertCell(2);
	let c3 = row.insertCell(3);
	let c4 = row.insertCell(4);
	const removeMe = document.createElement("button");
	c0.appendChild(removeMe);
	removeMe.innerText = "rm";
	removeMe.addEventListener('click', (function(bookCopy){
		return function() {
		removeBookFromLibrary(bookCopy, row);}
	})(book));
	c1.innerText = myLibrary[myLibrary.length - 1].title;
	c2.innerText = myLibrary[myLibrary.length - 1].author;
	c3.innerText = myLibrary[myLibrary.length - 1].pages;
	c4.innerText = myLibrary[myLibrary.length - 1].read;
}
let bookTable = document.querySelector("#bookTable");
let newBookBtn = document.querySelector("#newBookBtn");
let newBookForm = document.querySelector("#newBookForm");
let submitBookBtn = document.querySelector("#submitBook");
let newTitle = document.querySelector("#newTitle");
let newAuthor = document.querySelector("#newAuthor");
let newPages = document.querySelector("#newPages");
let newReadTrue = document.querySelector("#readTrue");
let newReadFalse = document.querySelector("#readFalse");
newBookBtn.addEventListener('click', () => {
	newBookForm.style.display = 'block';
});
function removeBookFromLibrary(book, row)
{
	let index = myLibrary.indexOf(book);
	myLibrary.splice(index, 1);
	console.log(book.title);	
}
let newRead;
submitBookBtn.addEventListener('click', () => {
	if (newReadTrue.checked)
		newRead = true;
	else
		newRead = false;
	addBookToLibrary(newTitle.value, newAuthor.value, newPages.value, newRead);
	event.preventDefault();
	newTitle.value = "";
	newAuthor.value = "";
	newPages.value = "";
	newBookForm.style.display = "none";
});


addBookToLibrary("Lord of the Rings", "JRR Tolkien", 1216, true);
addBookToLibrary("Mistborn", "Brandon Sanderson", 541, true);
addBookToLibrary("Ender's Game", "Orson Scott Card", 256, true);

