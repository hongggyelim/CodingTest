function solution(str1, str2) {
    
    const getArr = (str)=>{
        let arr = []
        const regex =/^[A-Za-z]+$/
        for (let i = 0; i < str.length - 1; i++){
        arr.push(str.slice(i, i+2))
    }
        return arr.filter((v)=> regex.test(v)).map((v)=> v.toLowerCase())
    }
    
    const arr1 = getArr(str1)
    const arr2 = getArr(str2)
    
    // console.log(arr1, arr2)
    if(arr1.length === 0 && arr2.length === 0) return 65536

    let map1 = new Map()
    let map2 = new Map()
    
    for (let word of arr1){
        map1.set(word, (map1.get(word)|| 0) +1)
    }
    for (let word of arr2){
        map2.set(word, (map2.get(word)|| 0) +1)
    }
    // console.log(map1, map2)
    let intersection = 0
    let union = 0
    
    const allKeys = new Set([...map1.keys(), ...map2.keys()])
    
    for (let key of allKeys){
        const count1 = map1.get(key) || 0;
        const count2 = map2.get(key) || 0;
        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);

    }
    
    return Math.floor((intersection / union) * 65536);
}