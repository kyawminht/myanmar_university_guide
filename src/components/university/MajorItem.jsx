import Badge from '../ui/Badge'

export default function MajorItem({ major }) {
  if (major.ok === 'competitive') {
    return (
      <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-app-bg dark:hover:bg-dark-bg transition-colors">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-app-text dark:text-dark-text">
              {major.nameMy}
            </span>
            {major.nameEn && (
              <span className="text-xs text-app-muted dark:text-dark-muted">
                ({major.nameEn})
              </span>
            )}
          </div>
          <div className="flex gap-3 mt-1 text-xs text-app-muted dark:text-dark-muted">
            {major.code && <span>{major.code}</span>}
            {major.durationYears && <span>{major.durationYears} နှစ်</span>}
          </div>
        </div>

        <Badge className="bg-app-gold-light text-app-gold text-xs">
          ယှဉ်ပြိုင်
        </Badge>
      </div>
    )
  }

  const isEligible = major.ok === true

  return (
    <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-app-bg dark:hover:bg-dark-bg transition-colors">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-sm font-medium ${isEligible ? 'text-app-text dark:text-dark-text' : 'text-app-muted dark:text-dark-muted'}`}>
            {major.nameMy}
          </span>
          {major.nameEn && (
            <span className="text-xs text-app-muted dark:text-dark-muted">
              ({major.nameEn})
            </span>
          )}
        </div>
        <div className="flex gap-3 mt-1 text-xs text-app-muted dark:text-dark-muted">
          {major.code && <span>{major.code}</span>}
          {major.durationYears && <span>{major.durationYears} နှစ်</span>}
          <span className={isEligible ? 'text-app-teal' : 'text-app-muted'}>
            {major.req}+
          </span>
        </div>
      </div>

      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isEligible ? 'bg-app-teal' : 'bg-red-400'}`} />
    </div>
  )
}
