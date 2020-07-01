## Hugo Theme - SK3 (Skeleton 3)

Fully functional basic Hugo theme build on top of [hugo-theme-sk2](https://github.com/J-Siu/hugo-theme-sk2).

---

<!-- TOC -->

- [Demo Site](#demo-site)
- [Install](#install)
- [Testing](#testing)
- [Features](#features)
- [Layout](#layout)
  - [Site](#site)
  - [Color theme](#color-theme)
  - [Card/List](#cardlist)
  - [Per Page](#per-page)
  - [Google AdSense](#google-adsense)
  - [Twitter Cards / Opengraph](#twitter-cards--opengraph)
- [config.sk3.toml](#configsk3toml)
- [Front Matter](#front-matter)
- [TODO](#todo)
- [Repository](#repository)
- [Contributors](#contributors)
- [Change Log](#change-log)
- [License](#license)

<!-- /TOC -->

### Demo Site

SK3 demo site: https://sk3.jsiu.dev/

Example site content from [hugoBasicExample](https://github.com/gohugoio/hugoBasicExample)

### Install

In site directory:

- Using clone

  ```sh
  git clone https://github.com/J-Siu/hugo-theme-sk3 theme/sk3
  ```

- Using submodule

  ```sh
  git submodule add https://github.com/J-Siu/hugo-theme-sk3 theme/sk3
  ```

- Update submodule

  ```sh
  git submodule update --recursive --remote
  ```

### Testing

In `exampleSite`:

```sh
git clone https://github.com/J-Siu/hugo-theme-sk3 sk3
cd sk3

# Pull example site.
git submodule update --recursive --init

cd exampleSite
hugo server -D --bind :: \
--disableFastRender \
--theme sk3 \
--themesDir ../../ \
--config config.toml,../config.sk3.toml \
--verbose
```

### Features

- Blog
- Disqus
- Google Adsense
- Google Analytics
- Layout Customization
- Minimalist Design
- Responsive
- Social Links
- Social Share

### Layout

#### Site

- Main type

  Page `type` for generating homepage list. Hugo default `post`.

  ```toml
  [Params]
  maintype  = "post"
  ```

- Sub-title

  If defined, sub-title appear after site title in smaller font.

  ```toml
  [Params]
  subtitle  = "A Hugo Themes"
  ```

- Copyright start year

  Year is extracted from `startdate` and generate copyright in format "2012-(current year)".

  > Site `copyright` override this behavior.

  ```toml
  [Params]
  startdate = "2012-12-02"
  ```

- Page width (default: 1200px)

  ```toml
  [Params]
  pagewidth = "1200px"
  ```

  > Page width will automatically set to 100% on small screen.

- Social links

  Social link buttons appear at the bottom of card/list page:

  ```toml
  [Params.sociallink]
	facebook       = ""
	flickr         = ""
	instagram      = ""
	linkedin       = ""
	pinterest      = ""
	reddit         = ""
	tumblr         = ""
	twitter        = ""
	vimeo          = ""
	youtubechannel = ""
	youtubeuser    = ""
  ```

- Social share

  Social share buttons appear at the bottom of regular page:

  ```toml
  [Params.socialshare]
	facebook  = true
	instagram = true
	linkedin  = true
	pinterest = true
	reddit    = true
	telegram  = true
	twitter   = true
	vk        = true
  ````

#### Color theme

- Default dark theme

  Change color theme directly in `config.toml`. Following are defaults defined in CSS:

  ```toml
  [Params.color]
  bg     = "#181a1b"
  border = "white"
  link   = "#3d84ff"
  text   = "white"
  ```

  Following is a light theme

  ```toml
  [Params.color]
  bg     = "white"
  border = "black"
  link   = "#3d84ff"
  text   = "black"
  ```

#### Card/List

- Width (default:32% on computer screen)
  > 32% gives 3 columns, 24% gives 4 columns, etc. 100% basically turn into list mode.
- Date
- Summary

  ```toml
  [Params.card]
	date    = true
	summary = true
	width   = "32%"
  ```

#### Per Page

- Disable Disqus
- Disable Prev/Next
- Disable table of content

  To disable the above, in front matter:

  ```toml
  comment = false
  prevnext = false
  toc = false
  ```

#### Google AdSense

- Support Google AdSense auto:

  ```toml
  [Params]
  adsense_id = ""
  ```

#### Twitter Cards / Opengraph

Use following to enable Twitter Cards / Opengraph:

```toml
[Params]
opengraph   = true
twitercards = true
description = "site description"
title       = "site title"
```

### config.sk3.toml

```toml
baseURL = "https://sk3.jsiu.dev"
theme   = "sk3"
title   = "SK3"

enableGitInfo = true
DefaultContentLanguage = "en"
enableInlineShortcodes = true
languageCode           = "en"
paginate               = 15

#disqusShortname = ""
#googleAnalytics = ""

[Params]
#maintype  = "post"
#pagewidth = "1200px"
#startdate = "2012-12-02"
#subtitle  = "A Hugo Theme"

#adsense_id = ""

# Fill in following if using opengraph / twitter card
#opengraph   = true
#twitercards = true
#description = "A Hugo Theme"
#title       = "SK3"

  [Params.card]
  date    = true
  summary = true
  #width   = "32%"

  #[Params.color]
  #bg     = "#181a1b"
  #border = "white"
  #link   = "#3d84ff"
  #text   = "white"

  #[Params.sociallink]
  #facebook       = ""
  #flickr         = ""
  #instagram      = ""
  #linkedin       = ""
  #pinterest      = ""
  #reddit         = ""
  #tumblr         = ""
  #twitter        = ""
  #vimeo          = ""
  #youtubechannel = ""
  #youtubeuser    = ""

  [Params.socialshare]
  facebook  = true
  instagram = true
  linkedin  = true
  pinterest = true
  reddit    = true
  telegram  = true
  twitter   = true
  vk        = true

[markup]
  [markup.tableOfContents]
  endLevel   = 6
  startLevel = 1
```

### Front Matter

```toml
---
comment = false
prevnext = false
toc = false
---
```

### TODO

- Alternative homepage template
- Meta
  - Author
  - others?
- Include social buttons
- Submit to Hugo theme
  - images

### Repository

- [hugo-theme-sk3](https://github.com/J-Siu/hugo-theme-sk3)

### Contributors

- [John Sing Dao Siu](https://github.com/J-Siu)

### Change Log

- 0.8.5
  - Initial Commit
- 0.8.6
  - Share button in menu
  - Fixed
    - Adsense ID
    - CSS color conflict with syntax highlight
    - Display issue with Disqus
    - Display issue with prev/next
    - Unwanted title on homepage
- 0.8.7
  - CSS clean up
  - Complete README.md
  - Default page width 1200px
  - Default card width 32%
  - Fixed menu bar top and left "leaking"
- 0.8.8
  - CSS clean up
  - Improve header
  - Improve README.md
  - Fix margin/padding

### License

The MIT License (MIT)

Copyright (c) 2020 John Siu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.