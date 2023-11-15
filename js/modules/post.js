const apiLink = "http://127.0.0.1:3000";
const postRoute = "post";

export async function getPost(blob) {
  try {
    const response = await fetch(`${apiLink}/${postRoute}/blob/${blob}`);
    const data = await response.json();
    return data.Error ? false : data
  } catch (error) {
    console.log(error);
  }

}

export async function getFeaturedPost() {
  try {
    const response = await fetch(`${apiLink}/${postRoute}/featured`);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error);
  }

}