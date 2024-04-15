const player = {
    name : "nico",
    points : 10,
    fat : true,
};

console.log(player.name);
console.log(player["name"]);

// const를 바꾸는 것이 아닌 오브젝트 안의 무언가를 변경하는 것
console.log(player);
player.fat = false;
player.lastName = "potato";
player.points = player.points + 15;
console.log(player);