let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let btn = document.querySelector('.btn')
let out = document.querySelector('#iOut')

btn.addEventListener('click', () => {
    let input = document.querySelector('#inputCifra').value
    let cifra = Number(document.querySelector('#iChave').value)
    let metodo = document.querySelector('input[type="radio"]:checked').value
    let resultado = ''

    for (let i = 0; i < input.length; i++) {
        const char = input[i]
        let novoChar = char


        // verifica se o caractere é uma letra maiúscula
        if (char.match(/[A-Z]/)) {
            let indice = alfabeto.indexOf(char)

            if (metodo == 'cripto') {
                // garante que o índice permaneça no intervalo de 0 a 25
                indice = (indice + cifra) % 26
            } else {
                indice = (indice - cifra) % 26
                if (indice < 0) {
                    indice += 26
                }
            }

            novoChar = alfabeto.charAt(indice)

            // verifica se o caractere é uma letra minúscula e a converte 
        } else if (char.match(/[a-z]/)) {
            let indice = alfabeto.indexOf(char.toUpperCase())

            if (metodo == 'cripto') {
                indice = (indice + cifra) % 26
            } else {
                indice = (indice - cifra) % 26
                if (indice < 0) {
                    indice += 26
                }
            }

            novoChar = alfabeto.charAt(indice).toLocaleLowerCase()
        }

        resultado += novoChar

    }

    console.log(resultado);
    out.value = resultado
})