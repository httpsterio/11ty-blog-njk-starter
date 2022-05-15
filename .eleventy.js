const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')

module.exports = function(eleventyConfig) {
  


  // To create excerpts
  eleventyConfig.setFrontMatterParsingOptions({
  })

  // To create a filter to determine duration of post

  // Enable us to iterate over all the tags, excluding posts and all


  // // asset_img shortcode
  // eleventyConfig.addLiquidShortcode('asset_img', (filename, alt) => {
  //   return `<img class="my-4" src="/assets/img/posts/${filename}" alt="${alt}" />`
  // })


  return {
    dir: {
      input: 'src'
    }
  }
}
