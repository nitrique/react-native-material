import React, { createContext, useContext } from "react";

export type Spacing = (size: number) => number;

export const defaultSpacing: Spacing = (size: number) => size * 4;

export interface SpacingProviderProps {
  spacing?: Spacing;
}

export const SpacingContext = createContext<Spacing>(defaultSpacing);

export const useSpacing = () => useContext(SpacingContext);

const SpacingProvider: React.FC<SpacingProviderProps> = ({ spacing = defaultSpacing, children }) => (
  <SpacingContext.Provider value={spacing}>{children}</SpacingContext.Provider>
);

export default SpacingProvider;
