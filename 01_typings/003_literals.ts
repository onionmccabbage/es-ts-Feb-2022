// literal types
{
    // we need our own types
    type Kingdom = 'Bacteria' | 'Protozoa' | 'chromista'| 'Plantae' | 'Fungi' | 'Animalia'

    // type-safety
    let k:Kingdom
    k = 'Bacteria' // or any valid type
    // k = 'Protista' // nope

    // we can use a hybrid union/literal type
    type arbitrary = 'literally this' | 10 | false
    let r:arbitrary
    r = 'literally this'
    r = false

    // tuple (a ts thing)
    let poem: [number, boolean, string] // a tuple allowing only these types (in this order)
    poem = [1, true, 'love']
    // ts is especially handy for auto-complete
    console.log(poem[2].charAt(0))
}