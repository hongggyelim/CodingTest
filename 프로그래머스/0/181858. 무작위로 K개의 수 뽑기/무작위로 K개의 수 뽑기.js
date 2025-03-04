function solution(arr, k) {
    // Set 으로 중복 제거
    let set = Array(...new Set(arr)).slice(0, k);
    
    while(set.length < k){
        set.push(-1)
    }
    return set;
}