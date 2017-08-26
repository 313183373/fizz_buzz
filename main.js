function fizz_buzz(num){
    for(let i=1;i<=num;i++){
        if(i%15===0){
            console.log('fizz buzz');
        }else if(i%5===0){
            console.log('buzz');
        }else if(i%3===0){
            console.log('fizz');
        }else{
            console.log(i);
        }
    }
}


fizz_buzz(100);