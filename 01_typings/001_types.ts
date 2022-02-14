// enums
{
    enum BoxSize {
        Small, // implicitly this is index 0
        Medium
    }
    // open ended...
    enum BoxSize {
        Large = 2,
        XLarge,
        XXLarge
    }

    const boxType = BoxSize.XLarge
    const boxtypeName = BoxSize[boxType]

    // bit flags
    const enum CategoryFlags {
        None  = 0, // this is the default anyway
        Music = 1,
        News  = 2,
        Drama = 4,
        Comedy = 8 // powers of two
    }//                             union is '|'
    const musicalComedy = CategoryFlags.Music | CategoryFlags.Comedy

    // now elsewhere we would check types using intersect (&)
    const hasMusic  = (musicalComedy & CategoryFlags.Music) // true
    const hasNews   = (musicalComedy & CategoryFlags.News) // false
    const hasDrama  = (musicalComedy & CategoryFlags.Drama) // false
    const hasComedy = (musicalComedy & CategoryFlags.Comedy) // true

    // we can use increment and decrement...
    // we already have 'boxSize'...
    let size = BoxSize.Small // mutable
    ++size // ..
    ++size // ..
    ++size // ..
    ++size // ..
    ++size // beyond the enum...

    console.log(BoxSize[size]) // undefined - beyond start or end


}