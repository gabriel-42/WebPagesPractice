function generateQuote() {
  let quotes = {
    ' - Nelson Mandela': `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    ' - Steve Jobs': `"Your time is limited, so don't waste it living someone else's life."`,
    ' - Oprah Winfrey': `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`
  }
  let authors = Object.keys(quotes)
  let author = authors[Math.floor(Math.random() * authors.length)]
  let quote = quotes[author]
  document.getElementById('theQuote').innerHTML = quote
  document.getElementById('author').innerHTML = author
}
