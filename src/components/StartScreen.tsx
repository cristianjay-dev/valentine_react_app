import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#ff1f75',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '4rem',
        animation: 'float 3s ease-in-out infinite'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 8vw, 4rem)',
          color: '#FF6B9D',
          marginBottom: '1rem',
          textAlign: 'center',
          lineHeight: '1.2',
          textShadow: '4px 4px 0 rgba(255,255,255,1)'
        }}>
          VALENTINE'S<br/>QUEST
        </h1>
        <div style={{
          color: '#F9A8D4',
          fontSize: 'clamp(0.7rem, 2vw, 1rem)',
          letterSpacing: '0.2em',
          marginTop: '0.5rem'
        }}>
          For that SPECIAL Someone.
        </div>
      </div>

      <button 
        onClick={onStart}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="pixel-border-pink"
        style={{
          position: 'relative',
          padding: '1.25rem 2.5rem',
          background: 'white',
          transition: 'transform 0.2s',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
      >
        <div style={{
          color: '#FF6B9D',
          fontSize: 'clamp(0.9rem, 3vw, 1.5rem)',
          animation: isHovered ? 'none' : 'pulse 2s infinite'
        }}>
          PRESS START
        </div>
        
        {isHovered && (
          <>
            <div style={{
              position: 'absolute',
              top: '-1rem',
              right: '-1rem',
              fontSize: '1.5rem'
            }}>✨</div>
            <div style={{
              position: 'absolute',
              bottom: '-1rem',
              left: '-1rem',
              fontSize: '1.5rem'
            }}>✨</div>
          </>
        )}
      </button>

      <div className="version-text">
        © 1994 ROMANTIC ENTERTAINMENT SYSTEM<br/>
        LICENSED BY PLAYER ONE
      </div>
    </div>
  );
};

export default StartScreen;