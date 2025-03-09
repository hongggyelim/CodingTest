
function getDate(date){
    const [year, month, day] = date;
    let dateString = `${year}-${month}-${day}`;
    return new Date(dateString);
}

function solution(date1, date2) {
    const newDate1 = getDate(date1);
    const newDate2 = getDate(date2);
    return newDate1 < newDate2 ? 1 : 0
}
