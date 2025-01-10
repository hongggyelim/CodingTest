function solution(chicken) {
    let ck = chicken;
    let share = 0;
    let rest = 0;
    while (ck >= 10){
        let newShare = Math.floor(ck / 10);
        share += newShare
        ck = newShare + (ck%10)
    }
        
    return share ;
}