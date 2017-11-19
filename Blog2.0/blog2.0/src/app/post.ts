export class Post {
    id: number;
    title: string;
    text: string;

    constructor(id, title, text){
      this.id = id;
      this.title = title;
      this.text = text;
    }
  }