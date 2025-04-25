function solution(cacheSize, cities) {
    var answer = 0;
    let cacheHistory = {};
    let cache = [];
    
    cities = cities.map((city)=> city.toLowerCase())
    cities.forEach((city)=> cacheHistory[city] = []);
    if(cacheSize === 0) return cities.length * 5;
    for(let i = 0; i < cities.length; i++){
           if(cache.includes(cities[i])){
               answer += 1;
               cacheHistory[cities[i]].push(i)
                // console.log("캐시 있음")

           }else{
               // console.log("캐시 없음")
                answer += 5;
               
               if(cache.length < cacheSize){
                   cache.push(cities[i])
                   cacheHistory[cities[i]].push(i)
                   
               }else{
            // 캐시 교체 : 
            // cache 배열에 있는 것 중 History[cities[i]]의 마지막 원소가 가장 작은거를 제거
               let last = []
               cache.forEach((v)=> last.push(cacheHistory[v].at(-1)));
               let min = Math.min(...last)
               let filtered = cache.filter((v)=> cacheHistory[v].at(-1) !== min)
               // console.log(last, min, filtered)
               cache = filtered
               cache.push(cities[i])
               cacheHistory[cities[i]].push(i)
               }
                   
           }
       
        // console.log(cache, cacheHistory)
    }
    
    return answer;
}