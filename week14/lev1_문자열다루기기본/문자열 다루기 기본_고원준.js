function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        // 문자열의 길이가 4 또는 6이 아닌 경우에는 false 반환
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        // 문자열의 각 문자를 확인하면서 숫자가 아닌 경우에는 false 반환
        if (isNaN(s[i])) {
            return false;
        }
        // isNaN() 함수는 숫자가 아닌 값을 찾는 함수, 숫자가 아니면 ture 반환
    }
    
    // 모든 조건을 만족하면 true 반환
    return true;
}