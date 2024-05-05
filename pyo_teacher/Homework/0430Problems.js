// Boolean ------------------------

// 이 템플릿을 복사해서 아래 함수들을 구현해보세요

/**
 * 기사가 자고있는 경우, Fask attack이 가능합니다.
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Fask attack 가능 여부 반환
 */
export function canExecuteFastAttack(knightIsAwake) {
    throw new Error("이 라인을 지우고 함수를 구현하세요");
}

/**
 * 모든 사람이 자고있는 경우, Spy 액션이 가능합니다.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Spy 액션 가능 여부 반환
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    throw new Error("이 라인을 지우고 함수를 구현하세요");
}

/**
 * 포로가 깨어있고, 궁수가 자고있는 경우, Signal prisoner 행동이 가능합니다.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Signal prisoner 행동 가능 여부
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    throw new Error("이 라인을 지우고 함수를 구현하세요");
}

//  -----------------------------------------

// 함수
// 이 코드를 복사하고 위 과제를 구현하세요.

/**
 * "라자냐가 요리되기 위해 오븐에 있어야하는 시간(분)"을 상수로 선언하세요.
 */
const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * 라자냐 한 층을 준비하기 위해 걸리는 시간
 */
const PREPARATION_MINUTES_PER_LAYER = 2;

/**
 * 라자냐가 오븐에 있어야하는 남은 시간을 계산하는 함수를 구현하세요.
 *
 * @param {number} actualMinutesInOven: 오븐에 실제로 라자냐가 있던 시간
 * @returns {number} 남은 시간
 */
function remainingMinutesInOven(actualMinutesInOven) {
    throw new Error("이 라인을 지우고 함수를 구현하세요");
}

/**
 * 층 수에 따른 라자냐의 준비 시간을 계산하는 함수를 구현하세요.
 *
 * @param {number} numberOfLayers: 준비할 라자냐 층 수
 * @returns {number} 전체 준비 시간
 */
function preparationTimeInMinutes(numberOfLayers) {
    throw new Error("이 라인을 지우고 함수를 구현하세요");
}

/**
 * 전체 작업 시간을 계산하는 함수를 구현하세요.
 * 라자냐를 준비하는데 걸린 시간과 라자냐가 오븐에 들어가있는 실제 시간의 합입니다.
 *
 * @param {number} numberOfLayers: 준비할 라자냐 층 수
 * @param {number} actualMinutesInOven: 오븐에 실제로 라자냐가 있던 시간
 * @returns {number} 전체 작업 시간
 */
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    throw new Error("이 라인을 지우고 함수를 구현하세요");
}
