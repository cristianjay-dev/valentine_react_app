import React from 'react';
import { type Scene } from '../types';
import ImageFrame from './ImageFrame';
import MessageBox from './MessageBox';

interface SceneContainerProps {
  scene: Scene;
  onNext: () => void;
  onRestart: () => void;
  isLast: boolean;
}

const SceneContainer: React.FC<SceneContainerProps> = ({ scene, onNext, isLast, onRestart }) => {
  const handleClick = () => {
    if (isLast) {
      onRestart();
    } else {
      onNext();
    }
  };

  return (
    <div 
      className="scene-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        width: '100%',
        height: '100%',
        animation: 'fadeIn 0.5s ease-in'
      }}
    >
      <div 
        className="scene-header"
        style={{
          marginBottom: '2rem',
          color: 'white',
          fontSize: '1.25rem',
          textShadow: '2px 2px 0 rgba(255,107,157,1)',
          textTransform: 'uppercase'
        }}
      >
        Memory #{scene.id}
      </div>

      <ImageFrame src={scene.image} alt="Valentine Memory" />
      
      <div 
        className="message-container"
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer'
        }}
        onClick={handleClick}
      >
        <MessageBox text={scene.message} />
        
        {isLast && (
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent double-triggering
              onRestart();
            }}
            className="replay-button"
            style={{
              marginTop: '2rem',
              padding: '0.75rem 1.5rem',
              background: 'white',
              color: '#FF6B9D',
              border: '4px solid #FF6B9D',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            REPLAY QUEST
          </button>
        )}
      </div>
    </div>
  );
};

export default SceneContainer;