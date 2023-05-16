//STRINGS
const nome = prompt ('Digite seu nome completo:')
window.document.body.innerHTML = `O seu nome é: <strong> ${nome} </strong> <br>`
window.document.body.innerHTML += `O seu nome tem <strong> ${nome.length} </strong> letras <br>`
window.document.body.innerHTML += `A segunda letra do seu nome é: <strong> ${nome.charAt(2)} </strong> <br>`
window.document.body.innerHTML += `O primeiro índice da letra 'a', à partir do seu sobrenome, é: <strong> ${nome.indexOf('a', 3)} </strong> <br>`
window.document.body.innerHTML += `Seu sobrenome começa no indice: <strong> ${nome.indexOf('Tavares')} </strong> <br>`
window.document.body.innerHTML += `O último índice da letra 'a' do seu nome é: <strong> ${nome.lastIndexOf('a')} </strong> <br>`
window.document.body.innerHTML += `As 3 últimas letras do seu nome são: <strong> ${nome.slice(-3)} </strong> <br>`
window.document.body.innerHTML += `A penúltima palavra do seu nome é: <strong> ${nome.slice(-8, -6)} </strong> <br>`
window.document.body.innerHTML += `As palavras do seu nome são: <strong> ${nome.split(' ')} </strong> <br>`
window.document.body.innerHTML += `Seu nome com letras maiúsculas: <strong> ${nome.toUpperCase()} </strong> <br>`
window.document.body.innerHTML += `Seu nome com letras minúsculas: <strong> ${nome.toLowerCase()} </strong> <br>`
window.document.body.innerHTML += `Substitua seu sobrenome pela palavra 'Desenvolvedor': <strong> ${nome.replace('Tavares', 'Desenvolvedor')} </strong> <br>`
window.document.body.innerHTML += `Substitua todas as letras 'a' por 'A': <strong> ${nome.replace(/a/g, 'A')} </strong> <br>`