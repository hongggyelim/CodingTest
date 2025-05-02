function solution(lottos, win_nums) {
    var answer = [];
    let notCorrect = lottos.filter((v)=> !win_nums.includes(v))
//     if(notCorrect.length === 0) return [1,1]
    
//     if(notCorrect.reduce((a,b)=> a+b)=== 0) return [1,6]
    
    let notCorrectCount = notCorrect.length; // 4개 
    let zeroCount = notCorrect.filter((v)=> v === 0).length; // 2개
    let minCorrect = 6 - notCorrectCount
    
    const winDict = {
        // 일치 개수 : 순위
        6: 1, 
        5: 2,
        4: 3, 
        3: 4, 
        2: 5, 
        1: 6,
        0: 6
    }
    let min = winDict[minCorrect];
    let max = winDict[minCorrect + zeroCount];
    
    return [max, min];
}