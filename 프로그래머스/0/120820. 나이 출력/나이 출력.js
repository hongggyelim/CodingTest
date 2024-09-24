function solution(age) {
    const date = new Date();
    const thisYear = date.getFullYear();
    return( thisYear - age - 1);
    
}