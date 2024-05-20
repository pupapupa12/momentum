// < 함수 >

// "라자냐가 요리되기 위해 오븐에 있어야하는 시간(분)"
const EXPECTED_MINUTES_IN_OVEN = 40;

// 라자냐 한 층을 준비하기 위해 걸리는 시간
const PREPARATION_MINUTES_PER_LAYER = 2;

// 라자냐가 오븐에 있어야하는 남은 시간
function remainingMinutesInOven(actualMinutesInOven) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

// 총 수에 따른 라자냐의 준비시간
function preparationTimeInMinutes(numberOfLayers) {
    return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

// 전체 작업시간 (라자냐를 준비하는 데 걸리는 시간 + 오븐에 들어가있는 시간)

function totalTimeInMinutes(x, actualMinutesInOven, y, t) {
    const prepareTime = preparationTimeInMinutes(x);
    const result = prepareTime + 1;

    return result + actualMinutesInOven;
}

const a = 5;
const b = 30;
console.log(totalTimeInMinutes(a));
