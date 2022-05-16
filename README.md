# 11ty blog njk Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6f542b0-dce3-4631-8699-ada833a5f7ff/deploy-status)](https://app.netlify.com/sites/11ty-blog-njk-starter/deploys)

View the live demo [here](https://11ty-blog-njk-starter.netlify.app), hosted on Netlify

![homepage](blog-v2.png)
![darkmode](blog-dark.png)

## Aims
A blog that still runs without javascript. Hence, no bundlers.

This is forked from [Rong Ying's starter](https://github.com/kohrongying/11ty-blog-starter) and converted to use Nunjucks instead of Liquid.


## Features
- Static Site Gen - Eleventy

- Tailwind CSS v2.0 / Tailwind Typography / Dark Mode

- Create excerpts using the `<!-- excerpt -->`

- Custom ReadTime filter

- 404 page

+ Tags page to view posts related to tag
  - Use of a `tagList` collection defined in `.eleventy.js`
  - `/tags` - show all available tags (excluding all and posts) as buttons (`tags.md`)
  - `/tags/tag-name` - shows all posts related to that tag (`tagList.md`)

+ Sitemap and Robots.txt 
  - Change site url in `_data/site.json`

+ Shortcode to handle images
  - Add image under `src/assets/img/posts` and use the asset_img short code
  - `{% asset_img 'filename' 'alt_text' %}` eg. `{% asset_img 'mailbox.jpg' 'picture of a mailbox' %}`
  - You can provide an optional third argument if your image isn't inside `src/assets/img/posts`
  - eg. `{% asset_img 'mailbox.jpg' 'picture of a mailbox' '/images/' ` 

- Draft posts using the `published` frontmatter

+ Posts pagination in `index.html` 
  - change the `size` frontmatter variable
- ESLint

+ Bash script to create new post (based on YYYY and MM)
```bash
$ ./create new blog post
Created new post at src/posts/2021/01/new-blog-post.md
```


## Running locally

Create your blogpost under `src/posts`. I like to have mine sorted by YY/MM.

Navigate to localhost:8080 after starting the server.
```
npm start
```


## Deployment
[<img src="https://www.netlify.com/img/deploy/button.svg" />](
https://app.netlify.com/start/deploy?repository=https://github.com/httpsterio/11ty-blog-njk-starter)



On Netlify / Surge / Firebase hosting / etc hosting providers

Build Command: `npm run build`

Output folder: `_site`

<!--
## Future Improvemeents

- [ ] Minification of assets
- [ ] Make next/prev posts
-->