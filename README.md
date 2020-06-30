## Hugo Theme - SK3 (Skeleton 3)

Fully functional basic Hugo theme build on top of [hugo-theme-sk2](https://github.com/J-Siu/hugo-theme-sk2).

### Demo

SK3 demo site: https://sk3.jsiu.dev/

Example site content from [hugoBasicExample](https://github.com/gohugoio/hugoBasicExample)

### Usage

- Clone

    In site directory:

    ```sh
    git clone https://github.com/J-Siu/hugo-theme-sk3 theme/sk3
    ```

- Submodule

    In site directory:

    ```sh
    git submodule add https://github.com/J-Siu/hugo-theme-sk3 theme/sk3
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

- Card list
- Card width (default:290px on computer screen)
- Collapsible table of content
- Color theme
- Copyright start year
- Disqus - Per page disable
- Git modify date
- Google AdSense
- Google analytics
- Menu sidebar
- Mobile ready
- Optional card date
- Optional card summary
- Optional page width
- Optional prev/next
- Optional sub-title
- Social links
- Social share

### Site Config

```toml
baseURL = "https://sk3.jsiu.dev"
title = "SK3"
copyright = ""

enableGitInfo = false
relativeURLs = true
theme = "sk3"

[Params]
startdate = "2012-12-02"
subtitle  = "A Hugo Themes"
toc       = true
adsense   = ""
homepage  = false
maxwidth  = "1900"

[Params.card]
width = "290px"
date  = true
summary   = true

[Params.color]
bg-color     = "#181a1b"
border-color = "white"
link-color   = "#3d84ff"
text-color   = "white"
```

### Front Matter

```toml
comment = false
prevnext = false
toc = false
```

### TODO

- README.md
- Meta
- Optional Home page
- Clean up css
  - refactor margin, padding
  - color conflict with markup
- Include share button

### Repository

- [hugo-theme-sk3](https://github.com/J-Siu/hugo-theme-sk3)

### Contributors

- [John Sing Dao Siu](https://github.com/J-Siu)

### Change Log

- 0.8.5
  - Initial Commit