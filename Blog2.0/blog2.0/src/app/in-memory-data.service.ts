import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const posts = [
            { id: 1, title: "Title of my first post", text: "Example of the text" },
            { id: 2, title: "Prague - the best place to live", text: "Something to say about it" },
            { id: 3, title: "Beer - where in Prague?", text: "Lorem ipsum, ipsum lorem" }
        ];
        return {posts}
    }
}