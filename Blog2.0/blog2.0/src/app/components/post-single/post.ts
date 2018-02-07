import { Picture }  from './picture';

export class Post {
    id: number;
    title: string;
    text: string;
    pictures: Picture[];
    mainPicture : Picture;
  }