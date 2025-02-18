function solution(arr, idx) {
    const filtered = arr.map((v, i)=> i >= idx && v == 1 ? v = "O" : v = "X")
    console.log(filtered)
    return filtered.indexOf("O")
}