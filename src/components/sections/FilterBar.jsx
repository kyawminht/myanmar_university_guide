import FilterButton from '../ui/FilterButton'
import { typeLabels } from '../../lib/utils'

export default function FilterBar({ currentFilter, onFilterChange, types, totalEligible }) {
  return (
    <div className="flex gap-2 mb-4 flex-wrap" role="group" aria-label="တက္ကသိုလ်အမျိုးအစား စစ်ထုတ်ရန်">
      <FilterButton
        isActive={currentFilter === 'all'}
        onClick={() => onFilterChange('all')}
        label={`အားလုံး (${totalEligible})`}
      />
      {types.map(type => (
        <FilterButton
          key={type}
          isActive={currentFilter === type}
          onClick={() => onFilterChange(type)}
          label={typeLabels[type] || type}
        />
      ))}
    </div>
  )
}