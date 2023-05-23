<div>
<img src="img/header.png"/>
<br>
<img src="img/docs.png" width=18%>
<a href="https://github.com/lqvers/embedified">
<img src="img/repo.png" width=18%>
</a>
<a href="https://npmjs.com/package/embedified">
<img src="img/npm.png" width=18%>
</a>
</div>
<h1></h1>
<h2>Overview</h2>
Easily create Discord.js compatible embeds with an intuitive HTML-like syntax, 
simplifying the process and allowing you to effortlessly design stunning embeds
for your Discord bot.
<h4>Example</h4>

Using one file:

```js
const { Embed } = require('embedified');

const embed = new Embed(`
  <title>Title Of Embed</title>
  <description>Description of the embed.</description>
  <color>#FF0000</color>
  <field name="Field 2" value="Value 2" inline="false" />
  <field name="Field 1" value="Value 1" inline="true" />
  <footer text="Footer" icon="https://image.com/image.png"></footer>
  <author name="Some name" icon="https://image.com/author-icon.png" url="https://example.com"></author>
  <thumbnail>https://image.com/thumbnail.png</thumbnail>
  <image>https://image.com/image.png</image>
  <timestamp>true</timestamp>
`);

interaction.reply({
    embeds: [embed]
    ephemeral: false
});
```

Imprting HTML from another file:

```html
<title>Title Of Embed</title>
<description>Description of the embed.</description>
<color>#FF0000</color>
<field name="Field 2" value="Value 2" inline="false" />
<field name="Field 1" value="Value 1" inline="true" />
<footer text="Footer" icon="https://image.com/image.png"></footer>
<author name="Some name" icon="https://image.com/author-icon.png" url="https://example.com"></author>
<thumbnail>https://image.com/thumbnail.png</thumbnail>
<image>https://image.com/image.png</image>
<timestamp>true</timestamp>
```

```js
const { Embed } = require('embedified');
const { readFileSync } = require('node:fs');

const html = readFileSync('embed.html', 'utf8');
const embed = new Embed(html).build();
```
