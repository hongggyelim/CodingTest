const isPrime = (num)=>{
    if (num < 2) return false;
    for(let i = 2 ; i * i <= num; i++){
        if(num % i === 0) return false
    }
    return true
}
function solution(nums) {
    //3개 값 더하기 
    let count = 0
    for(let i = 0; i < nums.length-2; i++){
        for (let j = i+1; j<nums.length-1; j++){
            for(let k = j+1; k<nums.length; k++){
                const sum = nums[i] + nums[j] + nums[k]
                count = isPrime(sum) ? count +1 : count
            }
        }
    }
    return count    
}
