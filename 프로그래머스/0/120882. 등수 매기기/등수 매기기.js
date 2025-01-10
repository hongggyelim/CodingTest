function solution(score) {
    let answer = [];
    const average = score.map((item, index)=>({
        avg:(item[0] + item[1])/2, 
        index: index}))
                              
    average.sort((a,b)=> b.avg-a.avg)
    const ranks = new Array(score.length);
    let rank = 1;
    for(let i = 0 ; i < average.length; i ++){
        if( i>0 && average[i].avg === average[i-1].avg){
            ranks[average[i].index] = rank;
        }else{
            rank = i + 1;
            ranks[average[i].index] = rank;
        }
        
    }
    return ranks;    
}