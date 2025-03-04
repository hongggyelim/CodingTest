function solution(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;
    switch(len1 === len2){
        case false: 
            return Math.max(len1, len2) === len1 ? 1 : -1; 
            break;
            
        case true:
            let sum1 = arr1.reduce((acc, cur)=> acc + cur);
            let sum2 = arr2.reduce((acc, cur)=> acc + cur);
            return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
            break;
    }
}