"use client";
import {
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const MapContext = createContext<{
  isRainLayer: boolean;
  setIsRainLayer: React.Dispatch<React.SetStateAction<boolean>>;
  pastDate: string;
  setPastDate: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const useMapContext = () => {
  const ctx = useContext(MapContext);
  if (!ctx) {
    throw new Error("useMap must be used within MapProvider");
  }
  return ctx;
};

export const MapProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isRainLayer, setIsRainLayer] = useState<boolean>(true);
  const [pastDate, setPastDate] = useState<string>("2024-01-01");

  const contextValue = useMemo(
    () => ({
      isRainLayer,
      setIsRainLayer,
      pastDate,
      setPastDate,
    }),
    [isRainLayer, pastDate],
  );

  return (
    <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>
  );
};
