// 크리스마스 트리를 만들어보세요 
// 입력 : 5

let linecount = 5;
let star = '';

for (let i = 0; i < linecount; i++){ 
  for(let j = linecount ; j > i ; j--) {
    star += ' ';
  }
  for ( k = 0 ; k < (2*i) +1 ; k++) {
    star += "*";
  }
  star += '\n';
}
console.log(star);