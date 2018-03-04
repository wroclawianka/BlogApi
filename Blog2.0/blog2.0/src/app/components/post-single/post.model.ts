import { Picture }  from './picture.model';

export class Post {
    id: number;
    title: string;
    text: string;
    pictures: Picture[];
    mainPicture : Picture;
  }