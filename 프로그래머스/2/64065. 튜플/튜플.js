function solution(s) {
    s = s.replace("{{","").replace("}}","").split("},{").map((v)=> v.split(",")).map((v)=> v.map((w)=> Number(w))).sort((a, b)=> a.length - b.length);
    console.log(s)
    let prev = s[0].pop()
    let history = [];
    history.push(prev);
    
    for(let i = 1; i < s.length; i++){
    // arr 원소가 2개 이상일때
    // 새로 추가된 값 el 
        for (el of s[i]){
            if(!history.includes(el)){
                history.push(el)
                }
            }
    }
    return history;
}