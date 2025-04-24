function solution(name, yearning, photo) {
    let dict = {};
    name.forEach((v, i)=>dict[v] = yearning[i])
    return photo.map((item)=> item.reduce((acc, cur)=> dict[cur] ? acc + dict[cur] : acc, 0))
}