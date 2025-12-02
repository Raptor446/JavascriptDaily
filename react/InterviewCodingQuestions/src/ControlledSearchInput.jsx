import { useMemo, useState } from "react"

const ITEMS = [
  "React",
  "Vue",
  "Angular",
  "Svelte",
  "Solid",
  "Next.js",
  "Remix",
]

export default function SearchableList() {
  const [query, setQuery] = useState("")

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return ITEMS
    return ITEMS.filter((item) => item.toLowerCase().includes(q))
  }, [query])

  return (
    <div
      style={{
        maxWidth: 320,
        margin: "40px auto",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
      }}
    >
      <label
        style={{
          display: "block",
          marginBottom: 8,
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        Search frameworks
      </label>

      <input
        type="text"
        value={query}                 // ✅ controlled value
        onChange={(e) => setQuery(e.target.value)} // ✅ controlled onChange
        placeholder="Type to filter…"
        style={{
          width: "100%",
          padding: "8px 10px",
          borderRadius: 6,
          border: "1px solid #d1d5db",
          fontSize: 14,
          marginBottom: 12,
        }}
      />

      <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 4 }}>
        Showing {filteredItems.length} of {ITEMS.length}
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          borderRadius: 6,
          border: "1px solid #e5e7eb",
          overflow: "hidden",
        }}
      >
        {filteredItems.map((item) => (
          <li
            key={item}
            style={{
              padding: "8px 10px",
              borderBottom: "1px solid #e5e7eb",
              fontSize: 14,
            }}
          >
            {item}
          </li>
        ))}

        {filteredItems.length === 0 && (
          <li style={{ padding: "8px 10px", fontSize: 14, color: "#6b7280" }}>
            No matches found.
          </li>
        )}
      </ul>
    </div>
  )
}
