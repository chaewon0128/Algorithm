// 문장이 입력되면 거꾸로 출력하는 프로그램을 만드시오

// 입력 거꾸로
// 출력 로꾸거

function 로꾸거(value) {

    if(typeof value === "string") {
       let str = value.split("").reverse().join("")
        console.log(str);
    }
    
}

로꾸거("거꾸로")