import React, { useState, useEffect } from "react";

export default function ColorPaletteTester() {
  const [dark, setDark] = useState(false);

  // Thêm hoặc bỏ class 'dark' trên <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  // Các màu biến CSS bạn muốn show ở bảng màu (bạn chỉnh sửa theo thực tế)
  const colors = [
    { name: "Primary", varName: "--color-primary" },
    { name: "Primary Content", varName: "--color-primary-content" },
    { name: "Secondary", varName: "--color-secondary" },
    { name: "Secondary Content", varName: "--color-secondary-content" },
    { name: "Accent", varName: "--color-accent" },
    { name: "Accent Content", varName: "--color-accent-content" },
    { name: "Neutral", varName: "--color-neutral" },
    { name: "Neutral Content", varName: "--color-neutral-content" },
    { name: "Base 100", varName: "--color-base-100" },
    { name: "Base Content", varName: "--color-base-content" },
    { name: "Info", varName: "--color-info" },
    { name: "Info Content", varName: "--color-info-content" },
    { name: "Success", varName: "--color-success" },
    { name: "Success Content", varName: "--color-success-content" },
    { name: "Warning", varName: "--color-warning" },
    { name: "Warning Content", varName: "--color-warning-content" },
    { name: "Error", varName: "--color-error" },
    { name: "Error Content", varName: "--color-error-content" },
  ];

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300 bg-[var(--color-base-100)] text-[var(--color-base-content)]`}
    >
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">🎨 Color Palette Tester</h1>
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 border rounded-lg"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-primary-content)",
          }}
        >
          Toggle {dark ? "Light" : "Dark"} Mode
        </button>
      </header>

      <nav
        className="flex gap-4 p-4 mb-6 rounded"
        style={{
          backgroundColor: "var(--color-neutral)",
          color: "var(--color-neutral-content)",
          userSelect: "none",
        }}
      >
        <a
          href="#"
          className="hover:underline focus:outline-2 focus:outline-offset-2"
          tabIndex={0}
        >
          Home
        </a>
        <a
          href="#"
          className="hover:underline focus:outline-2 focus:outline-offset-2"
          tabIndex={0}
        >
          About
        </a>
        <a
          href="#"
          className="hover:underline focus:outline-2 focus:outline-offset-2"
          tabIndex={0}
        >
          Contact
        </a>
      </nav>

      <section className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4">
        {colors.map(({ name, varName }) => (
          <div
            key={varName}
            className="p-4 text-sm border shadow rounded-xl"
            style={{
              backgroundColor: `var(${varName})`,
              borderColor: `var(--color-base-300)`,
              color: [
                "--color-base-100",
                "--color-base-200",
                "--color-base-300",
              ].includes(varName)
                ? "var(--color-base-content)"
                : "white",
            }}
          >
            <span className="block font-semibold">{name}</span>
            <span className="text-[var(--color-neutral-content)]">
              {varName}
            </span>
          </div>
        ))}
      </section>

      <main>
        <h1 className="text-4xl font-bold mb-2 text-[var(--color-primary)]">
          Heading 1 - Primary Color
        </h1>
        <h2 className="mb-2 text-3xl font-semibold">Heading 2</h2>
        <h3 className="mb-2 text-2xl font-medium">Heading 3</h3>
        <h4 className="mb-2 text-xl font-medium">Heading 4</h4>
        <h5 className="mb-2 text-lg font-normal">Heading 5</h5>
        <h6 className="mb-4 text-base font-normal">Heading 6</h6>

        <p className="mb-4">
          This is a paragraph with the base content color. Here's a{" "}
          <a
            href="#"
            className="text-[var(--color-primary)] hover:underline focus:outline-2 focus:outline-offset-2"
          >
            link
          </a>{" "}
          to test link styles.
        </p>

        <button
          type="button"
          onClick={() => setDark((d) => !d)}
          className="cursor-pointer border-none bg-none p-0 text-[var(--color-primary)] underline-offset-2 focus:outline-2 focus:outline-offset-2"
        >
          Toggle Dark Mode
        </button>
      </main>
    </div>
  );
}
