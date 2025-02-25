function solution(arr) {
    return arr.map((v)=> {
        switch(v % 2){
            case 0: return v >= 50 ? v / 2 : v ; break;
            case 1: return v < 50 ? v * 2 : v ; break; 
        }
    })
}