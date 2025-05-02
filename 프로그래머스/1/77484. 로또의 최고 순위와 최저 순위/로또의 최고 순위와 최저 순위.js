function solution(lottos, win_nums) {
    
    // 인덱스 = 맞춘 개수, 값 = 순위
    const score = [6, 6, 5, 4, 3, 2, 1]
    
    let notCorrect = 0
    let zeroCount = 0
    let correct = 0
    
    
    lottos.forEach((v)=> {
        v === 0 ? zeroCount ++ : win_nums.includes(v)? correct ++: v
    })
    notCorrect -= zeroCount

    
    console.log(zeroCount + correct, correct)
    return [score[zeroCount + correct], score[correct]];
}