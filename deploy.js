const ghpages = require('gh-pages')
const path = require('path')

ghpages.publish(path.join(__dirname, 'build'), err => {
  if (err) {
    console.log(err)
  }
  console.log('Done!')
})
