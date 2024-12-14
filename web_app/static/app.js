document.addEventListener('DOMContentLoaded', () => {
    const sudokuForm = document.getElementById('sudoku-form');
    const sudokuGrid = document.getElementById('sudoku-grid');

    sudokuForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(sudokuForm);
        fetch('/solve', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(html => {
            document.body.innerHTML = html;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    sudokuGrid.addEventListener('input', (event) => {
        const input = event.target;
        if (input.value < 1 || input.value > 9) {
            input.value = '';
        }
    });
});
