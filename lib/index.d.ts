export declare class EmbedBuilder {
    private title?;
    private description?;
    private color?;
    private author?;
    private fields?;
    private footer?;
    setTitle(title: string): EmbedBuilder;
    setDescription(description: string): EmbedBuilder;
    setColor(color: string): EmbedBuilder;
    setAuthor({ name, iconUrl }: {
        name: string;
        iconUrl?: string;
    }): EmbedBuilder;
    addFields(fields: {
        name: string;
        value: string;
        inline?: boolean;
    }[]): EmbedBuilder;
    setFooter({ text, iconUrl }: {
        text: string;
        iconUrl?: string;
    }): EmbedBuilder;
    toJSON(): any;
}
