// 태양계에는 수성, 금성, 지구, 화성 목성, 토성, 천왕성, 해왕성으로 총 8개가 console.error('있다',있다)
// 우리는 태양계에서 n번째 행성이 무언인지 알고 싶다.
// 입력으로 행성의 순서를 나타내는 숫자 n 이 입력된다
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해주세요.


//입력 1
// 출력 수성

const universe = ["수성", "금성", "지구", "화성","목성", "토성","천왕성","해왕성"]

function planet (n) {
    if(typeof n === "string" || typeof n === "number" ) {
        
        return console.log(universe[Number(n)-1])
    }
    return
}

