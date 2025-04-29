function solution(s) {
    var answer = [];
    s = s.replace("{{","").replace("}}","").split("},{").map((v)=> v.split(",")).map((v)=> v.map((w)=> Number(w))).sort((a, b)=> a.length - b.length);

    let prev = s[0].pop()
    let history = [];
    history.push(prev);
    
    for(let arr of s){
            // arr 원소가 2개 이상일때
            // 새로 추가된 값 el 
        if(arr.length >= 2){
            for (el of arr){
                if(!history.includes(el)){
                    prev= el
                    history.push(prev)
                    }
            }
        }
    }
    return history;
}