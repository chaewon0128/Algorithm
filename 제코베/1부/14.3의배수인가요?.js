// 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고, 아니면 숫자를 그대로 출력하시오

// 입력 3
// 출력 짝

// 입력 2
// 출력 2

function game(number) {

    if(Number(number) % 3 === 0) {
        return console.log("짝")
    } else {
        return console.log(Number(number));
    }
    
}

