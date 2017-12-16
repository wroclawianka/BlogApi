import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
    { id: 1, Title: "Title1", Text: "Text1"},
    { id: 2, Title: "Title2", Text: "Text2"}
    ];
    return {posts};
  }
}