function solution(array) {
    const dict = {};
    
    // array 를 순회하면서 dict에 키값이 있으면 +1, 없으면 =1
    for (let i = 0; i < array.length; i++){
        if (dict[array[i]]){
            dict[array[i]] += 1;
        }else{
            dict[array[i]] = 1;
        }
    }
    
    // Object.values가 제일 큰 key 값 = index을 answer로 반환 
    const values = Object.values(dict);
    const keys = Object.keys(dict);
    const maxCount = Math.max(...values);
    
    let maxCountCheck = 0;
    let maxValue;
    
    for (let i=0; i < values.length; i++){
        if(values[i] === maxCount){
            maxCountCheck ++;
            maxValue = keys[i];
        }
    }
    return maxCountCheck > 1 ? -1 : Number(maxValue);

}

