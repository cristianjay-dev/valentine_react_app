export type Scene = {
  id: number;
  background: string;
  image: string;
  message: string;
  particleTheme?: 'hearts' | 'stars' | 'sparkles';
}

export type AudioConfig = {
  bgm: string;
  clickSound: string;
  transitionSound: string;
  typewriterSound: string;
  volume: number;
  muted: boolean;
}