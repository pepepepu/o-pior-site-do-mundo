export interface SlideContent {
  id: number;
  route: string;
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  hostileButtonText: string;
  craftedButtonText: string;
}

export const slidesData: SlideContent[] = [
  {
    id: 1,
    route: '/',
    badge: 'SEMAC • DCOMP • 23 E 25 DE NOVEMBRO',
    title: 'Enzo e Pedro te ensinam a fazer',
    highlight: 'o pior site do mundo',
    subtitle: 'Ou como destruir a percepção do seu usuário antes mesmo do backend responder.',
    hostileButtonText: 'CLIQUE AQUI AGORA!!! (OU NÃO)',
    craftedButtonText: 'Iniciar Experiência (Espaço ou →)',
  },
];