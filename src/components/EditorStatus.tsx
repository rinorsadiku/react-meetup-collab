import { FC } from "react";
import { useCollabState } from "../hooks/useCollabState";
import { TiptapCollabProvider } from "@hocuspocus/provider";
import { Editor } from "@tiptap/react";
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
  const { collabState, users } = useCollabState({ provider, editor });

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

    &--disconnected {
      color: #ff3b30;
    }
  }
`;
