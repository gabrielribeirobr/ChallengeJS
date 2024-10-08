function countDiamonds() {
    let diamonds = 0;
    let open = 0;
    const sequence = document.getElementById('code').value;
    const res = document.getElementById('code');

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] == '<') {
            open++;
        } else if (sequence[i] == '>' && open > 0) {
            open--;
            diamonds++;
        }
    }
    res.innerHTML = `Número de diamantes: ${diamonds}`
}