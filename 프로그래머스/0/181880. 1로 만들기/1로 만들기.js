function solution(num_list) {
    var answer = 0;
    
    while(!num_list.every(v => v === 1)){
        num_list = num_list.map(v => {
            if (v > 1) {
                answer ++;                
                return v % 2 ? (v - 1) / 2 : v / 2;
            } else return 1;
        })
    }
    return answer;
}