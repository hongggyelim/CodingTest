function solution(list) {
  const possible = ["aya", "ye", "woo", "ma"]
  let count = 0;
    
  for (let word of list){
        let temp = word
        let prev = ''
        let isValid = true;

        while(temp.length > 0){
            let matched = false;   

            for (let can of possible){
                if(temp.startsWith(can) && prev !== can){
                    prev = can
                    temp = temp.slice(can.length)
                    matched = true;
                    break;
                }
            }

            if(!matched){
                isValid = false;
                break;
            }
        }

        if(isValid) count ++
    }
    return count
}