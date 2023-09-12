
// Library array, object constructor, and function to add new books.
const myLibrary = [
  {
    title: 'The Shadow of Bloodmoon',
    author: 'Elena Nightshade',
    pages: 320,
    read: 'No'
  },
  {
    title: 'Cursed Relics: Veil of Shadows',
    author: 'Malachi Darkweaver',
    pages: 400,
    read: ''
  },
  {
    title: 'Whispers of the Forgotten',
    author: 'Lilith Shadowbane',
    pages: 280,
    read: 'Yes'
  }
];

function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages 
  this.read = read 
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// How to display the books onto the page
function displayBooks() {
  const container = document.getElementById('book-container');
  container.innerHTML = '';

  myLibrary.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const title = document.createElement('h2');
    title.textContent = `Title: ${book.title}`;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    const read = document.createElement('p');
    read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(pages);
    bookDiv.appendChild(read);

    container.appendChild(bookDiv);
  });
}
  
displayBooks();


// Modal Functions (Opening & Closing)
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const overlay = document.querySelector('.overlay');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
});

closeModalBtn.addEventListener('click', function(event) {
  event.stopPropagation();
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
});

//Preventing Default Behavior
const form = document.querySelector('form'); 
form.addEventListener('submit', function(event) {
  //Prevents form submission
  event.preventDefault(); 

  //Access form elements and get values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  //Create a new book object
  const newBook = new Book(title, author, pages, read);

  //Add the new book to the library
  myLibrary.push(newBook);

  // Clear the form fields after submission
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;

  //Update the display
  displayBooks();
  });