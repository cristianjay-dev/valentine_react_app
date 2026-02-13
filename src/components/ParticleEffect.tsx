import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  char: string;
}

interface ParticleEffectProps {
  theme?: 'hearts' | 'stars' | 'sparkles';
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({ theme = 'hearts' }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const chars = theme === 'hearts' ? ['❤', '💕', '💖'] : 
                  theme === 'stars' ? ['★', '☆', '✧'] : ['✨', '•', '°'];
    const colors = ['#FF6B9D', '#F67280', '#FFFFFF', '#FFD700'];

    const interval = setInterval(() => {
      const newParticle: Particle = {
        id: Math.random(),
        x: Math.random() * 100,
        y: 100, // Start from bottom of screen
        size: Math.random() * 20 + 15,
        color: colors[Math.floor(Math.random() * colors.length)],
        char: chars[Math.floor(Math.random() * chars.length)]
      };

      setParticles(prev => [...prev.slice(-20), newParticle]);
    }, 400);

    return () => clearInterval(interval);
  }, [theme]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            color: p.color,
            textShadow: `0 0 10px ${p.color}88`,
            pointerEvents: 'none',
            animation: 'particleUp 4s linear forwards',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {p.char}
        </div>
      ))}
    </div>
  );
};

export default ParticleEffect;