function solution(numbers) { //	"onetwothreefourfivesixseveneightnine"
    let answer = '';
    let target = '';
    const eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    
    for (let char of numbers){
        target += char;
        for (let i = 0; i < eng.length; i++){
            if (target === eng[i]){
            answer += i;
            target = '';
        } 
        }
           }
    return answer*1;
}
