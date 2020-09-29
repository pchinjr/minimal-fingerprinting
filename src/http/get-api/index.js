// learn more about HTTP functions here: https://arc.codes/primitives/http
let arc = require('@architect/functions')

exports.handler = async function http (req) {

let path = arc.static('index.js', {stagePath: false})
console.log(path)

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'application/json'
    },
    body: JSON.stringify(`{"jsPath":"${path}"}`)
  }
}