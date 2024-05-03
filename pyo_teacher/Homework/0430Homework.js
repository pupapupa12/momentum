const fastAttack = (knightIsAwake) => {
    if (knightIsAwake == true) {
        return "canExecuteFastAttack";
    } else {
        return "cannotExecuteFastAttack";
    }
};

console.log(fastAttack());
