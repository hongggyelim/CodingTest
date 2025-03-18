function solution(absolutes, signs) {
    signs.forEach((v,i)=> v === false ? absolutes[i] *= -1 : v)
    return absolutes.reduce((a,c)=> a+ c)
}