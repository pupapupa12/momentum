// <Boolean>

// 기사가 자고있는 경우, Fast Attack 가능
function fastAttack(knightIsAwake) {
    if (knightIsAwake == false) {
        return false; //fastAttack 불가
    } else {
        return true; //fastAttack 가능
    }
}

console.log(fastAttack(false));

// 모든 사람이 자고있는 경우, Spy 액션 불가능
// 한 명이라도 깨어있는 경우, Spy 액션 가능

const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if (
        knightIsAwake == true &&
        archerIsAwake == true &&
        prisonerIsAwake == true
    ) {
        return true;
    } else if (
        knightIsAwake == true ||
        archerIsAwake == true ||
        prisonerIsAwake == false
    ) {
        return true;
    } else if (
        knightIsAwake == true ||
        archerIsAwake == false ||
        prisonerIsAwake == false
    ) {
        return true;
    } else if (
        knightIsAwake == false ||
        archerIsAwake == true ||
        prisonerIsAwake == false
    ) {
        return true;
    } else if (
        knightIsAwake == false ||
        archerIsAwake == true ||
        prisonerIsAwake == true
    ) {
        return true;
    } else if (
        knightIsAwake == false ||
        archerIsAwake == false ||
        prisonerIsAwake == true
    ) {
        return true;
    } else if (
        knightIsAwake == false &&
        archerIsAwake == false &&
        prisonerIsAwake == false
    ) {
        return false;
    }
}

console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));

// 포로가 깨어있고, 궁수가 자고있는 경우, Signal prisoner 행동가능여부

const archerIsAwake2 = false;
const prisonerIsAwake2 = true;

function canSignalPrisoner(archerIsAwake2, prisonerIsAwake2) {
    if (archerIsAwake2 != true && prisonerIsAwake2 == true) {
        return true;
    } else {
        return false;
    }
}

console.log(canSignalPrisoner(archerIsAwake2, prisonerIsAwake2));
