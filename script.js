function Tabuada() {

	// Captura os valores inseridos e converte em string
	var num = document.getElementById('num')
	var end = document.getElementById('end')

	if (num.value.length == 0 || end.value.length == 0) {

		alert('Preencha todos os campos!')

	} else {

		// Transforma em número os valores capturados como string
		var n = Number(num.value) 
		var e = Number(end.value)

		// Inicializa a variável de controle, referente ao endpoint
		var x = 0

		// Define o valor inicial da resposta como vazio
		var r = ''

		// Seleciona o elemento do parágrafo da resposta e armazena na variável res
		var res = document.querySelector('#resposta p')

		res.innerHTML = `A tabuada do ${n} é:<br>`
		do {
			r = n * x
			res.innerHTML += `${n} x ${x} = ${r}<br>`
			x++
		} while (x <= e)
	}

}