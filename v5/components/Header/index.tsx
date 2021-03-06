import Link from "next/link";
import { useState } from "react";
import cx from "classnames";
import _throttle from "lodash.throttle";
import styled from "styled-components";
import Avatar from "../Avatar";
import Nav, { NavContainer } from "../Nav";
import { useEventListener } from "../../hooks";

const navItems = [
  {
    label: "bio.",
    value: "/",
  },
  {
    label: "work.",
    value: "/work",
  },
  {
    label: "notes.",
    value: "/notes",
  },
  {
    label: "blog.",
    value: "/blog",
  },
  {
    label: 'til.',
    value: "/today-i-learned"
  }
];

export const HeaderContainer = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space[3]}px;
  position: sticky;
  top: 0;
  transition: transform 300ms ease;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices[2]};

  &.HeaderContainer--not-top {
    transform: translateY(-150px);

    h1 {
      span {
        opacity: 0;
        width: 0 !important;
        transition: opacity 600ms ease 300ms, width 300ms ease 600ms;
      }
    }
  }

  .HeaderContainer__avatar-name-container {
    align-items: center;
    color: inherit;
    display: flex;
    flex-direction: column;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  .Avatar {
    margin-bottom: ${({ theme }) => theme.space[2]}px;
  }

  h1 {
    font-family: "Pacifico", serif;
    line-height: 1.15;
    margin-bottom: ${({ theme }) => theme.space[3]}px;

    span {
      display: inline-block;
      width: auto;
      transition: opacity 600ms ease 600ms, width 300ms ease 300ms;

      &:first-child {
        width: 80px;
      }

      &:nth-child(2) {
        width: 9px;
      }

      &:last-child {
        width: 45px;
      }
    }
  }

  ${NavContainer} {
    font-family: "Gaegu";

    ul {
      display: flex;

      a {
        color: inherit;
        padding-right: ${({ theme }) => theme.space[2]}px;
      }
    }
  }
`;

const SCROLL_THRESHOLD = 120;

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEventListener(
    "scroll",
    _throttle(() => {
      if (typeof window !== "undefined") {
        if (window.pageYOffset > SCROLL_THRESHOLD) {
          setIsAtTop(false);
        } else {
          setIsAtTop(true);
        }
      }
    }, 150)
  );

  return (
    <HeaderContainer
      className={cx({
        HeaderContainer: true,
        "HeaderContainer--not-top": !isAtTop,
      })}
    >
      <Link href="/">
        <a className="HeaderContainer__avatar-name-container">
          <Avatar />
          <h1>
            m<span>ichael</span>
            <span>&nbsp;</span>y<span>uen</span>
          </h1>
        </a>
      </Link>
      <Nav items={navItems} />
    </HeaderContainer>
  );
}
