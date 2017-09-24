/**
 * Created by yarivkatz on 18/09/2017.
 */

export class Student {
    public id : number = -1;
    public name : string = '';
    public age : number = 0;

    constructor(json : any) {
        this.id = json.id || -1;
        this.name = json.name || "";
        this.age = json.age || 0;
    }
}