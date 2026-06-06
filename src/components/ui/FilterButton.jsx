export default function FilterButton({ isActive, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`
        text-xs px-3 py-1.5 rounded-full border font-myanmar transition-all
        ${isActive 
          ? 'bg-app-accent text-white border-app-accent' 
          : 'bg-white dark:bg-dark-card text-app-muted dark:text-dark-muted border-app-border dark:border-dark-border hover:border-app-accent'
        }
      `}
    >
      {label}
    </button>
  )
}