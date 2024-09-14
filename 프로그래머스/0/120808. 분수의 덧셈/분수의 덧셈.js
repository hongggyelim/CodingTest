const solution = (numer1, denom1, numer2, denom2)=>{
    // 분수 1 : numer1/denom1
    // 분수 2 : numer2/denom2
    // 두 분수를 더한 값을 기약 분수로 나타내서 [분자, 분모] 리턴
    
    // 공통 분모 : 최소공배수
    /* 5, 10 => 10 : 10이 5로 나눠진다.  
    2, 3 => 6 = 2*3 : 2와 3은 서로 나눠지지않는다
    4, 6 => 12 : 두 수는 서로 나눠지지 않지만 4와 6의 최대공약수가 2 이므로 2* 2* 3 
    */
    
    // 일단 분모는 두 수를 곱하기
    const calcDenom = denom1*denom2;
    
    // 분자는 공통 분모를 원래 분모로 나눈 값을 곱해주기 
    const calcNumer = (numer, denom, calcDenom)=> {
        return numer*(calcDenom / denom);
    }
    
    const calcNumer1 = calcNumer(numer1, denom1, calcDenom);
    const calcNumer2 = calcNumer(numer2, denom2, calcDenom);
    
    const sumNumer = calcNumer1 + calcNumer2;
    
    // 분모, 분자를 분모의 최대 공약수로 나누기 
    function gcd(a,b){
        return b === 0 ? a : gcd(b, a %b); //재귀함수
    }
    
    const GCD = gcd(sumNumer, calcDenom);
    
    return anserNum = [sumNumer/GCD, calcDenom/GCD];
    
    
}