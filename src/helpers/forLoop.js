


export const forLoop = (first, second) => {

    let arr = second;
    first.forEach(f => {
        arr = arr.filter(s => s !== f)
    })
    return arr;
}

