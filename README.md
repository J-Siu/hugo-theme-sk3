## Hugo Theme - SK3 (Skeleton 3)

Full feature Hugo theme build on top of [hugo-theme-sk2](//github.com/J-Siu/hugo-theme-sk2) with Google AdSense support.

---

<!-- TOC -->

- [SK Themes](#sk-themes)
- [Sites](#sites)
- [Install](#install)
- [Testing](#testing)
- [Features](#features)
- [Layout](#layout)
  - [Markdown Style](#markdown-style)
  - [Site](#site)
    - [Main Section Type](#main-section-type)
    - [Table of ContentToc Open By Default](#table-of-contenttoc-open-by-default)
    - [Favicon](#favicon)
    - [Sub-Title](#sub-title)
    - [Copyright Start Year](#copyright-start-year)
    - [Page Width](#page-width)
    - [List Last Modify Date](#list-last-modify-date)
    - [Custom CSS](#custom-css)
    - [Custom Javascript](#custom-javascript)
    - [User-declared Canonical](#user-declared-canonical)
    - [SVG External](#svg-external)
  - [Social Links](#social-links)
  - [Social Share](#social-share)
  - [Color Theme](#color-theme)
  - [Card/List](#cardlist)
  - [Google AdSense](#google-adsense)
  - [Twitter Cards / Opengraph](#twitter-cards--opengraph)
  - [Page Info Style](#page-info-style)
  - [Per Page](#per-page)
- [Sample Config](#sample-config)
- [Font Awesome](#font-awesome)
- [Thank You](#thank-you)
- [Contributors](#contributors)
- [Change Log](#change-log)
- [License](#license)

<!-- /TOC -->

### SK Themes

Theme|GitHub|Hugo|Demo|Description
---|---|---|---|---
SK1|[hugo-theme-sk1](//github.com/J-Siu/hugo-theme-sk1)|[SK1](//themes.gohugo.io/hugo-theme-sk1/)|[sk1.jsiu.dev](//sk1.jsiu.dev/)|Fully functional basic Hugo theme with no css, no javascript.
SK2|[hugo-theme-sk2](//github.com/J-Siu/hugo-theme-sk2)|[SK2](//themes.gohugo.io/hugo-theme-sk2/)|[sk2.jsiu.dev](//sk2.jsiu.dev/)|Fully functional basic Hugo theme with minimum css.
SK3|[hugo-theme-sk3](//github.com/J-Siu/hugo-theme-sk3)|[SK3](//themes.gohugo.io/hugo-theme-sk3/)|[sk3.jsiu.dev](//sk3.jsiu.dev/)|Full feature Hugo theme with Google AdSense support.

### Sites

John Siu Blog: [johnsiu.com](//johnsiu.com/)

SK3 demo site: [sk3.jsiu.dev](//sk3.jsiu.dev/) with content from [hugoBasicExample](//github.com/gohugoio/hugoBasicExample)

### Install

In site directory:

- Using clone

  ```sh
  git clone https://github.com/J-Siu/hugo-theme-sk3 themes/sk3
  ```

- Using submodule

  ```sh
  git submodule add https://github.com/J-Siu/hugo-theme-sk3 themes/sk3
  ```

- Update submodule

  ```sh
  git submodule update --recursive --remote
  ```

### Testing

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
--config config.toml,../config.demo.toml \
--verbose
```

### Features

- [x] Blog
- [x] Custom CSS
- [x] Custom Javascript
- [x] Customizable
- [x] Disqus
- [x] Google Adsense
- [x] Google Analytics
- [x] Minimalist Design
- [x] Responsive
- [x] Social Links
- [x] Social Share

### Layout

#### Markdown Style

Headline in markdown should start at level 3 (###), as site title is H1 and page title is H2.

#### Site

##### Main Section Type

For generating homepage list. Hugo default to section with most entries.

```toml
[Params]
mainSections = "post"
```

##### Table of Content(Toc) Open By Default

```toml
[Params]
openToc = true
```

##### Favicon

Path of favicon of the published site.

If favicon `logo.svg` is put inside `static` like following:

```sh
./
├── archetypes/
├── content/
├── public/
├── resources/
├── static/
│   └── logo.svg
├── themes/
└── config.toml
```

The final path will be `/logo.svg`:

```toml
[Params]
favicon = "/logo.svg"
```

SK themes come with default favicon. To disable it:

```sh
# At Hugo site root
touch static/favicon.ico
```

##### Sub-Title

If defined, sub-title appear after site title in smaller font.

```toml
[Params]
subtitle  = "A Hugo Themes"
```

##### Copyright Start Year

Year is extracted from `startdate` and generate copyright in format "2012-(current year)".

> Site `copyright` override this behavior.

```toml
[Params]
startdate = "2012-12-02"
```

##### Page Width

> default: 1200px

```toml
[Params]
pagewidth = "1200px"
```

> Page width will automatically set to 100% on small screen.

##### List Last Modify Date

Use last modify date in list page.

```toml
[Params]
listlastmod	= true
```

##### Custom CSS

If you add custom css files like following:

```sh
./
├── archetypes/
├── content/
├── public/
├── resources/
├── static/
│   └── css/
│       ├── abc.css
│       └── def.css
├── themes/
└── config.toml
```

The final path of your css files will be `/css/abc.css` and `/css/def.css`:

```toml
[Params]
custom_css = ["/css/abc.css", "/css/def.css"]
```

##### Custom Javascript

If you add custom javascript like following:

```sh
./
├── archetypes/
├── content/
├── public/
├── resources/
├── static/
│   └── js/
│       ├── abc.js
│       └── def.js
├── themes/
└── config.toml
```

The final path of your javascript files will be `/js/abc.js` and `/js/def.js`:

```toml
[Params]
custom_js = ["/js/abc.js", "/js/def.js"]
```

##### User-declared Canonical

> Only use this if site require __user-declared canonical__ meta. This is not related to [Hugo Canonicalization](//gohugo.io/content-management/urls/#canonicalization) nor `canonifyurls`.

```toml
[Params]
user_canonical = true
```

A `rel="canonical"` meta link with absolute URL will be added to each page.

##### SVG External

Set `svg_ext` to `true` will load social icon using Font Awesome external css.

```toml
[Params]
svg_ext = true
```

#### Social Links

  Social link buttons appear at the bottom of card/list page:

  ```toml
  [Params.sociallink]
	facebook       = ""
	flickr         = ""
	instagram      = ""
	linkedin       = ""
	pinterest      = ""
	reddit         = ""
  rss            = true
	tumblr         = ""
	twitter        = ""
	vimeo          = ""
	youtubechannel = ""
	youtubeuser    = ""
  ```

#### Social Share

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

#### Color Theme

- Default dark theme

  Change color theme directly in `config.toml`.

  Default in CSS:

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

#### Google AdSense

- Support Google AdSense auto:

  ```toml
  [Params]
  adsense_id = ""
  ```

#### Twitter Cards / Opengraph

Use following to enable Twitter Cards / Opengraph:

> This should be enabled in general as Google search also pick up the same meta tags.

```toml
[Params]
opengraph   = true
twittercards = true
description = "site description"
title       = "site title"
```

#### Page Info Style

  Page info can be in box style.

  ```toml
  [Params]
  pageinfobox = true
  ```

#### Per Page

- Disable Disqus
- Disable Prev/Next
- Disable Related
- Disable Table of Content

  To disable the above, in front matter:

  ```yaml
  comment = false
  prevnext = false
  related = false
  toc = false
  ```

### Sample Config

`config.sample.toml` located in theme dir.

```toml
baseURL = "https://"
theme   = "sk3"
title   = ""

enableGitInfo = true
DefaultContentLanguage = "en"
enableInlineShortcodes = true
languageCode           = "en"
paginate               = 15

#disqusShortname = ""
#googleAnalytics = ""

[Params]
#adsense_id     = ""
#custom_css     = ["/css/abc.css", "/css/def.css"]
#custom_js      = ["/js/abc.js", "/js/def.js"]
#favicon        = "/favicon.ico"
#listlastmod    = true
#mainSections   = "post"
#pagewidth      = "1200px"
#startdate      = "2012-12-02"
#subtitle       = "A Hugo Theme"
#svg_ext        = true
#user_canonical = false

# Fill in following if using opengraph / twitter card
#opengraph   = true
#twitercards = true
#description = "A Hugo Theme"
#title       = "SK3"

  [Params.card]
  date    = true
  summary = true
  #width  = "32%"

	# [Params.color]
	# bg     = "#181a1b"
	# border = "white"
	# link   = "#3d84ff"
	# text   = "white"

	# [Params.sociallink]
	# facebook       = ""
	# flickr         = ""
	# github         = ""
	# instagram      = ""
	# linkedin       = ""
	# pinterest      = ""
	# reddit         = ""
	# stack-exchange = ""
	# stack-overflow = ""
	# tumblr         = ""
	# twitter        = ""
	# vimeo          = ""
	# youtubechannel = ""
	# youtubeuser    = ""

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

### Font Awesome

Social buttons provided by [Font Awesome](//github.com/FortAwesome/Font-Awesome) Brands([free](//fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use)).

`fa-svg-extract.sh` is used to extract icon from Font Awesome sprites/brands.svg and sprites/solid.svg.

```sh
./fa-svg-extract.sh brands.svg > sk3-fa.svg
./fa-svg-extract.sh solid.svg >> sk3-fa.svg
```

### Thank You

- SK3 inspired by [Vimux/Binario](//github.com/Vimux/Binario). Check it out too!

### Contributors

- [John Sing Dao Siu](//github.com/J-Siu)

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
- 0.8.9
  - CSS / spacing update
  - Include config.sample.toml
  - Use Font Awesome web font
- 0.9.0
  - Switch to Font Awesome SVG
- 0.9.1
  - Add box style page info
  - CSS clean up
  - Do not render empty table of content
  - Fix highlight font conflict
- 0.9.2
  - Add images
  - Demo config
  - Fix css
  - Improve menu
  - README.md update
  - Template .Site. -> site.
  - Use site.Params.mainSections
- 0.9.3
  - Click anywhere to close menu
  - SVG external option
- 0.9.4
  - Fix css spacing, kbd, social buttons, author box
  - Fix menu closing click through
- 0.9.5
  - Add `listlastmod`
  - Fix H1 line height
  - Fix Google Analytics
  - Fix table for mobile screen
  - Refactor css margin/padding/font size
- 0.9.6
  - Add default favicon.ico
  - Remove H1 from header.html & menu.html (Bing SEO)
  - Standardize .Site. -> site.
  - Update README.md
- 0.9.7
  - Add custom css and js support
  - Add open toc by default
  - Add page related (enable/disable)
  - Add user-declared canonical support
  - Fix footer alignment
  - Update favicon instructions
- 0.9.8
  - Add box to current list page button
  - Add external link open in new tab
  - Add rss
  - CSS cleanup
  - Center images
  - Fix \<head\> description, title
  - Fix html issues
  - Homepage title larger
  - Sort tags list / in page
  - Sticky menu button
- 0.9.9
  - Merge fix by 0xflotus

### License

The MIT License (MIT)

Copyright (c) 2020 John Siu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
