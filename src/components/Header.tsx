import styled from "@emotion/styled";
import { FC } from "react";
import githubLogo from "../assets/github-mark.png";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <p className="logo-title">React Meetup 2024</p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/rinorsadiku/react-meetup-collab"
      >
        <img src={githubLogo} className="github-logo" alt="Logo" />
      </a>
    </header>
  );
};

export default styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;

  .logo-title {
    font-size: 24px;
    font-weight: bold;
  }

  .github-logo {
    width: 40px;
    height: 40px;
  }
`;
