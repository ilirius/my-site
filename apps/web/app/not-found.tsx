import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>404 — Страница не найдена</h1>
      <p>Запрошенная страница не существует.</p>
      <Link href="/">← На главную</Link>
    </main>
  );
}
