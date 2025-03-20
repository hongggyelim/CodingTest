function solution(nums) {
    // nums에 총 몇가지 종류가 있는지 먼저 dict로 만들어보고
    // nums/2 보다 큰지 작은지 검사 
    // 작으면 그 수 그대로 리턴
    // 크면 nums/2 를 리턴
    let dict = {}
    nums.forEach(v=> dict[v] ? dict[v]+= 1: dict[v]= 1)
    let key = Object.keys(dict).length
    return key > (nums.length / 2) ? (nums.length / 2) : key
}