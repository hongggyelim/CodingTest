function solution(n,a,b){
    var count = 0;
    [a, b] = [a, b].sort((a, b)=> a - b)
    while (a != b){
        a = Math.ceil(a / 2)
        b = Math.ceil(b / 2)
        count ++;
        // console.log(a, b, count)
        // N = 2^m 일때 경기는 총 m 라운드임 
    }
    
    return count;
}