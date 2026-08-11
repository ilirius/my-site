const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "Обо мне" },
  { id: "skills", label: "Навыки" },
  { id: "portfolio", label: "Портфолио" },
  { id: "contact", label: "Контакты" },
] as const;

export function NavLinks() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
        background: "rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`/#${s.id === "home" ? "" : s.id}`}
              style={{
                color: "inherit",
                fontSize: "1rem",
              }}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
