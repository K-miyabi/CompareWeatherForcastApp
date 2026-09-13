"use client";
import type { Liff } from "@line/liff";
import React, {
  createContext,
  type FC,
  type PropsWithChildren,
  useRef,
  useContext,
  useEffect,
  useState,
} from "react";

const LiffContext = createContext<{
  liff: Liff | null;
  liffError: string | null;
}>({ liff: null, liffError: null });

export const useLiff = () => useContext(LiffContext);

export const LiffProvider: FC<PropsWithChildren> = ({ children }) => {
  const [liff, setLiff] = useState<Liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);

  const initialized = useRef(false);
  const liffId = process.env.NEXT_PUBLEC_LIFF_ID || "";

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const init = async () => {
      try {
        const liffModule = await import("@line/liff");
        const liffInstance = liffModule.default;
        console.log("LIFF initialized with ID:", process.env.NEXT_LIFF_ID);

        await liffInstance.init({ liffId });

        setLiff(liffInstance);
      } catch (error) {
        setLiffError((error as Error).toString());
      }
    };
    init();
  }, [liffId]);

  return (
    <LiffContext.Provider
      value={{
        liff,
        liffError,
      }}
    >
      {children}
    </LiffContext.Provider>
  );
};
