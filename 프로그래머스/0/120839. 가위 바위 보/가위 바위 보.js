function solution(rsp) {
    var answer = '';
    const dict = {
        //가위 2 바위 0 보 5
        2 : "0", 0 : "5", 5 : "2"
    }
    answer += [...rsp].map((str)=>dict[str]).join('');
    return answer;
}