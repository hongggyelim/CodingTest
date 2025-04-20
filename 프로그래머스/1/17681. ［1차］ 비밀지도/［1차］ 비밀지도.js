function solution(n, arr1, arr2) {
    var answer = Array(n).fill('')
    new1 = arr1.map((v)=> v.toString(2).padStart(n,'0'))
    new2 = arr2.map((v)=> v.toString(2).padStart(n,'0'))
    
    for(let i = 0; i < new1.length; i++){
        for(let j = 0; j < new1[i].length; j++ ){
            if(new1[i][j] === '0' && new2[i][j] === '0'){
                answer[i] += " "
            }else{
                answer[i] += "#"
            }
        }
    }
    return answer;
}