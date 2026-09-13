"use client";
import { liff } from "@line/liff";
import {
  type FC,
  type PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const SubContext = createContext<{
  sub: string;
}>({
  sub: "",
});

const useSub = () => useContext(SubContext);

export const useSubSelector = <T,>(
  selector: (
    ctx: typeof SubContext extends React.Context<infer U> ? U : never,
  ) => T,
): T => {
  const ctx = useSub();
  return selector(ctx);
};

export const SubProvider: FC<PropsWithChildren> = ({ children }) => {
  const [sub, setSub] = useState<string>("");

  const getIDToken = useCallback(async () => {
    const idToken: string | null = liff.getIDToken();
    console.log("Retrieved ID Token:", idToken);
    if (!idToken) return;
    const params = { IdToken: idToken };
    const query = new URLSearchParams(params);

    try {
      const response = await fetch(`/api/liffLogin?${query}`);
      const responsejson = await response.json();
      const data = responsejson.sub;
      setSub(data);
    } catch (error) {
      console.error("ログインエラー", error);
    }
  }, []);

  useEffect(() => {
    const loginLogic = async () => {
      await liff.ready;
      if (liff.isLoggedIn()) {
        await getIDToken();
        return;
      }
      //commented out the LINE login
      //liff.login();
      //await getIDToken();
    };
    loginLogic();
  }, [getIDToken]);

  const contextValue = useMemo(
    () => ({
      sub,
    }),
    [sub],
  );

  return (
    <SubContext.Provider value={contextValue}>{children}</SubContext.Provider>
  );
};
