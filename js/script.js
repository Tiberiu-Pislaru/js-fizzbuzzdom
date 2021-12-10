const container = document.getElementById('container');

for (let i = 1; i<=100; i++){

    if (i % 3 === 0 && i % 5 ===0) {

        console.log("FizzBuzz");
        container.innerHTML += `<div class="box box-fizzBuzz">fizzbuzz</div>`;
        
    }
    else if (i % 3 === 0){
        
        console.log("Fizz");
        container.innerHTML += `<div class="box box-fizz">fizz</div>`;
        
    }
    else if (i % 5 === 0){
        
        console.log("Buzz");
        container.innerHTML += `<div class="box box-buzz">buzz</div>`;

    }
    else{
    
        console.log(i);
        container.innerHTML += `<div class="box box-lightBlue">${i}</div>`;

    }

}