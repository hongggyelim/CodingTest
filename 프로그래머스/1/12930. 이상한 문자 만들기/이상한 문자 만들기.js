function solution(s) {
    var answer = '';
    let arr = s.split(" ");
    return arr.map((v)=>[...v].map((c,i)=> i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join("")).join(" ")
}