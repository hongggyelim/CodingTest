const DAY = 28;
const MONTH = 12;
const convertStringToDay = (string)=> {
    const [year, month, day] = string.split('.').map(Number)
    return year * MONTH *DAY + (month-1) * DAY + day 
}

function solution(today, terms, privacies) {
    var answer = [];
    
    const todayDays = convertStringToDay(today)
    
    const dict = {}; // 보관 가능한 일수
    terms.map((v=> v.split(' '))).forEach((v)=> dict[v[0]] = v[1]*DAY)
    
    privacies.forEach((v, i)=> {
        const [dateStr, type] = v.split(' ');
        const start = convertStringToDay(dateStr);
        const expire = start + dict[type];
        
        if (expire <= todayDays) {
            answer.push(i + 1);  // 번호는 1부터
        }
    });
    
    return answer;
    
}