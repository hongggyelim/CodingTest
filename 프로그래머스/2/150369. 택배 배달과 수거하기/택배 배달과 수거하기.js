function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let deliverRemain = 0;
  let pickupRemain = 0;

  for (let i = n - 1; i >= 0; i--) {
    deliverRemain += deliveries[i];
    pickupRemain += pickups[i];

    // 현재 위치 i에서 배달 또는 수거할 게 남아있다면
    while (deliverRemain > 0 || pickupRemain > 0) {
      deliverRemain -= cap;
      pickupRemain -= cap;
      answer += (i + 1) * 2; // 왕복 거리
    }
  }

  return answer;
}
