function solution(code) {
    let mode = 0;
    let ret = '';
    
    for (let i=0; i < code.length; i ++){
        if (mode === 0){
                if (code[i] === "1") {
                    mode = 1;
                } 
                if (i % 2 === 0 && code[i] !== "1"){
                    ret += code[i]
                }
        } else {
            if (code[i] === "1") {
                mode = 0
            };
            if (i % 2 === 1 && code[i] !== "1"){
                    ret += code[i]
                }
        }
    }
    if (ret === '') return "EMPTY"
    return ret;
}