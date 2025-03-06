function solution(rank, attendance) {
    rank = rank.map((v, i)=> attendance[i] ? v : "X") //[6,"X",5,"X","X",4]
    const a = getMinIndex(rank);
    
    rank.splice(a, 1, "X");
    
    const b = getMinIndex(rank);
    rank.splice(b, 1, "X");
    const c = getMinIndex(rank);
    return 10000 * a + 100 * b + c;
}

const getMinIndex = (rank) => {
    let min = Math.min(...rank.filter(v => !isNaN(v)));    
    let minIndex = rank.indexOf(min)
    return minIndex
}