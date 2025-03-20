function solution(participant, completion) {
    let dict = {};
    let answer = ''
    participant.forEach((name)=> dict[name]? dict[name] += 1 : dict[name] = 1);
    completion.forEach((name)=> dict[name]? dict[name] -= 1 : dict[name] = 0)
    for (let [key, value] of Object.entries(dict)){
        if (value === 1) answer = key
    }
    return answer
}