function solution(dot) {
    var answer = 0;

    if (dot[0]*dot[1] < 0){
      dot[0] < 0 ? answer = 2: answer = 4
    } else {
        dot[0] > 0 ? answer =1 : answer = 3
    }
    return answer;
}