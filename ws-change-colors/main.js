function mudarCor(cor) {
    let middle = document.querySelector('.middle');
    switch (cor) {
        case 'blue':
            middle.style.backgroundColor = "#007bff";
            break;
        case 'green':
            middle.style.backgroundColor = "#1f8c1f";
            break;
        case 'red':
            middle.style.backgroundColor = "#ed0c0c";
            break;
        case 'yellow':
            middle.style.backgroundColor = "#f2f208";
            break;
    }
}