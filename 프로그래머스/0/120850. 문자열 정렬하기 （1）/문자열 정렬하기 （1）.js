function solution(my_string) {
    const numbers = '1234567890';
    let my_num;
    for (num of numbers){
     my_num = [...my_string]
         .map((char)=>char= Number(char))
         .filter((char)=> !isNaN(char))
         .sort((a,b)=> a - b)
    }
    
    return my_num;
}