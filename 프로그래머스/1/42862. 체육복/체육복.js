function solution(n, lost, reserve) {
    let possible = Array(n).fill(0).map((v, i)=> !lost.includes(i+1) ? i+1 : 0 ) 
    console.log(possible)
    // 여벌 체육복을 도둑맞은 경우 필터링 + possible에 추가해줘야함
    reserve.forEach((v)=> possible[v-1] = v) 
    reserve = reserve.filter((v)=> !lost.includes(v))
    console.log("여벌있는사람 추가 possible", possible)
    console.log("도둑맞은사람 뺌 reserve", reserve)
    lost.sort((a, b)=> a- b)
    reserve.sort((a,b)=> a - b)
    for (let num of lost){
        if (reserve.includes(num - 1)){
            possible[num - 1] = num;
            let index = reserve.indexOf(num - 1)
            reserve[index] = "X";
            console.log("첫번째 if possible", possible)
            console.log("첫번째 if reserve", reserve)
        }else if (reserve.includes(num + 1)){
            possible[num - 1] = num; 
            let index = reserve.indexOf(num + 1)
            reserve[index] = "X"
            console.log("두번째 if possible", possible)
            console.log("두번째 if reserve", reserve)
        }
    }
    
    return possible.filter(v=> v !== 0).length;
}