fetch("http://127.0.0.1:3000/article.md")
  .then(resp => {
    if (!resp.ok) {
      throw new Error("Response was not ok")
    }
    return resp.text()
  })
  .then(text => {
    get_article().innerHTML = ""
    console.log(text)
    get_article().innerHTML = render(text)
  })

const get_article = () => {
  return document.getElementsByTagName("article")[0]
}

const render = (md) => {
  return marked.parse(md)
}