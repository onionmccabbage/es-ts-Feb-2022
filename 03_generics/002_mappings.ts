namespace Options_Verbose {
    // this is terribly verbose
    interface Options {
        material: string;
        backlight: boolean;
    }

    // Manually created readonly interface
    interface ManualReadonlyOptions {
        readonly material: string;
        readonly backlight: boolean;
    }

    // Manually created optional interface
    interface ManualOptionalOptions {
        material?: string;
        backlight?: boolean;
    }

    // Manually created nullable interface
    interface ManualNullableOptions {
        material: string | null;
        backlight: boolean | null;
    }
}

namespace Options_Terse {
    interface Options {
        material: string;
        backlight: boolean;
    }
    // use mapped generic types
    type ReadOnly<T> = { readonly [k in keyof T]: T[k] }
    type Optional<T> = { [k in keyof T]?: T[k] }
    type Nullable<T> = { [k in keyof T]: T[k] | null }
    // create some samples
    type ReadOnlyOptions = ReadOnly<Options>
    type OptionalOptions = Optional<Options>
    type NullableOptions = Nullable<Options>
    
    const brick:ReadOnlyOptions = {
        backlight:true,
        material:'brick'
    }
    // brick.backlight= false // nope - readonly
    const silk: OptionalOptions = {
        backlight:true
    }

    const gauze:NullableOptions | Error = {
        backlight:null,
        material:null
    }

    gauze.material = 'chiffon'


}
