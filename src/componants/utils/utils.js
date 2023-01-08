const evealuate = (cell) => {
    if (cell[0] !== "" && cell[0] === cell[1] && cell[1] === cell[2]) {
        return cell[0];
    }
    if (cell[3] !== "" && cell[3] === cell[4] && cell[4] === cell[5]) {
        return cell[3];
    }
    if (cell[6] !== "" && cell[6] === cell[7] && cell[7] === cell[8]) {
        return cell[6];
    }

    if (cell[0] !== "" && cell[0] === cell[3] && cell[3] === cell[6]) {
        return cell[0];
    }
    if (cell[1] !== "" && cell[1] === cell[4] && cell[4] === cell[7]) {
        return cell[1];
    }
    if (cell[2] !== "" && cell[2] === cell[5] && cell[5] === cell[8]) {
        return cell[2];
    }

    if (cell[0] !== "" && cell[0] === cell[4] && cell[4] === cell[8]) {
        return cell[0];
    }
    if (cell[2] !== "" && cell[2] === cell[4] && cell[4] === cell[6]) {
        return cell[2];
    }

    for (let index = 0; index < cell.length; index++) {
        if (cell[index] === "") {
            return undefined;
        }
    }

    return "drow";
}

export default evealuate;