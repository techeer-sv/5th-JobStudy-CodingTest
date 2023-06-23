function nlcm(a, b) {
    function gcd(a, b) {
        while (b !== 0) {
            let r = a % b;
            a = b;
            b = r;
        }
        return a;
    }
  
    return (a * b) / gcd(a, b);
}

function solution(arr) {
    let lcm = arr[0];
    for (let i = 1; i < arr.length; i++) {
        lcm = nlcm(lcm, arr[i]);
    }
    return nlcm;
}