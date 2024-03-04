import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'text-black border-b border-pink-500'
    : 'text-gray-300';
  return (
    <div>
      <button onClick={selectTab}>
        <p className={`font-semibold ${buttonClasses}`}>{children}</p>
      </button>
    </div>
  );
};

export default TabButton;
