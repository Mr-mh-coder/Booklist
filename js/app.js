let $ = document
const addBookBtn = $.querySelector('.add-btn')
const titleInputElem = $.querySelector('#title')
const authorInputElem = $.querySelector('#author')
const yearInputElem = $.querySelector('#year')
const booksContainer = $.querySelector('#book-list')

let books = [];
addBookBtn.addEventListener('click', function(event){
    event.preventDefault();
    let titleValue = titleInputElem.value;
    let authorValue = authorInputElem.value;
    let yearValue = yearInputElem.value;
    if(titleValue === '' || authorValue === '' || yearValue === ''){
        alert('Please Enter correctly!!');
    }else{
        let booksInfo = {
            id : books.length + 1,
            title : titleValue,
            author : authorValue,
            year : yearValue
        }
        books.push(booksInfo);
        AddBook(books);
        setLocalStorage(books); 
        titleInputElem.value = ''; 
        authorInputElem.value = ''; 
        yearInputElem.value = '';  
    }
})

function AddBook(New){
    booksContainer.innerHTML = '';
    New.forEach(function(event){
        let newRow = $.createElement('tr');
        let newTitleTh = $.createElement('th'); 
        let newAuthorTh = $.createElement('th'); 
        let newYearTh = $.createElement('th'); 
        newTitleTh.append(event.title);
        newAuthorTh.append(event.author);
        newYearTh.append(event.year);
        newRow.append(newTitleTh, newAuthorTh, newYearTh);
        booksContainer.append(newRow);
    });
}

function setLocalStorage(books){
    localStorage.setItem('books', JSON.stringify(books));
}

function LoadLocalStorage(){
    let Bookslocal = localStorage.getItem('books');
    if(Bookslocal){
        books = JSON.parse(Bookslocal);
        AddBook(books);
    }
}


window.addEventListener('load', LoadLocalStorage());