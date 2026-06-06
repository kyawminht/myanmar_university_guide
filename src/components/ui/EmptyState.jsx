export default function EmptyState({ message }) {
  return (
    <div className="text-center py-10 px-5 text-app-muted dark:text-dark-muted">
      <div className="text-4xl mb-3 opacity-40" aria-hidden="true">📋</div>
      <p className="text-sm">{message}</p>
      <p className="text-xs mt-1 opacity-70">No universities found for this category</p>
    </div>
  )
}