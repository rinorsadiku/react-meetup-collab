import { TiptapCollabProvider, WebSocketStatus } from "@hocuspocus/provider";
import { Editor, useEditorState } from "@tiptap/react";
import { useEffect, useState } from "react";

interface UseCollabStateProps {
  provider: TiptapCollabProvider;
  editor: Editor;
}

export const useCollabState = ({ provider, editor }: UseCollabStateProps) => {
  const [collabState, setCollabState] = useState<WebSocketStatus>(
    provider ? WebSocketStatus.Connecting : WebSocketStatus.Disconnected
  );

  const users = useEditorState({
    editor,
    selector: ({ editor }) => {
      const collabUsers = editor?.storage?.collaborationCursor?.users || [];

      return collabUsers.map((user: any) => {
        const names = user.name?.split(" ") || [];
        const initials = names
          .map((n: string) => n[0] || "?")
          .join("")
          .toUpperCase();

        return { ...user, initials: initials || "?" };
      });
    },
  });

  useEffect(() => {
    const statusHandler = (event: { status: WebSocketStatus }) => {
      setCollabState(event.status);
    };

    provider?.on("status", statusHandler);

    return () => {
      provider?.off("status", statusHandler);
    };
  }, [provider]);

  return { collabState, users };
};
