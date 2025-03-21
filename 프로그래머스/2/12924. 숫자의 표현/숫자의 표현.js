function solution(n) {    
    const answer = [];
    let numbers = [];
    var i = 1,
        j = 1;
    while(i <= n){
        let total = 0;
        numbers.push(i);
        for(const num of numbers) total += num;
        if(total == n){
            answer.push(numbers.shift());            
            i = j++;             
        }else if(total > n){
            numbers = [];
            i = j++;
        }        
        i++;
    }
    return answer.length;
}