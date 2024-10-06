import { TiptapCollabProvider } from "@hocuspocus/provider";
import { useState } from "react";
import { Doc as YDoc } from "yjs";

export const useCollabProvider = () => {
  const [provider, setProvider] = useState<TiptapCollabProvider | null>(null);
  const [yDoc] = useState(new YDoc());

  const createProvider = (documentName: string) => {
    const provider = new TiptapCollabProvider({
      name: `user:${documentName}`,
      appId: "your-app-id",
      document: yDoc,
    });

    setProvider(provider);
  };

  return { provider, createProvider };
};
