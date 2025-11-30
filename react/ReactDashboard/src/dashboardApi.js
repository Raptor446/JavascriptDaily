const API_BASE = "https://jsonplaceholder.typicode.com"

export async function fetchSummary() {
  // Fake: use posts length & todos completion as “metrics”
  const [postsRes, todosRes] = await Promise.all([
    fetch(`${API_BASE}/posts`),
    fetch(`${API_BASE}/todos`),
  ])

  if (!postsRes.ok || !todosRes.ok) {
    throw new Error("Failed to fetch dashboard data")
  }

  const posts = await postsRes.json()
  const todos = await todosRes.json()

  const completedTodos = todos.filter((t) => t.completed).length

  return {
    totalPosts: posts.length,
    totalTodos: todos.length,
    completedTodos,
    // fake trend line data for chart
    series: Array.from({ length: 7 }).map((_, i) => ({
      day: `D-${6 - i}`,
      value: Math.round(Math.random() * 100),
    })),
  }
}

export async function fetchActivity({ userId }) {
  const url = userId
    ? `${API_BASE}/posts?userId=${userId}`
    : `${API_BASE}/posts`

  const res = await fetch(url)
  if (!res.ok) throw new Error("Failed to fetch activity")
  const posts = await res.json()

  // Trim to recent 10
  return posts.slice(0, 10).map((p) => ({
    id: p.id,
    title: p.title,
    body: p.body,
    userId: p.userId,
  }))
}
