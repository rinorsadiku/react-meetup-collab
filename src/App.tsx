import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import { globalStyling } from "./constants/global-styling";
import { FC, useEffect } from "react";
import TiptapEditor from "./components/TiptapEditor";
import Header from "./components/Header";
import UserDetailsForm from "./components/UserDetailsForm";
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
        <UserDetailsForm onSubmit={createProvider} />
      )}

      <Global styles={globalStyling} />
    </div>
  );
};

export default styled(App)`
  padding: 0 70px;

  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;
