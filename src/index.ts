export class EmbedBuilder {
  private title?: string;
  private description?: string;
  private color?: string;
  private author?: {
    name?: string;
    icon_url?: string;
  };
  private fields?: {
    name: string;
    value: string;
    inline?: boolean;
  }[];
  private footer?: {
    text?: string;
    icon_url?: string;
  };

  public setTitle(title: string): EmbedBuilder {
    this.title = title;
    return this;
  }

  public setDescription(description: string): EmbedBuilder {
    this.description = description;
    return this;
  }

  public setColor(color: string): EmbedBuilder {
    this.color = color;
    return this;
  }

  public setAuthor({ name, iconUrl }: { name: string; iconUrl?: string }): EmbedBuilder {
    this.author = { name, icon_url: iconUrl };
    return this;
  }

  public addFields(fields: { name: string; value: string; inline?: boolean }[]): EmbedBuilder {
    if (!this.fields) {
      this.fields = [];
    }
    this.fields.push(...fields);
    return this;
  }

  public setFooter({ text, iconUrl }: { text: string; iconUrl?: string }): EmbedBuilder {
    this.footer = { text, icon_url: iconUrl };
    return this;
  }

  public toJSON(): any {
    const embed: any = {};

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
  }
}