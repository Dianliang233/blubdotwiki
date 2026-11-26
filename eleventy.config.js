const fs = require('node:fs')
const path = require('node:path')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: '.' })

  eleventyConfig.on('eleventy.before', () => {
    fs.rmSync(path.join(__dirname, 'dist'), { recursive: true, force: true })
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
