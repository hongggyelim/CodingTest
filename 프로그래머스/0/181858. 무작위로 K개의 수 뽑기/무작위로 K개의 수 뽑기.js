function solution(arr, k) {
    // Set 으로 중복 제거
    let set = Array(...new Set(arr)).slice(0, k);
    
    return [...set, ...Array(k - set.length).fill(-1)]
}