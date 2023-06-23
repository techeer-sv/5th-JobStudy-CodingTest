function solution(s) {
    const numbers = s.split(' ').map(Number);
    //공백을 기준으로 나누어 배열로 만들기
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    // ...numbers 개별 인자로 전달
    return `${min} ${max}`;
}