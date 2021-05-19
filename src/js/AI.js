const randomPick = (availableIndexes) => {
    return availableIndexes[Math.floor(Math.random()* availableIndexes.length)];
}
const AI = (state) => {
    const indexes = Array.from(Array(state.length).keys());
    const availableIndexes = indexes.filter((index) => state[index] === null);
    return randomPick(availableIndexes);
}

export default AI