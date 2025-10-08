function solution(users, emos) {
    const discount = [10, 20, 30, 40]
    const m = emos.length;
    let best = [0, 0] // 플러스 유저, 매출액
    
    function dfs(depth, current){
        if(depth === m){
            // current = [10, 20]
            
            // 1. 첫번째 users
            // 1-1. minDiscount 만족하면 구입 
            // 1-2. priceLimit 만족하면 서비스 가입
        let totalSales = 0;
        let serviceUser = 0;
        for (let [minDiscount, priceLimit] of users){
            let spend = 0; // 1번 유저의 구입 금액
            for (let i = 0; i < m ; i++){ // emos 전체 순회하면서 구입하는 금액 체크   
                if(current[i] >= minDiscount){
                    spend += emos[i] * (100 - current[i]) / 100
                }
            }
            
            if(spend >= priceLimit){
                    serviceUser ++;
                }else{
                    totalSales += spend
                }
        }
            // best 반환 조건 
            if(serviceUser > best[0] ||
              (serviceUser === best[0] && totalSales > best[1])
              ){
                best = [serviceUser, totalSales]
            }
            
            return;
        }
        
        for (let d of discount){
            dfs(depth +1, [...current, d])
        }
    }
    
    dfs(0, [])
    
    return best;
}