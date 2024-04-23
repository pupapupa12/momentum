const age = parseInt(prompt("How old are you?"));
// console.log(isNaN(age));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
  // 숫자면 함수 실행 X
  // 숫자가 아니면 함수 실행 O
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  // &&(and) 앞뒤로 있는 두개의 조건에 "모두" 충족해야함
  // ||(or) 앞뒤로 있는 두개의 조건 중 "하나만" 충족해도됨
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("wow you are wise"); // 여기에는 적용O
} else if (age > 80) {
  console.log("You can whatever you want.");
} else if (age === 100) {
  console.log("wow you are wise");
} // 위 조건에서 동일 사항이 걸리기 때문에 하단 조건 실행 X (상위로 올려줘야함)

if ((a && b) || (c && d)) {
  // (c && d)부터 계산됨
}

if ((a && b) || (c && d) || x || W) {
}
