'use client';

import React, { createContext, useContext, useReducer } from 'react';

type LeftbarType = {
  desktopLeftbar?: boolean;
  mobileLeftbar?: boolean;
};

const initialLeftbar: LeftbarType = {
  desktopLeftbar: true,
  mobileLeftbar: true,
};

const renderInitialLeftbar = (): LeftbarType => initialLeftbar;

type ActionType =
  | { type: 'LEFTBAR/MOBILE_SHOW' }
  | { type: 'LEFTBAR/MOBILE_HIDE' }
  | { type: 'LEFTBAR/MOBILE_SWITCH' }
  | { type: 'LEFTBAR/DESKTOP_SHOW' }
  | { type: 'LEFTBAR/DESKTOP_SWITCH' }
  | { type: 'LEFTBAR/DESKTOP_HIDE' };

const leftbarReducer = (state: LeftbarType, action: ActionType) => {
  if (action.type === 'LEFTBAR/DESKTOP_HIDE') {
    return { ...state, desktopLeftbar: false };
  }
  if (action.type === 'LEFTBAR/DESKTOP_SHOW') {
    return { ...state, desktopLeftbar: true };
  }

  if (action.type === 'LEFTBAR/DESKTOP_SWITCH') {
    return { ...state, desktopLeftbar: !state.desktopLeftbar };
  }

  if (action.type === 'LEFTBAR/MOBILE_HIDE') {
    return { ...state, mobileLeftbar: false };
  }
  if (action.type === 'LEFTBAR/MOBILE_SHOW') {
    return { ...state, mobileLeftbar: true };
  }

  if (action.type === 'LEFTBAR/MOBILE_SWITCH') {
    return { ...state, mobileLeftbar: !state.mobileLeftbar };
  }
  throw new Error('Action type unknown');
};

const LeftbarStateContext = createContext<LeftbarType>();
const LeftbarDispatchContext = createContext<React.Dispatch<ActionType>>();

export const LeftbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    leftbarReducer,
    null,
    renderInitialLeftbar
  );
  return (
    <LeftbarStateContext.Provider value={state}>
      <LeftbarDispatchContext.Provider value={dispatch}>
        {children}
      </LeftbarDispatchContext.Provider>
    </LeftbarStateContext.Provider>
  );
};

export const useLeftbarState = () => useContext(LeftbarStateContext);
export const useLeftbarDispatch = () => useContext(LeftbarDispatchContext);
