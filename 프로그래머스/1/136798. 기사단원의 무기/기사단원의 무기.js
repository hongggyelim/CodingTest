function solution(number, limit, power) {
    // number 의 약수 개수 구하기
    const getNumbers = (number)=>{
        let count = 0
        for (let i = 1; i * i <= number; i++){
            if(number % i === 0) {
                count += (i * i === number) ? 1 : 2
            }
        }       
        return count
    }
    let total = 0;
    for (let i = 1; i <= number; i++){
        let count = getNumbers(i)
        total += count > limit ? power : count
    }
    return total
}