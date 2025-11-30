import React, { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { useDashboardStore } from "./dashboardStore"
import { fetchSummary, fetchActivity } from "./dashboardApi"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

// ---------- Reusable UI primitives ----------

const Card = ({ title, children, footer }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: 12,
      padding: 16,
      boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
    }}
  >
    {title && (
      <div style={{ fontWeight: 600, fontSize: 14, color: "#111827" }}>
        {title}
      </div>
    )}
    <div style={{ flex: 1 }}>{children}</div>
    {footer && (
      <div style={{ marginTop: 8, fontSize: 12, color: "#6B7280" }}>
        {footer}
      </div>
    )}
  </div>
)

const Stat = ({ label, value, accent }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
    <span style={{ fontSize: 12, color: "#6B7280" }}>{label}</span>
    <span style={{ fontSize: 20, fontWeight: 600, color: accent || "#111827" }}>
      {value}
    </span>
  </div>
)

// ---------- Global filters (Zustand) ----------

const FiltersBar = () => {
  const { dateRange, setDateRange, selectedUserId, setSelectedUserId } =
    useDashboardStore()

  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", gap: 8 }}>
        <button
          type="button"
          onClick={() => setDateRange("7d")}
          style={{
            padding: "6px 12px",
            borderRadius: 999,
            border: "1px solid #E5E7EB",
            background: dateRange === "7d" ? "#111827" : "#fff",
            color: dateRange === "7d" ? "#fff" : "#111827",
            fontSize: 12,
            cursor: "pointer",
          }}
        >
          Last 7 days
        </button>
        <button
          type="button"
          onClick={() => setDateRange("30d")}
          style={{
            padding: "6px 12px",
            borderRadius: 999,
            border: "1px solid #E5E7EB",
            background: dateRange === "30d" ? "#111827" : "#fff",
            color: dateRange === "30d" ? "#fff" : "#111827",
            fontSize: 12,
            cursor: "pointer",
          }}
        >
          Last 30 days
        </button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 12, color: "#6B7280" }}>Filter by User ID:</span>
        <input
          type="number"
          placeholder="e.g. 1"
          value={selectedUserId ?? ""}
          onChange={(e) =>
            setSelectedUserId(
              e.target.value === "" ? null : Number(e.target.value)
            )
          }
          style={{
            width: 70,
            padding: "4px 8px",
            fontSize: 12,
            borderRadius: 6,
            border: "1px solid #D1D5DB",
          }}
        />
      </div>
    </div>
  )
}

// ---------- Dashboard data sections ----------

const KpiGrid = React.memo(function KpiGrid({ summary }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: 12,
      }}
    >
      <Card>
        <Stat label="Total Posts" value={summary.totalPosts} />
      </Card>
      <Card>
        <Stat label="Total Todos" value={summary.totalTodos} />
      </Card>
      <Card>
        <Stat
          label="Completed Todos"
          value={summary.completedTodos}
          accent="#059669"
        />
      </Card>
    </div>
  )
})

const SalesChart = React.memo(function SalesChart({ data }) {
  // `data` is already memoized by the parent
  return (
    <Card title="Engagement trend">
      <div style={{ height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
})

const ActivityList = React.memo(function ActivityList({ items }) {
  return (
    <Card title="Recent Activity">
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              padding: 8,
              borderRadius: 8,
              border: "1px solid #E5E7EB",
              background: "#F9FAFB",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 8,
                marginBottom: 4,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#111827",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "80%",
                }}
              >
                {item.title}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: "#6B7280",
                  whiteSpace: "nowrap",
                }}
              >
                User #{item.userId}
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                color: "#4B5563",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </Card>
  )
})

// ---------- Main Dashboard container ----------

export default function Dashboard() {
  const { dateRange, selectedUserId } = useDashboardStore()

  // React Query: summary
  const summaryQuery = useQuery({
    queryKey: ["summary", { dateRange }],
    queryFn: () => fetchSummary({ dateRange }),
  })

  // React Query: activity list
  const activityQuery = useQuery({
    queryKey: ["activity", { selectedUserId }],
    queryFn: () => fetchActivity({ userId: selectedUserId }),
  })

  const chartData = useMemo(
    () => summaryQuery.data?.series ?? [],
    [summaryQuery.data]
  )

  const isLoading = summaryQuery.isLoading || activityQuery.isLoading
  const isError = summaryQuery.isError || activityQuery.isError

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F3F4F6",
        padding: 24,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
      }}
    >
      <header
        style={{
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>
          Mini Analytics Dashboard
        </h1>
        <span style={{ fontSize: 12, color: "#6B7280" }}>
          React Query + Zustand + memoized UI
        </span>
      </header>

      <FiltersBar />

      {isLoading && (
        <div style={{ fontSize: 14, color: "#6B7280" }}>Loading dashboard…</div>
      )}

      {isError && (
        <div style={{ fontSize: 14, color: "#DC2626" }}>
          Something went wrong. Try refreshing.
        </div>
      )}

      {!isLoading && !isError && summaryQuery.data && activityQuery.data && (
        <div style={{ display: "grid", gap: 16 }}>
          <KpiGrid summary={summaryQuery.data} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.5fr)",
              gap: 16,
            }}
          >
            <SalesChart data={chartData} />
            <ActivityList items={activityQuery.data} />
          </div>
        </div>
      )}
    </div>
  )
}
