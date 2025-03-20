function solution(clothes) {
    let closet = {} // 카테고리 별 아이템 개수
    for(let [item,category] of clothes){
         closet[category] = (closet[category] || 0) + 1
    }
    let arr = Object.values(closet)
    return arr.reduce((acc, cur)=> acc * (cur+1), 1) - 1
}
