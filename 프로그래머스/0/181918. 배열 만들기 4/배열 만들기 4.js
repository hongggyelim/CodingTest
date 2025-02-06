function solution(arr) {
    var stk = [];
    let i = 0;
    while(i < arr.length){
        switch(stk.length === 0){
            case true: stk.push(arr[i]); 
                i ++ ; break;
            case false:if(stk.at(-1) < arr[i]){
                stk.push(arr[i])
                i++
            }else{ stk.pop() }; 
                break;
        }  
    }
    return stk;
}