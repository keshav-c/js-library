/* This section adds the popup form */

// get modal
const addFormBox = document.getElementById('form-box');
// get modal button
const addBookBtn = document.getElementById('add-button');
// get modal close button
const closeBtn = document.getElementsByClassName('close')[0];
// make open modal button work
addBookBtn.onclick = () => { addFormBox.style.display = 'block'; };
// make modal close button work
closeBtn.onclick = () => { addFormBox.style.display = 'none'; };

const myLibrary = [];

function Book(author, title, pages, read = false) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const addForm = document.forms['add-form'];
addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = addForm.querySelector('#book-title').value;
  const author = addForm.querySelector('#book-author').value;
  const pages = addForm.querySelector('#book-pages').value;
  const read = Boolean(Number(addForm.querySelector("input[name='read']:checked").value));
  const book = new Book(author, title, pages, read);
  myLibrary.push(book);
  addForm.querySelector('#book-title').value = '';
  addForm.querySelector('#book-author').value = '';
  addForm.querySelector('#book-pages').value = '';
  addForm.querySelector('#book-read').checked = false;
  addForm.querySelector('#book-unread').checked = true;
  closeBtn.click();
});

function render() {

}
