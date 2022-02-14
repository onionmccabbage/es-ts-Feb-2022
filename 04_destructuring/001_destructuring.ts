{
    // unpacking an array
    const values= [1,3,6,10,15,21]
    // ... is called an elipsis
    const [first, second,, fourth, ...rest] = values

    console.log(first, second, fourth, rest)
}
{
    // object destructuring
    const program = { name:'Play School', presenter:'Floella', started:1976, ended:1984 }

    // make sure the properties match
    const {name:n, presenter:p} = program
    console.log(`${n} presented by ${p}`)
    
    // auto-unpacking - uses the existing names of properties
    const {name, presenter, ...rest} = program
    console.log(`${name} presented by ${presenter} dates: ${rest['started']} to ${rest['ended']}`)
}
{
    // tuple destructuring
    function getMission(): [string, string, string] {
        return ['inform', 'educate', 'entertain']
    }
    const [inf, edu, ent] = getMission()
    console.log(`${edu}`)
}