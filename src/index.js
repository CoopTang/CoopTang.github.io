import $ from 'jquery'



$(document).ready(() => {
  // have fun!
  const POST_WORDS_PATH = "api/v1/words"

  async function getTopWord() {
    const url = new URL("https://wordwatch-api.herokuapp.com/api/v1/top_word")
    return await fetch(url.href)
      .then(data => { return data.json(); })
      .catch(reason => { console.log(reason.message) });
  }


})
