// ისევ მაგალითი
export async function updateSong(id, updatedData) {
  const res = await fetch(`https://example.com/api/music/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedData)
  });
  return await res.json();
}
