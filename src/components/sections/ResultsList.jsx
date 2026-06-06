import UniversityCard from '../university/UniversityCard'

export default function ResultsList({ universities, marks }) {
  const userMarks = typeof marks === 'number' ? {
    '6-subjects': marks,
    '4-subjects': marks,
    '2-subjects': 0
  } : {
    '6-subjects': 240,
    '4-subjects': 240,
    '2-subjects': 0,
    ...(marks || {})
  }

  const techUniversities = universities.filter(u => u.subjectCombination === '4-subjects')
  const otherUniversities = universities.filter(u => u.subjectCombination !== '4-subjects')

  const techCount = techUniversities.length
  const otherCount = otherUniversities.length

  return (
    <div className="space-y-4">
      {/* Results Count */}
      <div className="text-sm text-app-muted flex justify-between items-center">
        <span>
          တွေ့ရှိရသော တက္ကသိုလ်ပေါင်း {universities.length} ခု
          {techCount > 0 && ` (နည်းပညာ: ${techCount}၊ အခြား: ${otherCount})`}
        </span>
      </div>

      {/* Show message if no results */}
      {universities.length === 0 && (
        <div className="text-center py-8 text-app-muted bg-white dark:bg-dark-card rounded-xl">
          သင့်အမှတ်နှင့် ကိုက်ညီသော တက္ကသိုလ်မရှိပါ
        </div>
      )}

      {/* University Cards */}
      <div className="space-y-3">
        {universities.map(university => (
          <UniversityCard
            key={university.id}
            university={university}
            userMarks={userMarks}
          />
        ))}
      </div>
    </div>
  )
}
