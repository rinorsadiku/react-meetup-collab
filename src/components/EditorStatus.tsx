import { FC } from "react";
import { useCollabState } from "../hooks/useCollabState";
import { TiptapCollabProvider } from "@hocuspocus/provider";
import { Editor, useEditorState } from "@tiptap/react";
import styled from "@emotion/styled";
import { capitalize } from "../utils";

interface EditorStatusProps {
  provider: TiptapCollabProvider;
  editor: Editor;
  className?: string;
}

const EditorStatus: FC<EditorStatusProps> = ({
  provider,
  editor,
  className,
}) => {
  const { collabState } = useCollabState(provider);

  const users = useEditorState({
    editor,
    selector: (ctx): (any & { initials: string })[] => {
      if (!ctx.editor?.storage.collaborationCursor?.users) {
        return [];
      }

      return ctx.editor.storage.collaborationCursor.users.map((user: any) => {
        const names = user.name?.split(" ");
        const firstName = names?.[0];
        const lastName = names?.[names.length - 1];
        const initials = `${firstName?.[0] || "?"}${lastName?.[0] || "?"}`;

        return { ...user, initials: initials.length ? initials : "?" };
      });
    },
  });

  return (
    <div className={className}>
      <p className="entry">
        Status:{" "}
        <b className={`status--${collabState}`}>{capitalize(collabState)}</b>
      </p>

      <p className="entry">
        Concurrent Users: <b>{users?.length}</b>
      </p>
    </div>
  );
};

export default styled(EditorStatus)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;

  .entry {
    font-size: 14px;
    margin: 0;
    vertical-align: baseline;
  }

  .status {
    &--connecting {
      color: #f5a623;
    }

    &--connected {
      color: #4cd964;
    }

    &--disconnecting {
      color: #ff3b30;
    }
  }
`;
