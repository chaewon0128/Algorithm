// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오

const year = "2019";
const month = "04";
const day = "26";
const hour = "11";
const minutes = "34";
const second = "27";

let days = `${year}/${month}/${day}`;

let time = ` ${hour}:${minutes}:${second}`

const result = days.concat(time)

console.log(result);