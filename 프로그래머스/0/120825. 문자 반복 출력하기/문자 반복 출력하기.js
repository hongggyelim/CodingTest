function solution(my_string, n) {
    const arr = [...my_string]; // 문자열을 배열로 
    const list = [];
    // n번 반복
    for (let i = 0; i < my_string.length; i++){
        let N = n;
        while (N > 0){
            list.push(arr[i]);
            N --;
        } 
    }
    return list.join("")
}

