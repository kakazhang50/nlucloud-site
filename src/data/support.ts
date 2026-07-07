/** Ko-fi support copy — single source of truth for all support touchpoints. */
export const support = {
  url: 'https://ko-fi.com/nlucloud',
  button: {
    default: 'Support NLUCloud',
    about: 'Support NLUCloud on Ko-fi',
  },
  copy: {
    essay: {
      heading: 'Support this publication',
      body: [
        'NLUCloud AI & Society Review publishes independent long-form essays on AI and its implications for education, creativity, knowledge production, and society.',
        'If this essay was valuable to you, you can support the publication on Ko-fi.',
      ],
    },
    about: {
      heading: 'Support NLUCloud',
      body: [
        'NLUCloud AI & Society Review is an independent digital publication exploring how artificial intelligence reshapes education, creativity, knowledge production, digital content, and social organization.',
        'It is built around long-form essays, issue-based publishing, and a commitment to long-term ideas rather than short-term traffic.',
        'If you would like to support the publication, you can do so through Ko-fi. Support is optional and helps keep NLUCloud independent, accessible, and focused.',
      ],
    },
    footer: {
      link: 'Support this publication',
      sub: 'Help keep NLUCloud independent and accessible.',
    },
    home: {
      kicker: 'Support',
      heading: 'Support this publication',
      body: [
        'Independent long-form essays on AI, education, creativity, and society — free to read on NLUCloud.com.',
        'If this work is valuable to you, optional support on Ko-fi helps keep the review independent, accessible, and focused on long-term ideas.',
      ],
    },
  },
} as const;
