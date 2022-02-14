// interfaces
{
    interface Monument {
        name: string
        height: number
    }
    // we can declare an array of monuments
    const monuments: Monument[] = [] // empty array is fine for init
    monuments.push({ name: 'Statue of Liberty', height: 46 })
    monuments.push({ name: 'Peter The Great', height: 96 })
    monuments.push({ name: 'angel of the North', height: 20 })

    // a utility for comparing heights
    const cpHeights = (a: Monument, b: Monument) => { // can't implicitly type, so we help explicitly
        if (a.height > b.height) {
            return -1
        }
        if (a.height < b.height) {
            return 1
        }
        return 0
    }
    // ES6 arrays have a sort' feature
    const byHeight = monuments.sort(cpHeights)
    console.log(byHeight)
    console.log(monuments[0]); // sort mutates the original
}
