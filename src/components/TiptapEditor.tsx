import { FC } from "react";
import MenuBar from "./MenuBar";
import styled from "@emotion/styled";
import { TiptapCollabProvider } from "@hocuspocus/provider";
import { useEditor } from "../hooks/useEditor";
import { Doc } from "yjs";
import { EditorContent } from "@tiptap/react";
import EditorStatus from "./EditorStatus";

interface TiptapEditorProps {
  className?: string;
  provider: TiptapCollabProvider;
  yDoc: Doc;
}

const TiptapEditor: FC<TiptapEditorProps> = ({ className, provider, yDoc }) => {
  const { editor } = useEditor({ provider, yDoc });

  if (!provider) {
    return;
  }

  return (
    <div className={className}>
      <div className="editor-container">
        {editor && <MenuBar editor={editor} />}
        <EditorContent className="content" editor={editor} />
      </div>
      {editor && <EditorStatus provider={provider} editor={editor} />}
    </div>
  );
};

export default styled(TiptapEditor)`
  margin-top: 20px;

  .editor-container {
    background-color: #fff;
    border: 3px solid #0d0d0d;
    border-radius: 12px;
    color: #000;

    width: 100%;
    height: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
  }

  .content {
    width: 100%;
    height: 100%;

    padding: 15px 10px;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-direction: column;
  }

  /* Basic editor styles */
  .tiptap {
    width: 100%;
    height: 100%;
    flex: 1 1 auto;

    color: #000;

    &:focus {
      outline: none;
    }

    > * + * {
      margin-top: 12px;
    }

    p {
      @media only screen and (max-width: 768px) {
        font-size: 14px;
      }
    }

    p.is-editor-empty:first-of-type::before {
      content: attr(data-placeholder);
      float: left;
      height: 0;
      pointer-events: none;
    }

    ul,
    ol {
      padding: 0 16px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      background: #0d0d0d;
      border-radius: 8px;
      color: #fff;
      font-family: "JetBrainsMono", monospace;
      padding: 12px 16px;

      code {
        background: none;
        color: inherit;
        font-size: 12.8px;
        padding: 0;
      }
    }

    mark {
      background-color: #faf594;
    }

    img {
      height: auto;
      max-width: 100%;
    }

    blockquote {
      border-left: 2px solid rgba(#0d0d0d, 0.1);
      padding-left: 16px;
    }

    hr {
      border: none;
      border-top: 2px solid rgba(#0d0d0d, 0.1);
      margin: 16px 0;
    }

    ul[data-type="taskList"] {
      list-style: none;
      padding: 0;

      li {
        align-items: center;
        display: flex;

        > label {
          flex: 0 0 auto;
          margin-right: 8px;
          user-select: none;
        }

        > div {
          flex: 1 1 auto;
        }
      }
    }
  }

  /* Give a remote user a caret */
  .collaboration-cursor__caret {
    border-left: 1px solid #0d0d0d;
    border-right: 1px solid #0d0d0d;
    margin-left: -1px;
    margin-right: -1px;
    pointer-events: none;
    position: relative;
    word-break: normal;
  }

  /* Render the username above the caret */
  .collaboration-cursor__label {
    border-radius: 3px 3px 3px 0;
    color: #0d0d0d;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    left: -1px;
    line-height: normal;
    padding: 1.5px 3px;
    position: absolute;
    top: -1.4em;
    user-select: none;
    white-space: nowrap;
  }
`;
