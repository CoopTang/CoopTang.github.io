import $ from 'jquery'



$(document).ready(() => {
  // have fun!

  async function getTopWord() {
    const url = new URL("https://wordwatch-api.herokuapp.com/api/v1/top_word")
    return await fetch(url.href)
      .then(data => { return data.json(); })
      .catch(reason => { console.log(reason.message) });
  }

  function postWord(word) {
    const body = { 
      "word": {
        "value": word
      }
    }
    const url = new URL("https://wordwatch-api.herokuapp.com/api/v1/words")
    fetch(url.href, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(console.log(json)));
  }

  async function updateWordBox() {
    let response = await getTopWord()
    let word = Object.keys(response.word);
    let value = Object.values(response.word);

    document.getElementById("word_count").innerHTML = `${word}: ${value}`
  }

  setInterval(updateWordBox, 1000)

  document.getElementById('btn').addEventListener("click", function()
  {
    let text = document.getElementById('text-box').value
    let words = text.split(" ")
    words.forEach(word => {
      postWord(word)
    });
    alert("Your text has been submitted!")
  })
})
