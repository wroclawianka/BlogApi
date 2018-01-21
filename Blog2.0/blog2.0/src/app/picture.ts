export class Picture{
    Url: string;
    Title: string;
    IsMain : boolean;

    constructor(url : string, title : string, isMain : boolean){
      this.Url = url;
      this.Title = title;
      this.IsMain = isMain;
    }
  }