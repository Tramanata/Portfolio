import React, { useEffect, useId, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Menu = ({ menuOpened, setMenuOpened }) => {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const location = useLocation();
  const panelId = useId();
  const aboutId = useId();
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  const closeMenu = () => {
    setMenuOpened(false);
    toggleRef.current?.focus();
  };

  useEffect(() => {
    if (!menuOpened) {
      setAboutExpanded(false);
      return;
    }

    if (location.pathname.replace(/\/$/, "") === "/health") {
      setAboutExpanded(true);
    }

    const panel = panelRef.current;
    panel?.querySelector("a, button")?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpened(false);
        toggleRef.current?.focus();
      }

      if (event.key === "Tab") {
        const controls = [
          toggleRef.current,
          ...panel.querySelectorAll("a, button"),
        ].filter((element) => element && element.getClientRects().length);

        const first = controls[0];
        const last = controls[controls.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpened, location.pathname, setMenuOpened]);

  return (
    <>
      {menuOpened && (
        <div
          className="menu-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <button
        ref={toggleRef}
        type="button"
        className={`menu-toggle ${menuOpened ? "is-open" : ""}`}
        onClick={() => {
          if (menuOpened) closeMenu();
          else setMenuOpened(true);
        }}
        aria-label={menuOpened ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpened}
        aria-controls={panelId}
      >
        <span />
        <span />
      </button>

      <aside
        ref={panelRef}
        id={panelId}
        className={`portfolio-menu ${menuOpened ? "is-open" : ""}`}
        inert={menuOpened ? undefined : ""}
        aria-label="Site navigation"
      >
        <header className="menu-heading">
          <span className="menu-eyebrow">TYLER RAMANATA</span>
          <p>A little more about me.</p>
        </header>

        <nav className="menu-navigation" aria-label="Main">
          <MenuLink to="/" onClick={closeMenu}>
            Home
          </MenuLink>

          <div className="menu-about">
            <div className="menu-about-row">
              <MenuLink to="/about" onClick={closeMenu}>
                About Me
              </MenuLink>

              <button
                type="button"
                className="menu-chevron"
                aria-label="Toggle About Me options"
                aria-expanded={aboutExpanded}
                aria-controls={aboutId}
                onClick={() => setAboutExpanded((expanded) => !expanded)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                  className={aboutExpanded ? "is-expanded" : ""}
                >
                  <path
                    d="m6 9 6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div id={aboutId} hidden={!aboutExpanded}>
              <div className="menu-submenu">
                <MenuLink to="/health" onClick={closeMenu}>
                  Health
                </MenuLink>
              </div>
            </div>
          </div>

          <MenuLink to="/projects" onClick={closeMenu}>
            Projects
          </MenuLink>

          <MenuLink to="/experience" onClick={closeMenu}>
            Experience
          </MenuLink>
        </nav>

        <footer className="menu-footer">
          <span className="menu-eyebrow">LET’S CONNECT</span>
          <CopyEmailButton />

          <div className="menu-socials">
            <a
              href="https://www.linkedin.com/in/tylerramanata"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              LinkedIn
            </a>

            <a
              href="https://github.com/Tramanata"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
              GitHub
            </a>

            <a
              href="https://leetcode.com/u/tylerramanata/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LeetCodeIcon />
              LeetCode
            </a>
          </div>
        </footer>
      </aside>
    </>
  );
};

const MenuLink = ({ to, onClick, children }) => (
  <NavLink
    to={to}
    end
    onClick={onClick}
    className={({ isActive }) =>
      `menu-link ${isActive ? "is-active" : ""}`
    }
  >
    {children}
  </NavLink>
);

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("tramanata@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button type="button" onClick={copyEmail}>
      {copied ? "Copied!" : "tramanata@gmail.com"}
    </button>
  );
};

const LeetCodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path
      d="m14 3-8 8a5 5 0 0 0 0 7l3 3a5 5 0 0 0 7 0l3-3M8 9l4-4 6 5M11 15h10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);