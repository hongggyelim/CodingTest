function solution(n){
    let use = 1;
    let cur = n;
    while(cur !== 1){
        if(cur % 2 === 0){
            cur /= 2;
        }else{
            cur -= 1;
            use ++;
        }
    }
    return use;
}