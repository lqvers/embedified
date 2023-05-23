import cheerio from 'cheerio';
import { EmbedBuilder } from 'discord.js';

export class Embed {
  private html: string;

  constructor(html: string) {
    this.html = html;
  }

  public build(): any {
    const $ = cheerio.load(this.html);

    let data: any = {
      title: $('title').text(),
      description: $('description').text(),
      color: $('color').text(),
      fields: [],
      footer: {
        text: $('footer').attr('text'),
        iconURL: $('footer').attr('icon'),
      },
      author: {
        name: $('author').attr('name'),
        iconURL: $('author').attr('icon'),
        url: $('author').attr('url'),
      },
      thumbnail: $('thumbnail').text(),
      image: $('image').text(),
      timestamp: $('timestamp').text() === 'true',
    };

    $('field').each((index, element) => {
      const name: any = $(element).attr('name');
      const value: any = $(element).attr('value');
      const inline: any = $(element).attr('inline') ? $(element).attr('inline') === 'true' : false;

      data.fields.push({ name, value, inline });
    });

    let embed = new EmbedBuilder();
    embed.setTitle(data.title);
    embed.setDescription(data.description);
    embed.setColor(data.color);
    embed.setFooter({ text: data.footer.text });

    if (data.footer.iconURL !== undefined) {
      embed.setFooter({ text: data.footer.text, iconURL: data.footer.iconURL });
    }

    data.fields.forEach((x: any) => {
      embed.addFields(x);
    });

    if (data.author.name !== undefined) {
      embed.setAuthor({ name: data.author.name });
      if (data.author.iconURL !== undefined) {
        embed.setAuthor({ name: data.author.name, iconURL: data.author.iconURL });
      }
      if (data.author.url !== undefined) {
        embed.setAuthor({ name: data.author.name, iconURL: data.author.iconURL, url: data.author.url });
      }
    }

    if (data.thumbnail !== '') {
      embed.setThumbnail(data.thumbnail);
    }

    if (data.image !== '') {
      embed.setImage(data.image);
    }

    if (data.timestamp) {
      embed.setTimestamp();
    }

    return embed;
  }
}
