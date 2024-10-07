import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import { globalStyling } from "./constants/global-styling";
import { FC, useEffect } from "react";
import TiptapEditor from "./components/TiptapEditor";
import Header from "./components/Header";
import UserDetails from "./components/UserDetails";
import { LocalStorageKeys } from "./types/LocalStorageKeys.enum";
import { useCollabProvider } from "./hooks/useCollabProvider";

interface AppProps {
  className?: string;
}

const App: FC<AppProps> = ({ className }) => {
  const { provider, createProvider } = useCollabProvider();

  useEffect(() => {
    const existingUser = localStorage.getItem(LocalStorageKeys.USER);
    if (existingUser) createProvider();
  }, []);

  return (
    <div className={className}>
      <Header />

      {!!provider ? (
        <TiptapEditor provider={provider} />
      ) : (
        <UserDetails onSubmit={createProvider} />
      )}

      <Global styles={globalStyling} />
    </div>
  );
};

export default styled(App)`
  padding: 0 70px;
`;
