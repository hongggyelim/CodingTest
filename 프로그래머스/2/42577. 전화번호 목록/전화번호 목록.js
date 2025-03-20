function solution(book) {
    var answer = true;
    book.sort()
    for (let i = 0; i < book.length - 1; i++){
        answer = book[i+1].split(book[i])[0] === '' ? false: true;
        if(answer === false) break;
    }
    return answer;    
}