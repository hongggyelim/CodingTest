function solution(myStr) {
    let splited = myStr.replaceAll("a", "X").replaceAll("b", "X").replaceAll("c", "X").split("X").filter(v => !!v)
    
    return splited.length > 0 ? splited : ["EMPTY"]
}