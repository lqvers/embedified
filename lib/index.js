"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedBuilder = void 0;
var EmbedBuilder = /** @class */ (function () {
    function EmbedBuilder() {
    }
    EmbedBuilder.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    EmbedBuilder.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    EmbedBuilder.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    EmbedBuilder.prototype.setAuthor = function (_a) {
        var name = _a.name, iconUrl = _a.iconUrl;
        this.author = { name: name, icon_url: iconUrl };
        return this;
    };
    EmbedBuilder.prototype.addFields = function (fields) {
        var _a;
        if (!this.fields) {
            this.fields = [];
        }
        (_a = this.fields).push.apply(_a, fields);
        return this;
    };
    EmbedBuilder.prototype.setFooter = function (_a) {
        var text = _a.text, iconUrl = _a.iconUrl;
        this.footer = { text: text, icon_url: iconUrl };
        return this;
    };
    EmbedBuilder.prototype.toJSON = function () {
        var embed = {};
        if (this.title) {
            embed.title = this.title;
        }
        if (this.description) {
            embed.description = this.description;
        }
        if (this.color) {
            embed.color = this.color;
        }
        if (this.author) {
            embed.author = this.author;
        }
        if (this.fields && this.fields.length > 0) {
            embed.fields = this.fields;
        }
        if (this.footer) {
            embed.footer = this.footer;
        }
        return embed;
    };
    return EmbedBuilder;
}());
exports.EmbedBuilder = EmbedBuilder;
