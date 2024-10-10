function solution(dots) {
    var answer = 0;
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots
    let length = Math.abs(x1 - x2) || Math.abs(x2 - x3) ;
    let height = Math.abs(y3 - y2) || Math.abs(y3 - y4) ;
    answer = length * height;
    return answer;
}