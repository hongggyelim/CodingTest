function solution(str_list) {
    const right = str_list.indexOf("r"); 
    const left = str_list.indexOf("l");
    if (right === -1 && left === -1) return [];
    if (left === 0) return [];
    
    if(right === -1 || left === -1){
        return (right < left) ? str_list.slice(0, left) : str_list.slice(right + 1)
    }else{
        return (right > left && left >= 0 && right >=0) ? str_list.slice(0, left) : str_list.slice(right + 1)
    }
}
