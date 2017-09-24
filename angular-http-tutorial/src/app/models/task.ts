/**
 * model for task
 */

export class Task{
  public id : number;
  public title : string;
  public description : string;
  public group : string;
  public when : Date;

  constructor(json : any){
    this.id = json['id'] || -1;
    this.title = json['title'] || '';
    this.description = json['description'] || '';
    this.group = json['group'] || '';
    this.when = new Date(json['when']) || new Date();
  }
}
