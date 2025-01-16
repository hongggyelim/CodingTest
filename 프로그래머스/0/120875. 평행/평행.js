const getSlope = (dotArr)=>{
//     큰 수 - 작은 수 // x좌표 기준으로 정렬
    dotArr.sort((a,b)=>b[0] - a[0] > 0);
    const [[x1,y1],[x2,y2]] = dotArr;    
    const dy = y2-y1
    const dx = x2-x1
    return dy / dx
}

function solution(dots) {
    var answer = [];
// -- || X 3가지 경우 고려
//     x1y1-x2y2 를 고르면 나머지 자동으로 x3y3-x4y4
//     x1y1-x3y3 를 고르면 나머지 자동으로 x2y2-x4y4
//     x1y1-x4y4 를 고르면 나머지 자동으로 x2y2-x3y3

    // 기울기비교하기
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots
    const cases = [
        [[dots[0], dots[1]], [dots[2], dots[3]], ], // case 
        [[dots[0], dots[2]], [dots[1], dots[3]], ],
        [[dots[0], dots[3]], [dots[1], dots[2]], ],
    ]
    
    const results = cases.map(([caseA, caseB])=>({
        slopeA : getSlope(caseA),
        slopeB : getSlope(caseB)
    }))

    results.forEach(({slopeA, slopeB})=> answer.push(slopeA === slopeB))
     
    return answer.includes(true) ? 1 : 0
}