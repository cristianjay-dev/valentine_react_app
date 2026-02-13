import React, { useState, useEffect, useCallback } from 'react';
import { Howl } from 'howler';
import { SCENES } from './constants';  // Fixed: added /
import StartScreen from './components/StartScreen';
import SceneContainer from './components/SceneContainer';
import ParticleEffect from './components/ParticleEffect';
import './App.css';  // Make sure to import your CSS

const App: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [bgm, setBgm] = useState<Howl | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  // Initialize Audio
  useEffect(() => {
    const sound = new Howl({
      src: ['/bg_music/waltz.mp3'],
      loop: true,
      volume: 0.5,
      autoplay: false,
    });
    setBgm(sound);

    return () => {
      sound.unload();
    };
  }, []); 

  const handleStart = useCallback(() => {
    setStarted(true);
    if (bgm && !isMuted) {
      bgm.play();
    }
    
    // SFX for click
    new Howl({
      src: ['/bg_music/coin.mp3'],
      volume: 0.4
    }).play();
  }, [bgm, isMuted]);

  const handleNext = useCallback(() => {
    if (currentIdx < SCENES.length - 1) {
      setCurrentIdx(prev => prev + 1);
      
      // Transition SFX
      new Howl({
        src: ['/bg_music/click.mp3'],
        volume: 0.3
      }).play();
    }
  }, [currentIdx]);

  const toggleMute = useCallback(() => {
    if (bgm) {
      if (isMuted) {
        bgm.mute(false);
        setIsMuted(false);
      } else {
        bgm.mute(true);
        setIsMuted(true);
      }
    }
  }, [bgm, isMuted]);

  if (!started) {
    return <StartScreen onStart={handleStart} />;
  }

  const currentScene = SCENES[currentIdx];

  return (
    <div 
      className="app-container"
      style={{ 
        position: 'relative',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: currentScene.background,
        transition: 'background 1s ease',
        overflow: 'hidden'
      }}
    >
      <ParticleEffect theme={currentScene.particleTheme} />
      
      {/* Audio Controls */}
      <button 
        onClick={toggleMute}
        className="audio-toggle"
        style={{
          position: 'fixed',
          top: '1.5rem',
          right: '1.5rem',
          zIndex: 50,
          padding: '0.5rem 1rem',
          background: 'white',
          border: '4px solid #FF6B9D',
          cursor: 'pointer',
          fontSize: '0.75rem',
          color: '#FF6B9D',
          transition: 'transform 0.2s',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        {isMuted ? '🔇 SOUND OFF' : '🔊 SOUND ON'}
      </button>

      {/* Progress */}
      <div 
        style={{
          position: 'fixed',
          top: '1.5rem',
          left: '1.5rem',
          zIndex: 50,
          color: 'white',
          fontSize: '0.75rem',
          textShadow: '2px 2px 0 rgba(0,0,0,1)'
        }}
      >
        SCENE {currentIdx + 1} / {SCENES.length}
      </div>

      <SceneContainer 
        scene={currentScene} 
        onNext={handleNext} 
        isLast={currentIdx === SCENES.length - 1}
        onRestart={() => setCurrentIdx(0)}
      />
      
      {/* Overlay Decorative Elements */}
      <div 
        className="version-text"
        style={{
          position: 'fixed',
          bottom: '1rem',
          left: '1rem',
          fontSize: '10px',
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '-0.05em'
        }}
      >
        Making it Special • VALENTINE'S EDITION
      </div>
    </div>
  );
};

export default App;