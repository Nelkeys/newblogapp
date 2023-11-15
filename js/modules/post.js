const apiLink = "http://127.0.0.1:3000";
const postRoute = "post";

export async function getPost(blob) {
  const response = await fetch(`${apiLink}/${postRoute}/blob/${blob}`);
  const data = await response.json();

  return data.Error ? false : data
}