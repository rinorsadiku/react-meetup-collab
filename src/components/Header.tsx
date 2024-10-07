import styled from "@emotion/styled";
import { FC } from "react";
import githubLogo from "../assets/github-mark.png";
import meetupLogo from "../assets/react-meetup-logo.png";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <div className="logo-container">
        <img src={meetupLogo} className="meetup-logo" alt="Meetup Logo" />
        <p className="logo-title">React Meetup 2024</p>
      </div>

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

  .logo-container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .logo-title {
    font-size: 18px;
  }

  .meetup-logo {
    width: 60px;
    aspect-ratio: 1/1;
  }
  .github-logo {
    width: 40px;
    height: 40px;
  }
`;
