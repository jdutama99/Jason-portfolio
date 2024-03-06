'use client';
import React, { createContext, useContext, useState } from 'react';
import { links } from '@/lib/links';

export const ActiveSectionContext = createContext(null);

export const ActiveSectionContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('Home');

  // to disable observer
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    );
  }
  return context;
};
