import { TiptapCollabProvider } from "@hocuspocus/provider";
import * as Y from "yjs";
import { useEffect, useState } from "react";
import config from "../config/config";
import { LocalStorageKeys } from "../types/LocalStorageKeys.enum";

export const useCollabProvider = () => {
  const [provider, setProvider] = useState<TiptapCollabProvider | null>(null);
  const [yDoc, setYDoc] = useState<Y.Doc | null>(null);

  const createProvider = () => {
    const yDoc = new Y.Doc();
    const provider = new TiptapCollabProvider({
      name: `react-tiptap-collab-${config.env}`,
      appId: config.collabAppId,
      document: yDoc,
      token: "-",
    });

    setYDoc(yDoc);
    setProvider(provider);
  };

  useEffect(() => {
    const existingUser = localStorage.getItem(LocalStorageKeys.USER);
    if (existingUser) createProvider();
  }, []);

  return { provider, createProvider, yDoc };
};
