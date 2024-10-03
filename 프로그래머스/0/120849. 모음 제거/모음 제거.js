function solution(my_string) {
    const exp_str = 'aeiou';
    
    for (exp_char of exp_str){
    [...my_string] = [...my_string].filter((char)=>char !== exp_char)}
    return [...my_string].join('');
}