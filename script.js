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
}
let bookTable = document.querySelector("#bookTable");
let newBookBtn = document.querySelector("#newBookBtn");
let newBookForm = document.querySelector("#newBookForm");
newBookBtn.addEventListener('click', () => {
	newBookForm.style.display = 'block';
});

addBookToLibrary("Lord of the Rings", "JRR Tolkien", 156, true);
/*bookTable = data.map(myLibrary => {
	return (
		<tr>
			<td>${myLibrary.title}</td>
			<td>${myLibrary.author}</td>
			<td>${myLibrary.pages}</td>
			<td>${myLibrary.read}</td>
		</tr>
	)
});*/


