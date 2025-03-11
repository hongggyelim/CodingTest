function solution(arr) {
    let col = arr.length;
    let row = arr[0].length;
    let diff = Math.abs(col - row)
    
    if (col > row){
        arr = arr.map(inner => [...inner, ..."0".repeat(diff).split("").map(v => +v)]);
    }else if(col < row){
        let addArr = Array(row).fill(0)
        while(col < row){
            arr.push(addArr);
            col ++;
        }
        
    } 
    
    return arr;
}