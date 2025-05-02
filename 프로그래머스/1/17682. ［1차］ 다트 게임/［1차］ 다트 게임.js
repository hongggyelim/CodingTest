function solution(arr) {
    
    let temp=''
    let score = 0;
    let scoreList = [];
    
    for(let i = 0; i < arr.length; i++){
        
        if(!isNaN(Number(arr[i]))){
            temp += arr[i]
        }
        console.log(arr[i],temp)
        switch(arr[i]){
                
            case "S": score = Number(temp) ** 1; temp = ''; scoreList.push(score); break;
            case "D": score = Number(temp) ** 2; temp = ''; scoreList.push(score); break;
            case "T": score = Number(temp) ** 3; temp = ''; scoreList.push(score); break;
                
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
    console.log(scoreList)
    return scoreList.reduce((a,c)=> a+c)
}