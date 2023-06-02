// 놀이기구는 키가 150cm이상만 탈 수 있습니다.
// 키가 150cm 이상이면 YES, 이하이면 NO를 출력하시오

function heightCheck(height) {
    if(Number(height) >= 150) {
        return console.log("YES");
    } else {
        return console.log("NO");
    }
    
}

heightCheck(180)