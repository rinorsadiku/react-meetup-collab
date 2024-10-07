import { TiptapCollabProvider, WebSocketStatus } from "@hocuspocus/provider";
import { useEffect, useState } from "react";

export const useCollabState = (provider: TiptapCollabProvider) => {
  const [collabState, setCollabState] = useState<WebSocketStatus>(
    provider ? WebSocketStatus.Connecting : WebSocketStatus.Disconnected
  );

  useEffect(() => {
    const statusHandler = (event: { status: WebSocketStatus }) => {
      setCollabState(event.status);
    };

    provider?.on("status", statusHandler);

    return () => {
      provider?.off("status", statusHandler);
    };
  }, [provider]);

  return { collabState };
};
