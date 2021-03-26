import React, { useReducer, useContext, Dispatch, createContext } from 'react';
import { Action } from '../actions/ui-actions';
import { initialState, State, UIReducer } from '../reducers/ui-reducer';

const UIStateContext = createContext<State>(initialState);
const UIDispatchContext = createContext<Dispatch<Action>>(() => null);

type ProviderProps = { children: React.ReactNode };

function UIProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(UIReducer, initialState);

  return (
    <UIStateContext.Provider value={state}>
      <UIDispatchContext.Provider value={dispatch}>
        {children}
      </UIDispatchContext.Provider>
    </UIStateContext.Provider>
  );
}

function useUIState() {
  const UIState = useContext(UIStateContext);

  if (UIState === undefined) {
    throw new Error('useUIState must be used within a UIProvider');
  }
  return UIState;
}

function useUIDispatch() {
  const UIDispatch = useContext(UIDispatchContext);

  if (UIDispatch === undefined) {
    throw new Error('useUIDispatch must be used within a UIProvider');
  }
  return UIDispatch;
}

export { UIProvider, useUIState, useUIDispatch };
