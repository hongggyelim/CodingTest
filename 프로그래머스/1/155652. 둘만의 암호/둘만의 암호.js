function solution(s, skip, index) {
   let skipList = [...skip].map((v)=> v.charCodeAt(0)).sort((a,b)=> a-b);

    const getNextChar = (char)=>{
        let code = char.charCodeAt(0)
        let moved = 0;
        
        while(moved < index){
            code ++;
            if(code > 122) code = 97;
            if(!skipList.includes(code)){
                moved ++;
            }
        }
        
        return String.fromCharCode(code)
    }
    let dict = {}
    let answer = []
    for (let i = 0; i < s.length; i++){
        if(!dict[s[i]]){
            dict[s[i]] = getNextChar(s[i])
        }
            answer.push(dict[s[i]])
    }
    return answer.join('')
}