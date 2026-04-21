
const botaoConverter = document.querySelector('.botaoconverter');
const selecaoPrimeiraMoeda = document.querySelector('.selecao-primeira-moeda');
const selecaoSegundaMoeda = document.querySelector('.selecao-segunda-moeda');

function converterMoeda(){
    const valorInput = document.querySelector('.valor-input').value;
    const valorASerConvertido = document.querySelector('.valor-a-ser-convertido');
    const valorConvertido = document.querySelector('.valor-convertido');
    
    
    const valordolar = 4.98;
    const valorEuro = 5.87;
    const valoryuan = 0.73;
    const valorReal = 1;

    valorASerConvertido.innerHTML = valorInput;
    
    

    

    if (selecaoPrimeiraMoeda.value === 'euro' && selecaoSegundaMoeda.value === 'dolar') { 
        valorConvertido.textContent = new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD' }).
        format(valorInput * valorEuro/ valordolar);

    }

    if (selecaoPrimeiraMoeda.value === 'euro' && selecaoSegundaMoeda.value === 'yuan') { 
        valorConvertido.textContent = new Intl.NumberFormat('zh-CN', { 
        style: 'currency', 
        currency: 'CNY' }).
        format(valorInput * valorEuro/ valoryuan);

    }

    if (selecaoPrimeiraMoeda.value === 'euro' && selecaoSegundaMoeda.value === 'real') { 
        valorConvertido.textContent = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' }).
        format(valorInput *  valorEuro/ valorReal);   
    }

    if (selecaoPrimeiraMoeda.value === 'dolar' && selecaoSegundaMoeda.value === 'euro') {
        valorConvertido.textContent = new Intl.NumberFormat('de-DE', { 
        style: 'currency', 
        currency: 'EUR' }).
        format(valorInput * valordolar/ valorEuro);
    }
    if (selecaoPrimeiraMoeda.value === 'dolar' && selecaoSegundaMoeda.value === 'yuan') {
        valorConvertido.textContent = new Intl.NumberFormat('zh-CN', { 
        style: 'currency', 
        currency: 'CNY' }).
        format(valorInput * valordolar/ valoryuan);
    }
    if (selecaoPrimeiraMoeda.value === 'dolar' && selecaoSegundaMoeda.value === 'real') { 
        valorConvertido.textContent = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' }).
        format(valorInput *  valordolar/ valorReal); }

    if (selecaoPrimeiraMoeda.value === 'yuan' && selecaoSegundaMoeda.value === 'dolar') { 
        valorConvertido.textContent = new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD' }).
        format(valorInput * valoryuan/ valordolar);
    }
    if (selecaoPrimeiraMoeda.value === 'yuan' && selecaoSegundaMoeda.value === 'euro') {
        valorConvertido.textContent = new Intl.NumberFormat('de-DE', { 
        style: 'currency', 
        currency: 'EUR' }).
        format(valorInput * valoryuan/ valorEuro);
    }
    if (selecaoPrimeiraMoeda.value === 'yuan' && selecaoSegundaMoeda.value === 'real') { 
        valorConvertido.textContent = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' }).
        format(valorInput * valoryuan/ valorReal); }

    if (selecaoPrimeiraMoeda.value === 'real' && selecaoSegundaMoeda.value === 'euro') { 
        valorConvertido.textContent = new Intl.NumberFormat('de-DE', { 
        style: 'currency', 
        currency: 'EUR' }).
        format(valorInput * valorReal/ valorEuro); }    

    if (selecaoPrimeiraMoeda.value === 'real' && selecaoSegundaMoeda.value === 'dolar') { 
        valorConvertido.textContent = new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD' }).
        format(valorInput *  valorReal/ valordolar); } 

    if (selecaoPrimeiraMoeda.value === 'real' && selecaoSegundaMoeda.value === 'yuan') { 
        valorConvertido.textContent = new Intl.NumberFormat('zh-CN', { 
        style: 'currency', 
        currency: 'CNY' }).
        format(valorInput * valorReal/ valoryuan); } 
    
}

     function atualizarSimboloMoeda() {
            const PrimeiraMoeda = document.querySelector('.moeda');
            const simboloPrimeiraMoeda = document.querySelector('.simbolo-primeira-img');

            if (selecaoPrimeiraMoeda.value === 'dolar') {
                PrimeiraMoeda.innerHTML = 'Dólar Americano';
                simboloPrimeiraMoeda.src = './img/Dolar.jpg';
            }
            
        if (selecaoPrimeiraMoeda.value === 'euro') {
                PrimeiraMoeda.innerHTML = 'Euro';
                simboloPrimeiraMoeda.src = './img/Euro.jpg';
            }
        if (selecaoPrimeiraMoeda.value === 'yuan') {
                PrimeiraMoeda.innerHTML = 'Yuan';
                simboloPrimeiraMoeda.src = './img/Yuan.jpg';
            }  
        if (selecaoPrimeiraMoeda.value === 'real') {
                PrimeiraMoeda.innerHTML = 'Real';
                simboloPrimeiraMoeda.src = './img/Real.jpg';
            }  
        } 


     function atualizarSimboloSegundaMoeda() {
            const SegundaMoeda = document.querySelector('.nome-moeda');
            const simboloSegundaMoeda = document.querySelector('.simbolo-segunda-img');

            if (selecaoSegundaMoeda.value === 'dolar') {
                SegundaMoeda.innerHTML = 'Dólar Americano';
                simboloSegundaMoeda.src = './img/Dolar.jpg';
            }

            if (selecaoSegundaMoeda.value === 'euro') {
                SegundaMoeda.innerHTML = 'Euro';
                simboloSegundaMoeda.src = './img/Euro.jpg';
            }

            if (selecaoSegundaMoeda.value === 'yuan') {
                SegundaMoeda.innerHTML = 'Yuan';
                simboloSegundaMoeda.src = './img/Yuan.jpg';
            }
            if (selecaoSegundaMoeda.value === 'real') {
                SegundaMoeda.innerHTML = 'Real';
                simboloSegundaMoeda.src = './img/Real.jpg';
            }

        converterMoeda()
        
        }

        
selecaoPrimeiraMoeda.addEventListener('change', atualizarSimboloMoeda);
selecaoSegundaMoeda.addEventListener('change', atualizarSimboloSegundaMoeda);
    
botaoConverter.addEventListener('click', converterMoeda)
    
 

   
 

   