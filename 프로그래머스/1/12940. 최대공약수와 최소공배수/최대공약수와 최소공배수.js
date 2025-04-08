function getGcd(a, b){
    console.log(a, b)
    return b === 0 ? a : getGcd(b, a%b)
}
function solution(n, m) { 
    let gcd = getGcd(n, m)
    return [gcd, n * m / gcd]
}