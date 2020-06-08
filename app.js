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
    const author = document.createElement('span');
    author.textContent = `by ${book.author}`;
    author.classList.add('book-author');
    const pages = document.createElement('span');
    pages.textContent = `${book.pages} Pages`;
    pages.classList.add('book-pages');
    const details = document.createElement('div');
    details.classList.add('book-details');
    details.appendChild(title);
    details.appendChild(author);
    details.appendChild(pages);
    li.appendChild(details);
    const read = document.createElement('i');
    if (book.read) {
      read.classList.add('fi-cnsuxl-check');
    } else {
      read.classList.add('fi-cnluxl-check');
    }
    read.classList.add('book-read');
    const del = document.createElement('i');
    del.classList.add('fi-xnluxl-trash-bin');
    del.classList.add('book-delete');
    const edit = document.createElement('div');
    edit.classList.add('book-edit');
    edit.appendChild(read);
    edit.appendChild(del);
    li.appendChild(edit);
    const idx = document.createElement('span');
    idx.textContent = index;
    idx.style.display = 'none';
    idx.classList.add('book-index');
    li.appendChild(idx);
    bookList.appendChild(li);
  });
}

// eslint-disable-next-line no-unused-vars
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

bookList.addEventListener('click', event => {
  const icon = event.target.closest('i');
  if (icon !== null) {
    const li = icon.closest('li');
    const i = Number(li.querySelector('.book-index').textContent);
    if (icon.classList.contains('book-delete')) {
      console.log(`delete book ${i}`);
    } else if (icon.classList.contains('book-read')) {
      if (myLibrary[i].read) {
        console.log(`mark book ${i} as read`);
      } else {
        console.log(`mark book ${i} as unread`);
      }
    }
  }
});

render();
