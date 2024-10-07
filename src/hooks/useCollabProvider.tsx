import { TiptapCollabProvider } from "@hocuspocus/provider";
import { useState } from "react";
import { Doc as YDoc } from "yjs";
import config from "../config/config";

export const useCollabProvider = () => {
  const [provider, setProvider] = useState<TiptapCollabProvider | null>(null);
  const [yDoc] = useState(new YDoc());

  const createProvider = () => {
    const provider = new TiptapCollabProvider({
      name: `react:meetup:collab:doc`,
      appId: config.collabAppId,
      document: yDoc,
    });

    setProvider(provider);
  };

  return { provider, createProvider };
};
