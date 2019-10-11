document.addEventListener('DOMContentLoaded', function(){

document.querySelector('#btn').addEventListener('click', function(){

    document.querySelector("#result").innerHTML = Aleatorio()
 
})
    function Aleatorio(){


        number = Math.floor(Math.random() * 10 + 1)

        if(number == 1)
        {
            return("Cite as modalidades de Ponteiro mencionadas bem como as suas funções")
        }
        if(number == 2)
        {
            return("O que um variável ponteiro armazena?")
        }
        if(number == 3)
        {
            return("Quais operações são permitidas em listas?")
        }
        if(number == 4)
        {
            return("Em que modelo computacional encontramos listas?")
        }
        if(number == 5)
        {
            return("Cite a diferença entre os modelos estático e dinâmico")
        }
        if(number == 6)
        {
            return("Converta uma lista duplamente encadeada para circular?")
        }
        if(number == 7)
        {
            return("Descreve as funções dos ponteiros abaixo: corrente = auxiliar -> next; corrente = início; auxiliar = auxiliar -> next")
            
        }
        if(number == 8)
        {
            return("Em que operação utilizamos o sincronismo em lista?")
        }
        if(number == 9)
        {
            return("Como ocorre alocação de endereço ao ponteiro, bem como o acesso aos dados.")
        }
        if(number == 10)
        {
            return("Quando a variável dinâmica, passa a ser ponteiro")
        }
    }

 
})