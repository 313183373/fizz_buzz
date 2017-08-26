function fizz_buzz(num){
    if(num%15===0){
        console.log('fizz buzz');
    }else if(num%5===0){
        console.log('buzz');
    }else if(num%3===0){
        console.log('fizz');
    }
}


fizz_buzz(3);
fizz_buzz(5);
fizz_buzz(15);