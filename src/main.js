let turn = "O"
const lines_names = ["top","middle_row", "bottom", "left", "middle_column", "right"]

const tiles = {
    1: document.querySelector(".top.left"),
    2: document.querySelector(".top.middle_column"),
    3: document.querySelector(".top.right"),
    4: document.querySelector(".middle_row.left"),
    5: document.querySelector(".middle_row.middle_column"),
    6: document.querySelector(".middle_row.right"),
    7: document.querySelector(".bottom.left"),
    8: document.querySelector(".bottom.middle_column"),
    9: document.querySelector(".bottom.right"),
}

function switch_turn() {
    if (turn == "X") {
        turn = "O"
    } else {
        turn = "X"
    }
}

function check_win() {
    lines_names.forEach(line_name => {
        let line = ""
        for (let tile of document.getElementsByClassName(line_name)) {
            line += tile.innerHTML
        }
        if (line.length == 3 && (!line.includes("X") || !line.includes("O"))) {
            console.log("win")
        }
    })
    if (tiles[5].innerHTML != "" && tiles[1].innerHTML == tiles[5].innerHTML && tiles[5].innerHTML == tiles[9].innerHTML) {
        console.log("win")
    }
    if (tiles[5].innerHTML != "" && tiles[3].innerHTML == tiles[5].innerHTML && tiles[5].innerHTML == tiles[7].innerHTML) {
        console.log("win")
    }
}

function clicked(element) {
    
    function clicked_closure() {
        if (element.innerHTML == "") {
            element.innerHTML = turn
            switch_turn()
            check_win()
        }
    }
    return clicked_closure
}

let td = document.getElementsByTagName("td");
console.log(td);
for (let element of td) {
    //console.log(element);
    element.addEventListener("click", clicked(element));
}
