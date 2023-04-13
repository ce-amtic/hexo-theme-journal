Journal.
======
隻言片語・於此匯聚

Moments piled up.

[Changelog](CHANGELOG.md)

![](arts/screenshot.png)

### Features

- Simple and easy to customize
- Concentrated on reading <del>and writing (find a Markdown editor then)</del> experience
- Mobile-friendly & widescreen-friendly
- Flexible commenting control

### Installation

First, `cd` into your Hexo root directory.

#### Installing dependencies

```bash
yarn add hexo-renderer-ejs hexo-generator-archive hexo-generator-category-enhance hexo-generator-feed hexo-generator-index hexo-generator-tag
```

#### Cloning the theme

```bash
cd themes
git clone https://github.com/Menci/hexo-theme-journal.git journal
cd journal
yarn install
```

#### Applying the theme

Find the `_config.yml` file at your Hexo root directory and apply the theme.

```yaml
theme: journal
```

And create a `_config.journal.yml` file for the theme.

### User Guide

#### Post items and pages

![](arts/post_item.png)

<div align="center"><small>↑ An example of a post item ↑</small></div>

Generally speaking, a post file in source/_posts or a page file always begins with a header in the following format.

```yaml
---
title: 吾輩は猫である
intro: 吾輩は猫である。名前はまだない。
featured_image: neko.jpg
date: 2018-11-11 12:00:00
tags: 
    - Novel
    - Japanese
---
```

Maybe you've already noticed that there're two new fields named `intro` and `featured_image`. These two **optional** fields are used to optimize post items' appearance. 

##### Intro

If `intro` is set, the value will be used as abstract instead of the automatically truncated one. Also, by editing the `_config.journal.yml`, you are able to control the truncation length for all articles.

```yaml
...
truncate_len: 60
...
```

##### Featured image

If `featured_image` presents, the image specified will show up in the post item, also, the feature image will show up in the detailed post's or page's page. In this example, the `neko.jpg` is placed in the asset folder for the post or page.

**New in 2.0.3:** `featured_image` can now be an URL starts with `http://` or `https://`.

#### Title and subtitle

The title area of the theme Journal. consists two parts — the title and the subtitle.

<div align="center"><img src="arts/title.png" width="300"/></div>

<div align="center"><small>↑ An example of the title area ↑</small></div>

Edit the `_config.journal.yml` file:

```yaml
sidebar_title: "Journal."
sidebar_subtitle: "隻言片語<br>於此匯聚"
```

> In `sidebar_title` and `sidebar_subtitle`, HTML is supported as the example above demonstrated.

#### Nav Menu

By default the nav menu contains: archives, RSS and all your *pages*. You can customize it by adding key-value pairs to `menu` property of the theme's config:

```yaml
menu:
    Archive: /archives
    Tags: /tags
    About: /about
```

#### CDN

By default it uses Baomitu's public CDN for libs and official Google Fonts. You can change the CDN used in the `_config.journal.yml` file.

```yaml
cdn:
    # Support public CDN names: cdnjs, loli, baomitu, unpkg, jsdelivr
    libs: baomitu
    # Support custom mirrors: <type>:<base url> (type = cdnjs, unpkg)
    libs: cdnjs:https://my-cdnjs-mirror.com
    # Support specifying URL for each library (See `cdn.ejs`)
    libs:
        js: # ...
        css: # ...

    # The base URL of Google Fonts CDN (e.g. "https://fonts.loli.net")
    fonts: https://fonts.googleapis.com
```

#### Archives

By default, the 'Archives' entry will not appear in the navigation section. To show the 'Archives' in the navigation section, you will need to enable the archives explicitly in the `_config.journal.yml` file.

```yaml
archives: true
```

> The generation of archives will be done by `hexo-generator-archive`. So please ensure that it has been added as a dependency in your package.json.

#### RSS

By adding the following line to the `_config.journal.yml`, an RSS entry will show up in the navigation drawer which points to the location specified.

```yaml
rss: atom
```

> The plugin `hexo-generator-feed` is usually required for this function.

#### Commenting

The theme *Journal.* natively supports three commenting services – [Livere](https://www.livere.com/),  [Disqus](https://disqus.com/) and [Giscus](https://giscus.app/). To enable commenting, you just need to fill **one of** the following configuration items in the `_config.journal.yml` file.

```yaml
livere: [data-uid] on livere.com
disqus: [short_name] on disqus.com
giscus:
    # Use the official giscus app
    app: https://giscus.app/client.js

    # The options, see "Enable giscus" section in https://giscus.app/
    repo: [ENTER REPO HERE]
    repo-id: [ENTER REPO ID HERE]
    category: [ENTER CATEGORY NAME HERE]
    category-id: [ENTER CATEGORY ID HERE]
    mapping: pathname
    reactions-enabled: 1
    emit-metadata: 0
    theme: light
    lang: en
```

> If multiple fields are **left non-empty**, multiple comment boxes will appear. To fix this, just leave one of the fields empty.

#### Disabling commenting

You are free to choose whether or not to disable commenting on some posts or pages at all times as you like it since you're the owner.

You can disable commenting just by adding one line of code in the header of a post or page file.

```yaml
---
...
no_comments: true
...
---
```

#### Page entries

When a page is created, its entry will automatically show up in the global navigation drawer on the left side of the screen.

#### Syntax highlighting

The theme *Journal.* natively supports syntax highlighting. Set `highlight.hljs` to `true` and `highlight.wrap` and `highlight.line_number` to `false` and set a [highlight.js theme](https://github.com/highlightjs/highlight.js/tree/11.2.0/src/styles) ([demo](https://highlightjs.org/static/demo/)) for the theme:

```yaml
# In _config.yml
highlight:
    enable: true
    line_number: false
    wrap: false
    hljs: true

# In _config.journal.yml
hljsTheme: github # Stands for highlight.js's builtin theme `github.css` (don't add `.css` suffix)
                  # Or use a URL (starts with "/", "http:" or "https:")
```

#### Table of contents

The theme *Journal.* natively supports showing the table of contents in an article. You can add `toc: true` to the header of the post file to enable table of contents.

You can also add `toc: true` in theme's config to enable ToC globally (and you disable ToC for individual article by adding `toc: false` to the header).

### Math

The theme *Journal.* natively support latex math formulas. Use `math: true` to enable mathjax.js.

### Support the developer

If you find my work awesome and useful, please consider donating. It is your support that helps me to do better!

[PayPal.me/Makito](https://www.paypal.me/makito)

<img src="arts/wxpay.png" width="300"/>
