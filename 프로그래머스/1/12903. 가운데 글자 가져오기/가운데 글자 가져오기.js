function solution(s) {
    let half = s.length / 2;
    return Math.floor(half) === half ? s.slice(half - 1,half + 1) : s.slice(half,half+1)
}