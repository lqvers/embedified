"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embed = void 0;
var cheerio_1 = require("cheerio");
var discord_js_1 = require("discord.js");
var Embed = /** @class */ (function () {
    function Embed(html) {
        this.html = html;
    }
    Embed.prototype.build = function () {
        var $ = cheerio_1.default.load(this.html);
        var data = {
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
        $('field').each(function (index, element) {
            var name = $(element).attr('name');
            var value = $(element).attr('value');
            var inline = $(element).attr('inline') ? $(element).attr('inline') === 'true' : false;
            data.fields.push({ name: name, value: value, inline: inline });
        });
        var embed = new discord_js_1.EmbedBuilder();
        embed.setTitle(data.title);
        embed.setDescription(data.description);
        embed.setColor(data.color);
        embed.setFooter({ text: data.footer.text });
        if (data.footer.iconURL !== undefined) {
            embed.setFooter({ text: data.footer.text, iconURL: data.footer.iconURL });
        }
        data.fields.forEach(function (x) {
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
    };
    return Embed;
}());
exports.Embed = Embed;
