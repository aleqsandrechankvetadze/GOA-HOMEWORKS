// ლინკი ვერ ვნახე მუსიკების მოსასმენის და მაგალიტი ცავსვი
export async function fetchMusicList() {
  const res = await fetch("https://example.com/api/music");
  const musicList = await res.json();
  return musicList;
}
