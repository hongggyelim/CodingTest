function solution(sizes) {
    let [w, h] = [0, 0];
    sizes.forEach(size=> {
        const [a, b] = size.sort((a, b)=> a - b)
        if (a > w) w = a;
        if (b > h) h = b;
    })
    return w * h;
}