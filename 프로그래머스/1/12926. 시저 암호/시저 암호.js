function solution(s, n) {
    var answer = '';
    let code = [...s].map((v)=> v.charCodeAt())
    let a = "a".charCodeAt();
    let z = "z".charCodeAt();
    let A = "A".charCodeAt();
    let Z = "Z".charCodeAt();
    console.log(a,z,A,Z)
    return code.map((v)=> {
        if(v >= a && v <= z){
            // 91 을 65로 변환
           return String.fromCharCode((v - a + n) % 26 + a)
        }else if(v >= A && v <= Z){
            return String.fromCharCode((v - A + n) % 26 + A)
        }
        return String.fromCharCode(v)
        }).join("")
    return answer;
}