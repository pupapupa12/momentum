// () : 소괄호
// {} : 중괄호 => object.
// [] : 대괄호 => list(array)

const player = {
    name: "nico",
    points: 10,
    fat: true,
  };
  // player라는 변수에
  // 중괄호로 묶인 어떠한 데이터가 들어갔음.
  // 여기서 "중괄호로 묶인 어떠한 데이터"는 어떤 데이터 타입일까요? object 정답
  
  // player라는 변수는
  // object라는 타입을 가진 데이터를 담고 있다? O
  
  // integer, string, boolean, object, array, null => 타입
  
  const name = "sungwon";
  // name은 변수이다. (variables) 변수는 그릇이다.
  // 이 변수는 string(문자열) 데이터 타입을 가진 데이터를 담고 있어요.
  
  const cost = 5;
  // cost은 변수이다. 변수는 그릇이다.
  // 이 변수는 number(정수) 데이터 타입을 가진 데이터를 담고 있어요.
  
  console.log(player.name);
  console.log(player["name"]);
  // object는 key와 value로 이루어져 있습니다. property
  
  // player라는 변수에 담긴 데이터의 property는 무엇이 있나요? name, points, fat
  // player라는 변수에 담긴 데이터의 key는 무엇이 있나요? name, points, fat
  // player라는 변수에 담긴 데이터의 타입은? object
  // player라는 변수에 담긴 데이터의 value는 무엇이 있나요? "nico", 10, true
  // ["nico", 10, true] 각각의 데이터 타입을 말하시오. string, integer, boolean
  // ["nico", 10, true] 이것의 데이터 타입은? Array
  // const a = {cost: 10}; 이것의 데이터 타입은? object
  console.log(a.cost);
  console.log(a["cost"]);
  
  // student 라는 이름을 가진, 변할 수 있는 변수를 선언하라.
  // 그 변수는 성원이라는 데이터를 가진다.
  var student = "성원";
  
  // studentList 라는 이름을 가진, 변할 수 없는 변수를 선언하라.
  // 그 변수는 승표, 성원 이라는 데이터를 가진다.
  const studentList1 = "승표, 성원"; // string 타입의 데이터를 가지고 있음
  const studentList2 = ["승표", "성원"]; // array 타입의 데이터를 가지고 있고, 이 array는 string 타입의 데이터를 가지고 있음.
  
  // 1~10 까지의 수 중 짝수만을 가지고 있는 변수를 선언하라.
  // 프로그래밍에서 가장 중요하고 어려운 것 => 네이밍. 이름짓기
  const oddList = [2, 4, 6, 8, 10];
  oddList.push(12); // [2, 4, 6, 8, 10, 12]
  
  // 배열이 뭘까요? array. 값들의 모음.
  // Array의 형태는? 대괄호로 표현되고, 내부의 값들은 ","로 구분된다.
  // 배열의 index란? 배열에서 값들의 위치. 순서.
  // index는 어디부터 시작하죠? 0번째부터 존재합니다.
  // oddList[4] => 10
  
  // const를 바꾸는 것이 아닌 오브젝트 안의 속성을 변경하는 것
  console.log(player);
  player.fat = false;
  player.lastName = "potato";
  player.points = player.points + 15;
  console.log(player);
  