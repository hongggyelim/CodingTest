function solution(s) {
    var answer = [0, 0];
    
    while (s !== "1"){
        
    let arr = s.split("").filter(v => v !== "0")
    answer[1] += s.length - arr.length; 
    let c = arr.length
    s = c.toString(2)
    answer[0] ++; 
    }
    
    return answer;
}