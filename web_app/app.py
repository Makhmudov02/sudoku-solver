from flask import Flask, request, render_template
from sudoku_solver import read_input, solve_sudoku, print_board

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/solve', methods=['POST'])
def solve():
    input_list = request.form.getlist('sudoku[]', type=int)
    board = read_input(input_list)
    if solve_sudoku(board):
        return render_template('index.html', board=board)
    else:
        return render_template('index.html', error="No solution exists")

if __name__ == '__main__':
    app.run(debug=True)
