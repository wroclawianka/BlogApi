export class Picture{
    Url: string;
    Title: string;
    IsMain : boolean;

    constructor(url : string, title : string){
      this.Url = url;
      this.Title = title;
    }
  }