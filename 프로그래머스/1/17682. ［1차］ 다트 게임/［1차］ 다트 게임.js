function solution(arr) {
    
    let temp=''
    let score = 0;
    let scoreList = [];
    const bonus = ["S", "D", "T"]
    for(let i = 0; i < arr.length; i++){
        
        if(!isNaN(Number(arr[i]))){
            temp += arr[i]
        }
        
        if(bonus.includes(arr[i])){
            switch(arr[i]){
                case "S": score = Number(temp) ** 1; break;
                case "D": score = Number(temp) ** 2; break;
                case "T": score = Number(temp) ** 3; break;
                }
            temp = ''; scoreList.push(score); 
        }
        
        switch(arr[i]){
            case "*": {
                let last = scoreList.splice(-2)
                scoreList.push(...last.map((v)=> v*2))
                break;
            }
            case "#": {
                let last = scoreList.pop()
                scoreList.push(last* (-1))
                break;}
        }
    
    }
    // console.log(scoreList)
    return scoreList.reduce((a,c)=> a+c)
}