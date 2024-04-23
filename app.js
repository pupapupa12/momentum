const age = parseInt(prompt("How old are you?"));
// console.log(isNaN(age));

if (isNaN(age)) {
  console.log("Please write a number");
  // 숫자면 함수 실행 X
  // 숫자가 아니면 함수 실행 O
} else {
  console.log("Thank you for writing your age.");
}
