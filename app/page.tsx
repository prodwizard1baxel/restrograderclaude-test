export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        gap: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        RestroGrader
      </h1>
      <p
        style={{
          fontSize: "1.25rem",
          color: "#666",
          maxWidth: "600px",
          textAlign: "center",
          lineHeight: 1.6,
        }}
      >
        A restaurant grading and review platform. Rate, review, and discover
        the best dining experiences.
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            background: "#171717",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: 500,
            transition: "opacity 0.2s",
          }}
        >
          Deploy on Vercel
        </a>
      </div>
    </main>
  )
}
