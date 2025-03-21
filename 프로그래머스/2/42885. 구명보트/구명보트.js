function solution(people, limit) {
    var count = 0;
    people.sort((a,b)=> b - a)
    let left = 0, right = people.length -1;
    
    while(left <= right){
        
        if(people[left] + people[right] <= limit){
            left ++;
            right --;
            count ++;
        } else{
            left ++;
            count ++;    
        }
        
    }
    return count;
}