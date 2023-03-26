const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('도움말')
        .setDescription('에케봇 명령어와 사용방법을 알려줘요.'),
    async execute(interaction) {
        const Embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('에케봇 도움말')
            .setDescription('명령어를 알려드릴게요.\n<부등호는 필수> [대괄호는 선택] 옵션을 의미해요.')
            .addField('도움말', '에케봇 명령어와 사용방법을 알려줘요.')
            .addField('핑', '봇 지연시간을 확인해요.')
            .addField('코로나', '대한민국 코로나19 상황을 알려줘요.')
            .addField('말 <할말>', '문장을 입력하면 대신 말해줘요.')
            .addField('에케야 <할말>', '에케봇이랑 대화해요')
            .addField('시세 <금/기름/코인> [코인심볼]', '각종 시세를 알려줘요.')
            .addField('급식 <학교이름>', '학교 급식을 알려줘요.')
            .addField('번역 <출발언어> <도착언어> <내용>', '입력한 문장을 번역해줘요.')
            .addField('에케채널 <tts/translate/chat>', '에케봇 전용 채널을 설정해요.')
            .setFooter({ text: '에케봇 By.파란대나무숲', iconURL: 'https://i.imgur.com/fWGVv2K.png' });

        interaction.reply({ embeds: [Embed] });
    },
};