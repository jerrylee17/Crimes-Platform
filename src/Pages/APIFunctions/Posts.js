import axios from 'axios';


export async function getPosts(category) {
  let pageContent = {};
  await axios
    // eslint-disable-next-line
    .get(`api/postCollection?whereFieldPath=category&whereValue=${category}&opStr='='`)
    .then (res => {
      pageContent.name = category;
      pageContent.content = res.data;
    })
    .catch(() => {
      pageContent = [];
    });
  return pageContent;
}