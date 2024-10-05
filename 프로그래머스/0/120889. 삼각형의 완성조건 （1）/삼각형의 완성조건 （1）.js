function solution(sides) {
    const max = Math.max(...sides);
    const rest = sides.reduce((acc, el)=> acc+el,0)-max;
    console.log(max, rest)
    return max < rest ? 1 : 2;
}