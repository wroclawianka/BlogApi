import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
    { 
      id: 1, 
      Title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      Text: `Quisque commodo tempus tortor, ut aliquet tellus dictum at. Nunc risus lectus, aliquet 
        a pulvinar sit amet, pellentesque eget ipsum. Nulla pretium placerat justo, id condimentum nulla
       congue egestas. Pellentesque dictum dapibus felis id efficitur. Mauris bibendum ac dui vel 
       egestas. Vivamus in turpis odio. Praesent vel sapien eget leo hendrerit ultrices quis quis velit.`
    },
    { 
      id: 2, 
      Title: "Ut quis felis vestibulum, mollis tellus vitae, ultrices massa.", 
      Text: `Vestibulum vitae porta nulla. Mauris lacinia dolor id libero scelerisque auctor. Praesent ut
        leo ut velit interdum dapibus. Nam a pellentesque sapien. Fusce sit amet erat nec mauris aliquet tempus
        ut et tellus. Sed vel nunc sapien. Donec ornare, diam at gravida consequat, mi quam posuere metus, ac 
        auctor libero tortor non nulla. In ornare sit amet purus rutrum accumsan.`
  },
    ];
    return {posts};
  }
}