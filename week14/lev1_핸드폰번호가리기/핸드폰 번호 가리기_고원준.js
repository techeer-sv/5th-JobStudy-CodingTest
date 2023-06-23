function solution(phone_number) {
    const length = phone_number.length;
    const hiddenNumber = phone_number.slice(0, length - 4).replace(/\d/g, '*');
    const numberFour = phone_number.slice(length - 4);
    //새로운 배열 만들기 
    return hiddenNumber + numberFour;
}
