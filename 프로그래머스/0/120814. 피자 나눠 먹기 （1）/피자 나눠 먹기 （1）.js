function solution(n) {
    let pizza = Math.floor(n / 7);
    if (n % 7 !== 0) {pizza += 1 }
    return pizza;
}