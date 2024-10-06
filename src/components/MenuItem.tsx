import { FC } from "react";
import remixiconUrl from "remixicon/fonts/remixicon.symbol.svg";
import styled from "@emotion/styled";
import clsx from "clsx";

interface MenuItemProps {
  icon?: string;
  title?: string;
  action?: () => void;
  isActive?: (() => boolean) | null;
  className?: string;
}

const MenuItem: FC<MenuItemProps> = ({
  className,
  action,
  isActive,
  title,
  icon,
}) => {
  return (
    <button
      className={clsx(className, { "is-active": isActive && isActive() })}
      onClick={action}
      title={title}
    >
      <svg className="remix">
        <use xlinkHref={`${remixiconUrl}#ri-${icon}`} />
      </svg>
    </button>
  );
};

export default styled(MenuItem)`
  background-color: transparent;
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  height: 28px;
  margin-right: 4px;
  padding: 4px;
  width: 28px;

  svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  &:hover,
  &.is-active {
    background-color: #303030;
  }
`;
