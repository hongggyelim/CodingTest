function solution(price, money, count) {
    for (let i = 1; i <= count; i++){
        let p = price * i
        money -= p
    }
    return money > 0 ? 0 : money * -1;
}