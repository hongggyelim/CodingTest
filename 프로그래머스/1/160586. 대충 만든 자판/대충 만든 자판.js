function solution(keymap, targets) {
    var answer = [];
    for (let target of targets){
        let count = 0;
        for (let char of target){
            // keymap 원소 중 char 랑 같은 index 찾기 
            let index = []
            for (key of keymap){
                let i = key.indexOf(char)
                index.push(key.indexOf(char))    
                
            }
            // 더 작은 index + 1  
            // index = -1 은 아니어야함
            let min = Math.min(...index.filter((v)=> v !== -1))
            
            if(index.every((v)=> v === -1)){
                count = -1   
                // 그 뒤에껀 할 필요가 없음..
                break;
            }else{
                count += min + 1    
            }
        }
        
        answer.push(count)
    }
    return answer;
}