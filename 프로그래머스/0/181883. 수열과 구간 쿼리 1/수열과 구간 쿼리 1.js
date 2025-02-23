function solution(arr, queries) {
    for (let [s,e] of queries){
        for (let i = 0; i < arr.length; i ++){
            if (i >= s && i <= e){
                arr[i] += 1
            }
        }
    }
    return arr;
}