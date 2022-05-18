# Hugo Theme - SK3 (Skeleton 3) [![Paypal donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/donate/?business=HZF49NM9D35SJ&no_recurring=0&currency_code=CAD)

Full feature Hugo theme build on top of [hugo-theme-sk2](//github.com/J-Siu/hugo-theme-sk2) with Google AdSense (UA/GA4) support.

---

### Table Of Content
<!-- TOC -->

- [Table Of Content](#table-of-content)
- [SK Themes](#sk-themes)
- [Sites](#sites)
- [Version 2 Breaking Changes](#version-2-breaking-changes)
- [Install](#install)
- [Testing](#testing)
- [Features](#features)
- [Layout](#layout)
  - [Markdown Style](#markdown-style)
  - [Site Config](#site-config)
  - [Social Network](#social-network)
  - [Share Button](#share-button)
  - [Theme Color](#theme-color)
  - [Layout Dimensions](#layout-dimensions)
  - [Custom CSS](#custom-css)
  - [Custom Javascript](#custom-javascript)
  - [Favicon](#favicon)
  - [Google](#google)
  - [Paypal Button](#paypal-button)
- [Per Page Settings](#per-page-settings)
- [Sample Config](#sample-config)
- [Font Awesome](#font-awesome)
- [Thank You](#thank-you)
- [Contributors](#contributors)
- [Change Log](#change-log)
- [License](#license)

<!-- /TOC -->
<!--more-->

### SK Themes

Theme|GitHub|Hugo|Demo|Description
---|---|---|---|---
SK1|[hugo-theme-sk1](//github.com/J-Siu/hugo-theme-sk1)|[SK1](//themes.gohugo.io/hugo-theme-sk1/)|[sk1.jsiu.dev](//sk1.jsiu.dev/)|Fully functional basic Hugo theme with no css, no javascript.
SK2|[hugo-theme-sk2](//github.com/J-Siu/hugo-theme-sk2)|[SK2](//themes.gohugo.io/hugo-theme-sk2/)|[sk2.jsiu.dev](//sk2.jsiu.dev/)|Fully functional basic Hugo theme with minimum css.
SK3|[hugo-theme-sk3](//github.com/J-Siu/hugo-theme-sk3)|[SK3](//themes.gohugo.io/hugo-theme-sk3/)|[sk3.jsiu.dev](//sk3.jsiu.dev/)|Full feature Hugo theme with Google AdSense support.

### Sites

John Siu Blog: [JohnSiu.com](//JohnSiu.com/)

SK3 demo site: [sk3.jsiu.dev](//sk3.jsiu.dev/) with content from [hugoBasicExample](//github.com/gohugoio/hugoBasicExample)

### Version 2 Breaking Changes

When upgrading from v1.x.x to v2.x.x, config file need to be updated as there are lot of name changes.

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

#### Site Config

**[Params]**

Field|Type|Default Value|Description
---|---|---|---
customCss|text array|[]|See [Custom CSS](#custom-css)
customJs|text array|[]|See [Custom Javascript](#custom-javascript)
description|text|""|Open Graph / Twitter Card description
enableExternalSvg|bool|false|`true` will load social icon using Font Awesome external css.
enableInfoBox|bool|false| Enable page info box style
enableListLastModify|bool|false|Use last modify date in list page.
enableOpenGraph|bool|false|Enable Open Graph
enableOpenToc|bool|true|Control if table of content(Toc) is open By default
enableTwitterCard|bool|false|Enable Twitter Card
enableUserCanonical|bool|false|Add `rel="canonical"` meta link with absolute URL to each page. Only use this if site require __user-declared canonical__ meta. This is not related to [Hugo Canonicalization](//gohugo.io/content-management/urls/#canonicalization) nor `canonifyurls`.
favicon|text|""|See [Favicon](#favicon)
images|text array|[]|Open Graph / Twitter Card image
mainSections|text|n/a|Hugo default to section with most entries when For generating homepage list.
pagewidth|text(px)|"1200px"|Page width will automatically set to 100% on small screen(<993px).
startdate|text|""|eg. "2012-12-02". Year is extracted and generate copyright line "2012-(current year)". Site `copyright` override this behavior.
subtitle|text|""|If defined, sub-title appear after site title in smaller font.
title|text|""|Open Graph / Twitter Card title

#### Social Network

**[Params.sociallink]** Show social network buttons if IDs are provided.

Field|Type|Default Value
---|---|---
facebook|text|""
flickr|text|""
instagram|text|""
linkedin|text|""
pinterest|text|""
reddit|text|""
rss|bool|false
tumblr|text|""
twitter|text|""
vimeo|text|""
youtubechannel|text|""
youtubeuser|text|""

#### Share Button

**[Params.socialshare]** Control if share buttons appear at the bottom of page.

Field|Type|Default Value
---|---|---|---
facebook|bool|false
instagram|bool|false
linkedin|bool|false
pinterest|bool|false
reddit|bool|false
telegram|bool|false
twitter|bool|false
vk|bool|false

#### Theme Color

**[Params.color]** Control theme color. Default is a dark theme.

Field|Type|Default Value|Light Theme**
---|---|----|---
bg|text|"#181a1b"|"white"
border|text|"white"|""black"
link|text|"#3d84ff"|"#3d84ff"
text|text|"white"|"black"

#### Layout Dimensions

**[Params.card]** Control list page layout.

Field|Type|Default Value|Description
---|---|---|---
date|bool|true|Show data for each item in list
summary|bool|true|Show summary for each item in list
width|text(%)|"32%"|Control list page column width on desktop(>992px). 32% for 3 columns. 24% for 4 columns, etc. Single column use 100%.

#### Custom CSS

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
customCss = ["/css/abc.css", "/css/def.css"]
```

#### Custom Javascript

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
customJs = ["/js/abc.js", "/js/def.js"]
```


#### Favicon

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

#### Google

**[Params.google]**

Field|Type|Default Value|Description
---|---|---|---
AdsenseId|text|""|AdSense ID/Tag.
enablePageLevelAd|bool|false|Enable/Disable page level ads.
enableUA|bool|false|Set this to 'true' if using Google Analytics UA.

#### Paypal Button

**[Params.paypal]** Enable Paypal donation button along side share buttons.

Field|Type|Default Value|Description
---|---|---|---
amount|text|"0"|Default amount.
businessId|text|""|Paypal business Id. Button will only show if this is set.
currency|text|""|Currency code, eg. "CAD", "USD".
enableRecurring|bool|false|Show recurring check-box.

Information can be obtain by going through [Paypal Donate Button](https://www.paypal.com/donate/buttons?type=C&fromManage=true). You need your own Paypal account to go through the button creation process.

### Per Page Settings

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

DefaultContentLanguage = "en"
enableGitInfo          = true
enableInlineShortcodes = true
languageCode           = "en"
paginate               = 15
relativeURLs           = true

#disqusShortname = ""
#googleAnalytics = ""

[Params]
customCss            = ["/css/abc.css", "/css/def.css"]
customJs             = ["/js/abc.js", "/js/def.js"]
enableExternalSvg    = false
enableInfoBox        = true
enableListLastModify = false
enableOpenToc        = false
enableUserCanonical  = false
favicon              = "/favicon.ico"
mainSections         = "post"
pagewidth            = "1200px"
startdate            = "2012-12-02"
subtitle             = "A Hugo Theme"

# Fill in following if using Open Graph / Twitter Card
description       = "A Hugo Theme"
enableOpenGraph   = true
enableTwitterCard = true
title             = "SK3"

	[Params.paypal]
	amount          = ""
	businessId      = ""
	currency        = ""
	enableRecurring = true

	[Params.google]
	AdsenseId         = ""
	enablePageLevelAd = false
	enableUA          = false

	[Params.card]
	date    = true
	summary = true
	width   = "32%"

	[Params.color]
	bg     = "#181a1b"
	border = "white"
	link   = "#3d84ff"
	text   = "white"

	[Params.sociallink]
	facebook       = ""
	flickr          = ""
	github         = ""
	instagram      = ""
	linkedin       = ""
	pinterest      = ""
	reddit         = ""
	rss            = true
	stack-exchange = ""
	stack-overflow  = ""
	tumblr         = ""
	twitter        = ""
	vimeo          = ""
	youtubechannel = ""
	youtubeuser    = ""

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
  - Add `enableListLastModify`
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
  - Merge [PR](https://github.com/J-Siu/hugo-theme-sk3/pull/26) by [0xflotus](https://github.com/0xflotus)
- 1.0.0
  - Fixed head.html text color variable name [issue #27](https://github.com/J-Siu/hugo-theme-sk3/issues/27)
  - Fixed sk3.css box element color [issue #27](https://github.com/J-Siu/hugo-theme-sk3/issues/27)
- v1.1.0
  - Support Google Analytics GA4 with `googleAnalyticsUA`
- v1.2.0
  - Support AdSense page level control
- v2.0.0
  - Restructure README.md
  - Breaking changes:
    - Params names changes
    - Google param section
- v2.1.0
  - Support Paypal donation button

### License

The MIT License (MIT)

Copyright (c) 2022 John, Sing Dao, Siu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
