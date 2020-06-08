const addFormBox = document.getElementById('form-box');
const addBookBtn = document.getElementById('add-button');
const closeBtn = document.getElementsByClassName('close')[0];
const addForm = document.forms['add-form'];
const bookList = document.querySelector('#list ul');
const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

addBookBtn.onclick = () => { addFormBox.style.display = 'block'; };
closeBtn.onclick = () => { addFormBox.style.display = 'none'; };

function Book(author, title, pages, read = false) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function render() {
  myLibrary.forEach((book, index) => {
    const li = document.createElement('li');
    const title = document.createElement('span');
    title.textContent = book.title;
    title.classList.add('book-title');
    li.appendChild(title);
    const author = document.createElement('span');
    author.textContent = `by ${book.author}`;
    author.classList.add('book-author');
    li.appendChild(author);
    const pages = document.createElement('span');
    pages.textContent = `${book.pages} Pages`;
    li.appendChild(pages);
    const read = document.createElement('span');
    read.textContent = book.read ? 'Read' : 'Unread';
    li.appendChild(read);
    const idx = document.createElement('span');
    idx.textContent = index;
    idx.style.display = 'none';
    idx.classList.add('book-index');
    li.appendChild(idx);
    bookList.appendChild(li);
  });
}

addForm.addEventListener('submit', (event) => {
  const title = addForm.querySelector('#title-input').value;
  const author = addForm.querySelector('#author-input').value;
  const pages = addForm.querySelector('#pages-input').value;
  const read = Boolean(Number(addForm.querySelector("input[name='read']:checked").value));
  const book = new Book(author, title, pages, read);
  myLibrary.push(book);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  render();
});

render();
