import { TiptapCollabProvider, WebSocketStatus } from "@hocuspocus/provider";
import CharacterCount from "@tiptap/extension-character-count";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import { useEditor as useTiptapEditor } from "@tiptap/react";
import { Doc as YDoc } from "yjs";
import { LocalStorageKeys } from "../types/LocalStorageKeys.enum";
import { initialContent } from "../constants/initial-content";
import { randomElement } from "../utils";
import { collabColors } from "../constants/collab-colors";

interface UseEditorProps {
  provider: TiptapCollabProvider;
  yDoc: YDoc;
}

export const useEditor = ({ provider, yDoc }: UseEditorProps) => {
  const user = localStorage.getItem(LocalStorageKeys.USER);

  const editor = useTiptapEditor(
    {
      immediatelyRender: true,
      shouldRerenderOnTransaction: false,
      autofocus: true,
      onCreate: (ctx) => {
        if (provider && !provider.isSynced) {
          provider.on("synced", () => {
            setTimeout(() => {
              if (ctx.editor.isEmpty) {
                ctx.editor.commands.setContent(initialContent);
              }
            }, 0);
          });
        } else if (ctx.editor.isEmpty) {
          ctx.editor.commands.setContent(initialContent);
          ctx.editor.commands.focus("start", { scrollIntoView: true });
        }
      },
      extensions: [
        StarterKit.configure({
          history: false,
        }),
        Highlight,
        TaskList,
        TaskItem,
        CharacterCount.configure({
          limit: 10000,
        }),
        Collaboration.configure({
          document: yDoc,
        }),
        CollaborationCursor.configure({
          provider,
          user: {
            name: user,
            color: randomElement(collabColors),
          },
        }),
      ],
    },
    [yDoc, provider]
  );

  return { editor };
};
