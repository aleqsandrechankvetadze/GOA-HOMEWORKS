// ისევ მაგალითი
export async function deleteSong(id) {
  const res = await fetch(`https://example.com/api/music/${id}`, {
    method: "DELETE"
  });
  return res.status === 200;
}
