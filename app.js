// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if(req.url==='/') {
//         res.end('Welcome to our home page')
//     } else if(req.url==='/about') {
//         res.end('This is our short history')
//     } else {
//         res.end(
//             `
//             <h2>Oops page not found</h2>
//             <p>We can't find the page you are looking for</p>
//             `
//         )
//     }
// })

// server.listen(5000);
const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);