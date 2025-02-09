function solution(a, b, c, d) {
    const sorted = [a, b, c, d].sort((a, b)=>a - b)
    const [x, y, z, w] = sorted;
    
    const set1 = new Set(sorted)
    switch(set1.size){
        case 4: return sorted[0];
        case 3: 
            // 2개 p ,나머지 q, r 일때 
            if (x === y) return z*w
            if (x === z) return z*w
            if (x === w) return y*z
            if (y === w) return x*z
            if (y === z) return x*w
            if (z === w) return x*y
        case 2: 
            if (x === y && z === w)return (x + z) * (z - x); // x = y , z = w
            if (x === y && y === z)return (10 * x + w) ** 2; // x = y= z != w
            if (y ===z && z === w)return (10 * w + x) ** 2; // x != y= z= w
            
        case 1: return 1111 * sorted[0]; 
    }
}