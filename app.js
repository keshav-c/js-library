const myLibrary = [];

function Book(author, title, pages, read = false) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {

}

function render() {

}

/* This section adds the popup form */

// get modal
let addFormBox = document.getElementById('form-box');
// get modal button
let addBookBtn = document.getElementById('add-button');
// get modal close button
let closeBtn = document.getElementsByClassName('close')[0];
// make open modal button work
addBookBtn.onclick = () => { addFormBox.style.display = 'block'; };
// make modal close button work
closeBtn.onclick = () => { addFormBox.style.display = 'none'; };