const http = require('http');

http.createServer((req, res) => {
  if (req.url === '/api/books') {
    let list = [ { book: 'book2'} ];
    res.end(`getBook(${JSON.stringify(list)})`);
  }
})
.listen(3002, () => {
  console.log('server is running http://localhost:3002');
})
