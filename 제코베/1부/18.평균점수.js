// # 문제18 : 평균 점수

// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요. 
// **단, 소숫점 자리는 모두 버립니다.**

// 오답
// function calculate(score) {
//         if(typeof score === "string") {
//             let values = score.split(" ")

//             return Math.floor((values[0] + values[1] + values[2])/3)
//         }

// }

function calculate(score) {
    if(typeof score === "string") {
        let scores= score.split(" ")
        let sum = 0;

        for(let i = 0 ; i < scores.length ; i++ ) {
            sum+=Number(scores[i])
        }

         return console.log(Math.floor(sum/3))

    }

}

calculate("100 20 80")