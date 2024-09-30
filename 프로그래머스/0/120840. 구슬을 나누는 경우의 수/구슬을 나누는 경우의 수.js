const factorial = (num)=> {
    let facNum = 1;
    for (let i = 1; i <= num ; i++){
        facNum *= i
    }return facNum        
}

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls- share ) * factorial(share)))
}

