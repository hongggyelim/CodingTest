function solution(strings, n) {
    strings = strings.sort() // 1 인덱스 같을때 어차피 sort해야함
    strings.sort((a,b)=>{
        if(a[n]<b[n]) return -1;
        if(a[n]<b[n]) return 1;
        return 0
    })
    return strings
}