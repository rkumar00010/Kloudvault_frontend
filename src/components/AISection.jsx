import React, { useEffect, useRef } from 'react';
import './AISection.css';

const AISection = () => {
  const connectionsRef = useRef(null);

  useEffect(() => {
    class AIDotAnimator {
      constructor(container) {
        this.connections = [];
        this.container = container;
        this.init();
      }

      init() {
        this.createConnections();
        this.startAnimation();
      }

      createConnections() {
        const connections = [
          { from: 'center', to: 'left-1', duration: 4 },
          { from: 'center', to: 'left-2', duration: 4 },
          { from: 'center', to: 'left-3', duration: 4},
          { from: 'center', to: 'right-1', duration: 4 },
          { from: 'center', to: 'right-2', duration: 4 },
          { from: 'center', to: 'right-3', duration: 4 }
        ];
        this.connections = connections;
      }

      startAnimation() {
        this.connections.forEach((connection, index) => {
          this.createDotStream(connection, index);
        });
      }

      createDotStream(connection, index) {
        const dot = document.createElement('div');
        dot.className = `energy-dot dot-${index}`;
        dot.style.animationDuration = `${connection.duration}s`;
        
        if (this.container) {
          this.container.appendChild(dot);
        }

        this.activateBox(connection.to, connection.duration);
      }

      activateBox(boxId, duration) {
        setInterval(() => {
          const box = document.querySelector(`[data-box="${boxId}"]`);
          if (box) {
            box.classList.add('dot-active', 'connected');
            
            setTimeout(() => {
              box.classList.remove('dot-active');
            }, 500);
            
            setTimeout(() => {
              box.classList.remove('connected');
            }, 2000);
          }
        }, duration * 1000);
      }
    }

    if (connectionsRef.current) {
      new AIDotAnimator(connectionsRef.current);
    }
  }, []);

  return (
    <section className="ai-section">
      <div className="ai-energy-field"></div>
      <div className="ai-connections" ref={connectionsRef}></div>
      
      <div className="ai-container">
        <div className="left-section">
          <div className="box" data-box="left-1">Instant Insights</div>
          <div className="box" data-box="left-2">Smart Visuals</div>
          <div className="box" data-box="left-3">Ask Anything</div>
        </div>

        <div className="center-ai">
          <div className="ai-box">AI</div>
        </div>

        <div className="right-section">
          <div className="box" data-box="right-1">Predictive Power</div>
          <div className="box" data-box="right-2">Plug & Play</div>
          <div className="box" data-box="right-3">Always On</div>
        </div>
      </div>
    </section>
  );
};

export default AISection;