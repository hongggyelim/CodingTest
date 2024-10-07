function solution(array, n) {
    var answer = 0;
    array = array.sort((a,b)=>a-b);
    const diff = array.map((v)=> Math.abs(v-n));
    const minDiff = Math.min(...(diff)); 
    const index = diff.indexOf(minDiff);
    return array[index];
}