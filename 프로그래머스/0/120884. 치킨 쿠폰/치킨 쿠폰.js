function solution(chicken) {
    if (chicken < 10) return 0; // 10마리 이하일 경우 서비스 치킨 없음

    const x = Math.floor((chicken - 10) / 9);
    return 1 + x;
}