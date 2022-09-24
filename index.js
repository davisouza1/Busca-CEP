function buscarCEP(){
    let input = document.getElementById("cep").value

    const ajax = new XMLHttpRequest()
    ajax.open('GET', `https://viacep.com.br/ws/${input}/json/`)
    ajax.send()

    ajax.onload = function () {
        let obj = JSON.parse(this.responseText)
        let logradouro = obj.logradouro
        let bairro = obj.bairro
        let cidade = obj.localidade
        let estado = obj.uf
        let ddd = obj.ddd
    
        document.getElementById("resultado").innerHTML =
        `Rua: ${logradouro}.<br>
         Bairro: ${bairro}.<br>
         Cidade: ${cidade}.<br>
         Estado: ${estado}.<br>
         DDD: ${ddd}.`
    
    }

}