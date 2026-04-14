const converterButton = document.querySelector('.convertbutton')
const selecaoMoeda = document.querySelector('.selecao-moeda')

  


function convertCurrency() { 
    const Valorinput = document.querySelector('.currency-input').value
    const valoraserconvertido = document.querySelector(".valor-a-ser-convertido")    //valor a ser convertido
    const valorconvertido = document.querySelector('.valor-convertido')              //valor convertido

    

    const dollarToReal = 5.2
    const EuroToReal = 6.2
    const YuanToReal = 2.0
    const valorconversao = Valorinput / dollarToReal

    if (selecaoMoeda.value === 'dolar') {
            valorconvertido.innerHTML = new Intl.NumberFormat('en-US', 
            { style: 'currency', currency: 'USD' }).format(Valorinput / dollarToReal)
         }

    if (selecaoMoeda.value === 'euro') {
            valorconvertido.innerHTML = new Intl.NumberFormat('de-DE', 
            { style: 'currency', currency: 'EUR' }).format(Valorinput / EuroToReal)
        }

    if (selecaoMoeda.value === 'yuan') {
            valorconvertido.innerHTML = new Intl.NumberFormat('zh-CN', 
            { style: 'currency', currency: 'CNY' }).format(Valorinput / YuanToReal)
        }    

    valoraserconvertido.innerHTML = new Intl.NumberFormat('pt-BR', 
        { style: 'currency', currency: 'BRL' }).format(Valorinput)
}

function moedaSelecionada() {
    const currencyName = document.querySelector('.nome-moeda')
    const currencyimg = document.querySelector('.currency-img')

    if (selecaoMoeda.value === 'dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyimg.src = './img/Dolar.jpg'
    }
    if (selecaoMoeda.value === 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyimg.src = './img/Euro.jpg'
    }
    if (selecaoMoeda.value === 'yuan') {
        currencyName.innerHTML = 'Yuan'
        currencyimg.src = './img/Yuan.jpg'
    }

    convertCurrency()
  
  }
  selecaoMoeda.addEventListener('change', moedaSelecionada)
  converterButton.addEventListener('click', convertCurrency)




    
    




    
 

   