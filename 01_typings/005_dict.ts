// dictionary type
{
    interface Cephalopod {
        hasInk:boolean;
        arms:number;
        tentacles:number
    }

    interface CephalopodDictionary {
        [species:string]:Cephalopod
    }

    const dict:CephalopodDictionary = {}
    
    dict['octopus vulgaris'] = {hasInk:true, arms:8, tentacles:0}
    dict['loligo vulgaris']  = {hasInk:true, arms:8, tentacles:2}

    // use the dictionary
    const commonOct = dict['octopus vulgaris']
    console.log(`Common Octopus has ${commonOct.tentacles} tentacles and ${commonOct.arms} arms`)

    // we can remove items fro mthe dictionary
    delete dict['octopus vulgaris']
}