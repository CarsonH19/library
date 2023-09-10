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

function displayBooks() {
    const container = document.getElementById('book-container');
  
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
  
  // Call the displayBooks function to display the books
  displayBooks();