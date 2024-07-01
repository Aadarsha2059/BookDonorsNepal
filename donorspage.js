function donateBook() {
    const bookImageInput = document.getElementById('bookImage');
    const bookGenre = document.getElementById('bookGenre').value;
    const bookName = document.getElementById('bookName').value;

    if (bookImageInput.files.length === 0 || !bookGenre || !bookName) {
        alert("Please fill all the fields");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const bookImage = e.target.result;

        const table = document.getElementById('donatedBooksTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.innerHTML = `<img src="${bookImage}" alt="Book Image" width="100">`;
        cell2.textContent = bookGenre;
        cell3.textContent = bookName;

        // Clear the form
        document.getElementById('donateForm').reset();
    };
    
    reader.readAsDataURL(bookImageInput.files[0]);
}
