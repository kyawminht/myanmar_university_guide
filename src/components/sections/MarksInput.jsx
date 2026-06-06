import { useState } from 'react'

export default function MarksInput({ 
  onMarksSubmit, 
  onFourSubjectSubmit, 
  onModeChange,
  initialSixSubjectMarks = 240, 
  initialFourSubjectMarks = 240 
}) {
const [sixSubjectValue, setSixSubjectValue] = useState(initialSixSubjectMarks || 240)
const [fourSubjectValue, setFourSubjectValue] = useState(initialFourSubjectMarks || 240)
  const [activeTab, setActiveTab] = useState('total')
  const [error, setError] = useState('')

  // Handle 6-subject change - triggers filter in real-time
  const handleSixSubjectChange = (value) => {
    const numValue = parseInt(value) || 0
    if (numValue >= 240 && numValue <= 600) {
      setSixSubjectValue(numValue)
      setError('')
      if (onMarksSubmit) {
        onMarksSubmit(numValue)
      }
    } else if (value === '') {
      setSixSubjectValue('')
    } else if (numValue < 240) {
      setSixSubjectValue(240)
      if (onMarksSubmit) {
        onMarksSubmit(240)
      }
    } else if (numValue > 600) {
      setSixSubjectValue(600)
      if (onMarksSubmit) {
        onMarksSubmit(600)
      }
    }
  }

  // Handle slider change for 6-subject - real-time filtering
  const handleSixSubjectSlider = (e) => {
    const value = parseInt(e.target.value)
    setSixSubjectValue(value)
    if (onMarksSubmit) {
      onMarksSubmit(value)
    }
  }

  // Handle 4-subject change - triggers filter in real-time
  const handleFourSubjectChange = (value) => {
    const numValue = parseInt(value) || 0
    if (numValue >= 240 && numValue <= 400) {
      setFourSubjectValue(numValue)
      setError('')
      if (onFourSubjectSubmit) {
        onFourSubjectSubmit(numValue)
      }
    } else if (value === '') {
      setFourSubjectValue('')
    } else if (numValue < 240) {
      setFourSubjectValue(240)
      if (onFourSubjectSubmit) {
        onFourSubjectSubmit(240)
      }
    } else if (numValue > 400) {
      setFourSubjectValue(400)
      if (onFourSubjectSubmit) {
        onFourSubjectSubmit(400)
      }
    }
  }

  // Handle slider change for 4-subject - real-time filtering
  const handleFourSubjectSlider = (e) => {
    const value = parseInt(e.target.value)
    setFourSubjectValue(value)
    if (onFourSubjectSubmit) {
      onFourSubjectSubmit(value)
    }
  }

  return (
    <div className="bg-white dark:bg-dark-card border border-app-border dark:border-dark-border rounded-xl p-5 mb-4 shadow-sm mt-8">
      {/* Tab Selection */}
      <div className="flex gap-2 mb-4 border-b border-app-border dark:border-dark-border pb-2">
        <button
          onClick={() => {
            setActiveTab('total')
            setError('')
            onModeChange?.('6-subjects')
          }}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
            activeTab === 'total'
              ? 'text-app-accent border-b-2 border-app-accent'
              : 'text-app-muted hover:text-app-text'
          }`}
        >
          📚 စုစုပေါင်းအမှတ် (၆ဘာသာ)
        </button>
        <button
          onClick={() => {
            setActiveTab('subjects')
            setError('')
            onModeChange?.('4-subjects')
          }}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
            activeTab === 'subjects'
              ? 'text-app-accent border-b-2 border-app-accent'
              : 'text-app-muted hover:text-app-text'
          }`}
        >
          💻 နည်းပညာတက္ကသိုလ်များ (၄ဘာသာ)
        </button>
      </div>

      {/* 6-Subject Total Input */}
      {activeTab === 'total' && (
        <div>
          <label className="block text-sm text-app-muted dark:text-dark-muted mb-2">
            သင်ရရှိသော စုစုပေါင်းအမှတ် (စုစုပေါင်း ၆ဘာသာ)
          </label>
          
          <div className="flex gap-3 items-stretch">
            <input
              type="number"
              min="240"
              max="600"
              value={sixSubjectValue}
              onChange={(e) => handleSixSubjectChange(e.target.value)}
              placeholder="ဥပမာ — 480"
              className="flex-1 h-[52px] border-1.5 border-app-border dark:border-dark-border rounded-lg px-4 font-bold text-xl bg-app-bg dark:bg-dark-bg text-app-text dark:text-dark-text focus:border-app-accent outline-none transition-colors"
            />
          </div>

          {/* Slider with 240-600 range */}
          <div className="flex items-center gap-3 mt-3">
            <span className="text-xs font-medium text-app-muted">၂၄၀</span>
            <input
              type="range"
              min="240"
              max="600"
              step="1"
              value={sixSubjectValue || 240}
              onChange={handleSixSubjectSlider}
              className="flex-1 accent-app-accent h-2"
              aria-label="အမှတ် slider"
            />
            <span className="text-xs font-medium text-app-muted">၆၀၀</span>
            <span className="text-sm font-bold text-app-accent min-w-[40px] text-right">
              {sixSubjectValue || '—'}
            </span>
          </div>
          
        </div>
      )}

      {/* 4-Subject Input - Simplified */}
      {activeTab === 'subjects' && (
        <div>
          <div className="mb-3">
            <p className="text-sm font-medium text-app-text mb-1">
              နည်းပညာတက္ကသိုလ်များအတွက် အမှတ်
            </p>
            <p className="text-xs text-app-muted">
              ရူပ + ဓာတု + သင်္ချာ + အင်္ဂလိပ် (၄ဘာသာ) ပေါင်းအမှတ်
            </p>
          </div>
          
          <div className="flex gap-3 items-stretch">
            <input
              type="number"
              min="240"
              max="400"
              value={fourSubjectValue}
              onChange={(e) => handleFourSubjectChange(e.target.value)}
              placeholder="ဥပမာ — 320"
              className="flex-1 h-[52px] border-1.5 border-app-border dark:border-dark-border rounded-lg px-4 font-bold text-xl bg-app-bg dark:bg-dark-bg text-app-text dark:text-dark-text focus:border-app-accent outline-none transition-colors"
            />
          </div>

          {/* Slider with 240-400 range */}
          <div className="flex items-center gap-3 mt-3">
            <span className="text-xs font-medium text-app-muted">၂၄၀</span>
            <input
              type="range"
              min="240"
              max="400"
              step="1"
              value={fourSubjectValue || 240}
              onChange={handleFourSubjectSlider}
              className="flex-1 accent-app-accent h-2"
              aria-label="နည်းပညာတက္ကသိုလ် အမှတ် slider"
            />
            <span className="text-xs font-medium text-app-muted">၄၀၀</span>
            <span className="text-sm font-bold text-app-accent min-w-[40px] text-right">
              {fourSubjectValue || '—'}
            </span>
          </div>
        </div>
      )}

      {error && (
        <p className="mt-3 text-sm text-red-500" role="alert">
          ⚠️ {error}
        </p>
      )}
    </div>
  )
}
