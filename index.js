// draw a 15 x 15 grid
// if there's exactly three neighbors that are alive -> ALIVE
// if there's four or more -> DEAD
//            one or less -> DEADo

container = document.querySelector('#container');
for (let i = 0; i < 15; i++) {

    let row = document.createElement('tr');
    container.appendChild(row);

    for (let j = 0; j < 15; j++) {

        let cell = document.createElement('td');
        cell.classList.add('dead');
        cell.style.height = '50px';
        cell.style.width = '50px';
        cell.style.border = '1px solid #999';
        row.appendChild(cell);

    }


}