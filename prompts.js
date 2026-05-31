const promptTemplates = {

  salon:`Luxury salon branding prompt`,
  gym:`Fitness growth prompt`,
  clinic:`Medical trust building prompt`

};
function buildPrompt(data) {

return `
You are an elite business growth strategist.

Generate a HIGH-CONVERTING client pitch.

BUSINESS NAME:
${data.name}

CITY:
${data.city}

BUSINESS TYPE:
${data.type}

PLATFORM:
${data.platform}

CLIENT SOURCE:
${data.source}

PACKAGE:
${data.package}

WEBSITE STATUS:
${data.website}

EXTRA INFO:
${data.extra}

TONE:
${data.tone}

Generate:

1. WhatsApp Pitch
2. Instagram DM
3. Follow-Up Message
4. Sales Closing Message
5. Premium CTA

Keep it premium, persuasive and modern.
`;

}
