{
    // a very common convention is to use T for a generic type
    function firstElement<T>(arr:T[]):T { // use mapping rather than <any>
        return arr[0]
    }

    function firstElement2(arr:any[]):any { // no way to ensure in-type matches out-type
        return arr[0]
    }

    // some collections
    const s = firstElement(['a', 'b', 'c'])

    const n = firstElement([1,2,3])

    const u = firstElement([]) // undefined

    console.log(`${typeof(s)} ${s} - ${typeof(n)} ${n} - ${typeof(u)} ${u}`)

}

