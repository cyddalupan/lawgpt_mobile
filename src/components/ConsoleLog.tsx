
import React from 'react';

interface Log {
  type: 'log' | 'error' | 'warn';
  message: string;
}

interface ConsoleLogProps {
  logs: Log[];
}

const ConsoleLog: React.FC<ConsoleLogProps> = ({ logs }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        maxHeight: '200px',
        overflowY: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '10px',
        boxSizing: 'border-box',
        zIndex: 9999,
      }}
    >
      {logs.map((log, index) => (
        <div key={index} style={{ color: log.type === 'error' ? 'red' : log.type === 'warn' ? 'yellow' : 'white' }}>
          <strong>{log.type}:</strong> {log.message}
        </div>
      ))}
    </div>
  );
};

export default ConsoleLog;
