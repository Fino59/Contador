function contar() {
    var inumb = window.document.querySelector('input#inumber')
    var fn = window.document.querySelector('input#fnumber')
    var p = window.document.querySelector('input#pnumber')
    var res = window.document.querySelector('div#res')

    if (inumb.value.length == 0) {
        window.alert('Você esqueceu de digitar o número inicial!')
        res.innerHTML = 'Não foi possivel iniciar.'
    } else if (fn.value.length == 0) {
        window.alert('Você esqueceu de digitar o número final!')
        res.innerHTML = 'Não foi possivel iniciar.'
    } else if (p.value.length == 0) {
        window.alert('Você esqueceu de digitar o passo!')
        res.innerHTML = 'Não foi possivel iniciar.'
    } else {
        res.innerHTML = 'Contando: '
        var init = Number(inumb.value)
        var fnt = Number(fn.value)
        var pas = Number(p.value)
        if (pas <= 0) {
            alert('O passo não pode ser 0. Utilizando passo 1')
            pas = 1
        }
        if (init < fnt) {
            for (var cont = init; cont <= fnt; cont += pas) {
                res.innerHTML += ` ${cont}  \u{27A1}`
            }
        } else {
            for (cont = init; cont >= fnt; cont -= pas) {
                res.innerHTML += ` ${cont}  \u{27A1}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}