import { Picture }  from './picture';

export class Post {
    Id: number;
    Title: string;
    Text: string;
    Pictures: Picture[];
    mainPicture : Picture;
  }