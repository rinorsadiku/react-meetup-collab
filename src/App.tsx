import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import { globalStyling } from "./constants/global-styling";
import { FC } from "react";
import TiptapEditor from "./components/TiptapEditor";
import Header from "./components/Header";

interface AppProps {
  className?: string;
}

const App: FC<AppProps> = ({ className }) => {
  return (
    <div className={className}>
      <Header />

      <TiptapEditor />

      <Global styles={globalStyling} />
    </div>
  );
};

export default styled(App)`
  padding: 0 70px;
`;
