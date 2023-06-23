function nlcm(a, b) {
    // 최대공약수 함수
    function gcd(a, b) {
        while (b !== 0) {
            let r = a % b;
            a = b;
            b = r;
        }
        return a;
    }
    // 최소공배수 = 두 수의 곱을 최대공약수로 나눈 값
    return (a * b) / gcd(a, b);
}

function solution(arr) {
    let lcm = arr[0];
    // 배열의 두 번째 숫자부터 순서대로 lcm과의 최소공배수를 계산하여 lcm 변수에 저장
    for (let i = 1; i < arr.length; i++) {
        lcm = nlcm(lcm, arr[i]);
    }
    return lcm;
}