function solution(arr) {
    var X = [];
    for (a of arr){
        let times = a;
        while(times >= 1){
            X.push(a);
            times --;
        }
    }
    return X;
}