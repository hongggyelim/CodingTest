function solution(food) {
    var answer = '';
    let menu = {}
    food.forEach((v, i)=>{
        menu[i] = Math.floor(v / 2)
    })
    let pre = Object.values(menu).reduce((acc,cur,i)=> {
        if(i!== 0) {
            return acc + String(i).repeat(cur)
        } return acc
    },'')
    let reverse = [...pre].reverse().join('')
    answer += pre + 0 + reverse
    return answer;
}