function solution(genres, plays) {
    var answer = [];
    let genresCount = {}
    let songInfo = {}
    genres.forEach((v, i)=> {
        genresCount[v] = (genresCount[v] || 0) + plays[i]

        if(!songInfo[v]){
            songInfo[v] = []
        }
        songInfo[v].push([plays[i], i])
    })
    
    let sortedGenres = Object.keys(genresCount).sort((a,b)=> genresCount[b] - genresCount[a])
    
    for (let genre of sortedGenres){
        let data = Object.values(songInfo[genre]).sort((a, b)=> b[0] - a[0])
        if(data.length >= 2){
            answer.push(data[0][1], data[1][1])
        }else {
            answer.push(data[0][1])
        }
                
    }
    return answer;
}