function solution(k, dungeons) {
    let answer = 0;
    let n = dungeons.length
    const visited = Array(n).fill(false);
    
    function dfs(current, count){
        answer = Math.max(answer, count);
        for(let i = 0; i < n; i++){
            let [min, cost] = dungeons[i];
            if(!visited[i] && current >= min){
                visited[i] = true;
                dfs(current - cost, count +1);
                visited[i] = false
            }
        }
    }
    dfs(k, 0);
    return answer;
}
