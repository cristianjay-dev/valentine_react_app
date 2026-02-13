


import { type Scene } from './types';

export const SCENES: Scene[] = [
  {
    id: 1,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: 'https://picsum.photos/id/10/800/600',
    message: '_Remember when we first met? You made my heart skip like a glitchy sprite.',
    particleTheme: 'hearts'
  },
  {
    id: 2,
    background: 'linear-gradient(135deg, #355C7D 0%, #C06C84 100%)',
    image: 'https://picsum.photos/id/20/800/600',
    message: '_Our first date was better than beating the final boss on the first try.',
    particleTheme: 'sparkles'
  },
  {
    id: 3,
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: 'https://picsum.photos/id/30/800/600',
    message: '_Every moment with you is like finding a secret level full of treasure.',
    particleTheme: 'stars'
  },
  {
    id: 4,
    background: 'linear-gradient(135deg, #FF6B9D 0%, #F67280 100%)',
    image: 'https://picsum.photos/id/40/800/600',
    message: '_You are the ultimate power-up to my everyday life. 1-UP!',
    particleTheme: 'hearts'
  },
  {
    id: 5,
    background: 'linear-gradient(135deg, #2C1E3E 0%, #355C7D 100%)',
    image: 'https://picsum.photos/id/50/800/600',
    // Fixed unescaped single quote in "wouldn't"
    message: '_I wouldn\'t trade our co-op mode for anything in the world.',
    particleTheme: 'sparkles'
  },
  {
    id: 6,
    background: 'linear-gradient(135deg, #667eea 0%, #C06C84 100%)',
    image: 'https://picsum.photos/id/60/800/600',
    message: '_You\'re my player 2 forever. Happy Valentine\'s Day! 💕',
    particleTheme: 'hearts'
  }
];

export const COLORS = {
  primary: '#FF6B9D',
  secondary: '#C06C84',
  accent: '#F67280',
  bgDark: '#355C7D',
  bgPurple: '#2C1E3E',
  textLight: '#F8F9FA',
  border: '#8B4789',
};