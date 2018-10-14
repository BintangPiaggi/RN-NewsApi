const url =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=1f1b297b8804417596dba4036c321154";
  

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}