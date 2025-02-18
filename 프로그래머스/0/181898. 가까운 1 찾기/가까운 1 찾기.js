function solution(arr, idx) {
    const filtered = arr.map((v, i)=> i >= idx && v == 1 ? v = "O" : v = "X")
    return filtered.indexOf("O")
}