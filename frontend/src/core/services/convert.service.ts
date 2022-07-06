
export class ConvertService {
    public static StringToNumber(object: any) {
        for (let prop in object) {
            let teste = isNaN(object[prop]) as any;
            if (!teste) object[prop] = Number(object[prop]);       
        }
    }
}