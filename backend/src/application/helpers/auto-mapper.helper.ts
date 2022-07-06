
export class AutoMapperHelper {
    static map<T1, T2>(source: any, typeBase: { new(): T1}, typeDestination: { new(): T2 }) {
        const object = new typeDestination();
        const base = new typeBase() as any;
        for (const prop in base) {
            object[prop] = source[prop];
        }
        return object;
    }
    static mapArray<T1,T2>(source: any[],typeBase:{new(): T1}, typeDestination: {new(): T2}){
        const array = new Array<T2>();
        const base = new typeBase() as any;
        for(const obj of source){
            let destination = new typeDestination();
            for(const prop in base){
                destination[prop] = obj[prop];
            }
            array.push(destination);
        }
        return array;
    }
}