function solution(arr, n) {
    switch(arr.length % 2){
        case 0: arr = arr.map((v, i)=> i % 2 ? v + n : v); break;
        case 1: arr = arr.map((v, i)=> i % 2 ? v : v + n); break;
    }
    return arr;
}