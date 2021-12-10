// creo una variabile che si popula con il container del DOM
const container = document.getElementById('container');

// creo il ciclo (loop) for
for (let i = 1; i<=100; i++){

    // controllo sè il valore della i è divisibile sia per 3 che per 5,
    // in caso di risposta positiva, stampo nella console la stringa "FizzBuzz"
    // e nel container nel DOM 'stampo' un div con certe classi (che si trovano nel CSS),
    // con la stringa "fizzbuzz" dentro
    // in caso la condizione non venga rispettata controllo la prossima condizione
    if (i % 3 === 0 && i % 5 ===0) {
        
        console.log("FizzBuzz");
        container.innerHTML += `<div class="box box-fizzBuzz">fizzbuzz</div>`;
        
    }

    // controllo sè il valore della i sia divisibile per 3
    // in caso di risposta positiva, stampo nella console la stringa "Fizz"
    // e nel container nel DOM 'stampo' un div con certe classi (che si trovano nel CSS),
    // con la stringa "fizz" dentro
    // in caso la condizione non venga rispettata controllo la prossima condizione
    else if (i % 3 === 0){
        
        console.log("Fizz");
        container.innerHTML += `<div class="box box-fizz">fizz</div>`;
        
    }
    // controllo sè il valore della i sia divisibile per 5
    // in caso di risposta positiva, stampo nella console la stringa "buzz"
    // e nel container nel DOM 'stampo' un div con certe classi (che si trovano nel CSS),
    // con la stringa "buzz" dentro
    // in caso la condizione non venga rispettata controllo la prossima condizione
    else if (i % 5 === 0){
        
        console.log("Buzz");
        container.innerHTML += `<div class="box box-buzz">buzz</div>`;

    }
    // caso generale
    // stampo nella console il valore di i
    // e nel container nel DOM 'stampo' un div con certe classi (che si trovano nel CSS),
    // con il valore della i dentro
    // questo blocco di comandi sarà sempre eseguito se le altre condizioni hanno come risultato falso
    else{
    
        console.log(i);
        container.innerHTML += `<div class="box box-lightBlue">${i}</div>`;

    }

}