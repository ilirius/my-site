import { NavLinks } from "@/src/widgets/navigation";

function SectionStub({ id, title, isHero }: { id: string; title: string; isHero?: boolean }) {
  const Tag = isHero ? "header" : "section";
  return (
    <Tag
      id={id}
      style={{
        minHeight: isHero ? "100vh" : "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        borderBottom: "1px solid #333",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {isHero ? (
        <h1 style={{ fontSize: "3rem", margin: 0 }}>{title}</h1>
      ) : (
        <h2 style={{ fontSize: "2rem", margin: 0 }}>{title}</h2>
      )}
      <p style={{ color: "#666", marginTop: "0.5rem" }}>
        {isHero
          ? "Персональное портфолио Ивана Гаврилова — Front-End Developer"
          : `[Контент секции «${title}» будет перенесён из src/]`}
      </p>
    </Tag>
  );
}

export default function Home() {
  return (
    <>
      <NavLinks />
      <SectionStub id="home" title="Pixel & Code" isHero />
      <SectionStub id="about" title="Обо мне" />
      <SectionStub id="skills" title="Навыки" />
      <SectionStub id="portfolio" title="Портфолио" />
      <SectionStub id="contact" title="Контакты" />
    </>
  );
}
