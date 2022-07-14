const verticalMove = () => {
    const rowsInSquare = 3;
    const randomRow = Math.floor(Math.random() * rowsInSquare);

    const movedItems = document.querySelectorAll(`article ol[data-x-square='3']`);
    console.log(movedItems)
    setTimeout(() => {
        movedItems.forEach((item) => {
            item.classList.add('flip')
        })
    }, 2000);
}

verticalMove()

setTimeout(() => {
    console.log()
}, 2000);