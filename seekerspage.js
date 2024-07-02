window.onload = function() {
    const books = JSON.parse(localStorage.getItem('donatedBooks')) || [];
    const table = document.getElementById('availableBooksTable').getElementsByTagName('tbody')[0];

    books.forEach(book => {
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.innerHTML = `<img src="${book.bookImage}" alt="Book Image" width="100">`;
        cell2.innerHTML = book.bookGenre;
        cell3.innerHTML = book.bookName;
    });
};
