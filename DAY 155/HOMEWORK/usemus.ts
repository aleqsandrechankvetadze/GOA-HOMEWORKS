import { fetchMusicList } from "./music.ts";

fetchMusicList().then(data => {
  data.forEach(song => {
    console.log(song.title);
  });
});
