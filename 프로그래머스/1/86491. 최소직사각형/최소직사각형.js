function solution(sizes) {
    var answer = 0;
    
    let [maxW, maxH] = [0,0];
    for (let i = 0; i < sizes.length; i ++){
        if (sizes[i][0] > sizes[i][1]){
            if (sizes[i][0] > maxW) maxW = sizes[i][0];
            if (sizes[i][1] > maxH) maxH = sizes[i][1];
        }else{
            if (sizes[i][0] > maxH) maxH = sizes[i][0];
            if (sizes[i][1] > maxW) maxW = sizes[i][1];
        }
        }
    answer = maxW * maxH
    return answer;
}