const { Embed } = require('../lib/index.js');

let embed = new Embed(`
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

console.log(embed);
