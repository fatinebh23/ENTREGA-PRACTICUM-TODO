import React from 'react';
import '../loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;