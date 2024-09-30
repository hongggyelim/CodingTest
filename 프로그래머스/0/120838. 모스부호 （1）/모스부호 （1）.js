function solution(letter) {
    var answer = '';
    morse = { // 객체
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    const letterArr = letter.split(" ");
    answer += letterArr.map((char)=>morse[char]).join('') // morse객체의 키값과 같으면 밸류값을 반환
    return answer;
}