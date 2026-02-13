import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface MessageBoxProps {
  text: string;
  onComplete?: () => void;
}

const MessageBox: React.FC<MessageBoxProps> = ({ text, onComplete }) => {
  const { displayedText, isComplete } = useTypewriter(text, 50); // Slower speed for stability

  React.useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center' 
    }}>
      <div className="message-box">
        <div 
          className="message-text"
          style={{
            wordBreak: 'normal',
            overflowWrap: 'anywhere',
            hyphens: 'none'
          }}
        >
          {displayedText}
          {!isComplete && <span className="cursor" />}
        </div>
      </div>
      {isComplete && (
        <div style={{
          marginTop: '1rem',
          color: '#F9A8D4',
          animation: 'pulse 2s infinite',
          fontSize: '0.75rem',
          textAlign: 'center'
        }}>
          ▼ CLICK TO CONTINUE
        </div>
      )}
    </div>
  );
};

export default MessageBox;