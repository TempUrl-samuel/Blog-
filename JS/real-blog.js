function chance() {
    const resultado = Math.floor(Math.random() * 10) + 1;
    if (resultado == 10) {
        document.location.replace("forgotten.html")
    }
}


//  window.alert('This site is WIP, so expect for strange things and unfinished sites around here, OK?')
