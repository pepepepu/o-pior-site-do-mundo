export interface SillyTag {
  id: string;
  label: string;
  bgColor: string;
  textColor: string;
  borderStyle: string;
  rotation: string;
}

export interface IntroSlideContent {
  id: number;
  route: string;
  targetDateISO: string;
  silly: {
    smallPresenterText: string;
    giant3DText: string;
    countdownPrefix: string;
    tags: SillyTag[];
  };
  craft: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    buttonText: string;
  };
}

export const introSlideData: IntroSlideContent = {
  id: 1,
  route: '/',
  targetDateISO: '2026-11-23T14:40:00-03:00',
  silly: {
    smallPresenterText: 'ENZO E PEDRO APRESENTAM',
    giant3DText: 'O PIOR SITE DO MUNDO',
    countdownPrefix: 'começa em:',
    tags: [
      {
        id: 'semac',
        label: '★ SEMAC 2026 ★',
        bgColor: '#FFFF00',
        textColor: '#FF0000',
        borderStyle: '4px dashed #0000FF',
        rotation: '-4deg',
      },
      {
        id: 'lawd',
        label: '>>> LAWD <<<',
        bgColor: '#00FF00',
        textColor: '#FF00FF',
        borderStyle: '5px double #FF0000',
        rotation: '3deg',
      },
      {
        id: 'dcomp',
        label: 'DEPARTAMENTO DE COMPUTAÇÃO',
        bgColor: '#00FFFF',
        textColor: '#000080',
        borderStyle: '4px ridge #FF8800',
        rotation: '-2deg',
      },
    ],
  },
  craft: {
    badge: 'SEMAC • LAWD • DCOMP • 23 E 25 DE NOVEMBRO',
    title: 'Enzo e Pedro te ensinam a fazer',
    highlight: 'o pior site do mundo',
    subtitle: 'Ou como destruir a percepção do seu usuário antes mesmo do backend responder.',
    buttonText: 'Iniciar Experiência (Espaço ou →)',
  },
};