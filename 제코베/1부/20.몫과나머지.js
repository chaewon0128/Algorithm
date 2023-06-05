// # 문제20 : 몫과 나머지

// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.**


function inputNumber (numbers) {

    let nums = numbers.split(" ")
    const value = Math.floor(Number(nums[0] / nums[1]))
    const left = Math.floor(Number(nums[0]%nums[1]))
    console.log(`${value} ${left}`)
}

inputNumber("50 4")