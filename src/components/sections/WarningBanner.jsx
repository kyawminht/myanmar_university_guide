import { shouldShowWarning } from '../../lib/utils'

export default function WarningBanner({ marks }) {
  if (!shouldShowWarning(marks)) return null
  
  return (
    <div 
      className="bg-app-accent2-light dark:bg-dark-accent2-light border border-red-300 dark:border-red-800 rounded-lg p-3 mb-4 text-xs text-app-accent2 leading-relaxed"
      role="alert"
    >
      ⚠️ မှတ်ချက် — ဆေးတက္ကသိုလ်(ရန်ကုန်)အတွက် အမှတ် ၄၅၀ သို့မဟုတ် ပိုများနိုင်ပါသည်
      <br />
      <span className="opacity-75">Note: University of Medicine (Yangon) requires exactly 480 marks or above</span>
    </div>
  )
}