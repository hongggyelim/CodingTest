function solution(picture, k) {
    let answer = []
    picture.map(v => [...v].map(inner=> inner.repeat(k)).join(""))
                    .map(v => v+"/").map(v=> v.repeat(k)).map(v=> v.split("/")).map(v=> v.map(inner => answer.push(inner)))
    return answer.filter(v=> v !== "")
}