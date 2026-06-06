import Badge from '../ui/Badge'

export default function UniversityHeader({ university, userMarks = {} }) {
  const safeUserMarks = userMarks || {}

  if (!university) return null

  const requiredMarks = university.requiredMarks

  let userMarkForMode = 0

  if (university.subjectCombination === '4-subjects') {
    userMarkForMode = safeUserMarks['4-subjects'] || 0
  } else if (university.subjectCombination === '6-subjects-or-2') {
    userMarkForMode = safeUserMarks['6-subjects'] || 0
  } else {
    userMarkForMode = safeUserMarks['6-subjects'] || 0
  }

  if (requiredMarks === null || requiredMarks === undefined) {
    return (
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
            style={{ backgroundColor: typeColors[university.type] || '#E8F4EE' }}
          >
            {university.icon}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold leading-tight">
              {university.nameMy}
            </h3>
            <p className="text-xs text-app-muted dark:text-dark-muted mt-1">
              {university.nameEn}
            </p>
          </div>
        </div>
      </div>
    )
  }

  const isEligible = userMarkForMode >= requiredMarks
  const percentage = requiredMarks > 0 ? Math.min(100, (userMarkForMode / requiredMarks) * 100) : 0

  return (
    <div className="p-4">
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
          style={{ backgroundColor: typeColors[university.type] || '#E8F4EE' }}
        >
          {university.icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold leading-tight">
            {university.nameMy}
          </h3>
          <p className="text-xs text-app-muted dark:text-dark-muted mt-1">
            {university.nameEn}
          </p>
        </div>
      </div>

      <div className="flex gap-2 mt-3 flex-wrap items-center">
        <Badge className="bg-app-accent-light dark:bg-dark-accent-light text-app-accent text-xs">
          လိုအပ်ချက် {requiredMarks}
        </Badge>

        <Badge className={`text-xs ${isEligible ? 'bg-app-teal/10 text-app-teal' : 'bg-red-50 text-red-600'}`}>
          သင့်အမှတ် {userMarkForMode}
        </Badge>
      </div>

      {(university.type === 'medical' || university.type === 'dental') && (
        <div className="mt-3 text-xs text-amber-700 bg-amber-50 px-3 py-2 rounded leading-relaxed">
          <p>
            ၂၀၂၅ ခုနှစ် တက္ကသိုလ်ဝင်စာမေးပွဲတွင် (၆)ဘာသာ အမှတ်စုစုပေါင်း (၄၅၀) နှင့်အထက် ရှိသူဖြစ်ရမည်။
          </p>
          <p className="mt-1">
            အဆိုပါ (၆)ဘာသာ အမှတ်စုစုပေါင်း (၄၅၀) နှင့်အထက် ရှိသူများအနက် အင်္ဂလိပ်စာ၊ ဓာတုဗေဒ၊ ဇီဝဗေဒ (၃)ဘာသာပေါင်းမှတ် အများ/အနည်းပေါ် မူတည်၍ ပဏာမအဆင့် ရွေးချယ်သွားမည်။
          </p>
          <p className="mt-1">
            လူတွေ့/နှုတ်မေးစာမေးပွဲ ထပ်မံဖြေဆိုရမည်။
          </p>
        </div>
      )}

      {university.specialRequirements && university.type !== 'medical' && (
        <p className="mt-3 text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
          {university.specialRequirements.length > 600
            ? `${university.specialRequirements.substring(0, 100)}...`
            : university.specialRequirements}
        </p>
      )}
    </div>
  )
}

const typeColors = {
  medical: '#E8F4EE',
  computer: '#EAF1FA',
  technology: '#EEEAFA',
  economics: '#FAEEE7',
  education: '#E1F5EE',
  science: '#EAF1FA',
  vocational: '#F1EFE8',
  dental: '#E8F4EE',
  pharmacy: '#E8F4EE',
  medical_tech: '#E8F4EE',
  nursing: '#E8F4EE',
  health: '#E8F4EE',
  traditional_medicine: '#E8F4EE',
  technical_college: '#F1EFE8',
  polytechnic: '#EEEAFA',
  maritime: '#EAF1FA',
  languages: '#FAEEE7',
  arts_science: '#EAF1FA',
  education_college: '#E1F5EE'
}
