/**
 * Filter universities based on marks and type filter
 * @param {Array} universities - Array of university objects
 * @param {number} marks - Student's total marks
 * @param {string} filter - Type filter ('all', 'medical', 'computer', etc.)
 * @returns {Array} Filtered and sorted universities
 */
/**
 * Filter universities based on marks and type filter
 * @param {Array} universities - Array of university objects
 * @param {Object|number} marks - Student's marks (object with 6-subjects, 4-subjects, 2-subjects OR a single number for legacy)
 * @param {string} filter - Type filter ('all', 'medical', 'computer', etc.)
 * @param {string} marksMode - Current marks mode ('6-subjects' or '4-subjects')
 * @returns {Array} Filtered and sorted universities
 */
export function filterUniversities(universities, marks, filter = 'all', marksMode = '6-subjects') {
  if (!marks && marks !== 0) return []

  // Helper to check if university matches current marks mode
  const matchesMarksMode = (university) => {
    // For 4-subjects mode: only show universities that use 4-subjects OR have dual path
    if (marksMode === '4-subjects') {
      return university.subjectCombination === '4-subjects' || 
             university.subjectCombination === 'multiple'
    }
    
    // For 6-subjects mode: only show universities that use 6-subjects OR have dual path
    return university.subjectCombination === '6-subjects' || 
           university.subjectCombination === '6-subjects-or-2' ||
           university.subjectCombination === 'multiple'
  }

  // Helper to get user's marks for this university
  const getUserMarks = (university) => {
    // Legacy support for number marks
    if (typeof marks === 'number') return marks
    
    // For 4-subject universities
    if (university.subjectCombination === '4-subjects') {
      return marks['4-subjects'] || 0
    }
    
    // For dual path universities (computer)
    if (university.subjectCombination === '6-subjects-or-2') {
      return {
        sixSubject: marks['6-subjects'] || 0,
        twoSubject: marks['2-subjects'] || 0
      }
    }
    
    // Default: use 6-subjects
    return marks['6-subjects'] || 0
  }

  // Helper to check if university meets marks requirement
  const meetsRequirement = (university) => {
    // No required marks means competitive entry
    if (university.requiredMarks === null || university.requiredMarks === undefined) {
      return true
    }
    
    // Handle dual path universities (Computer universities)
    if (university.subjectCombination === '6-subjects-or-2') {
      const userMarks = getUserMarks(university)
      const requiredMarks = university.requiredMarks || 450
      const alternativeRequired = university.alternativePath?.requiredMarks || 140
      
      // Check either 6-subjects path OR 2-subjects path
      return (marks['6-subjects'] || 0) >= requiredMarks ||
             (marks['2-subjects'] || 0) >= alternativeRequired
    }
    
    // Handle multiple combination universities (Naypyitaw Polytechnic)
    if (university.subjectCombination === 'multiple') {
      // Check if any major meets the requirement
      return university.majors?.some(major => {
        if (major.subjectCombination === '4-subjects') {
          return (marks['4-subjects'] || 0) >= (major.requiredMarks || university.requiredMarks || 240)
        } else if (major.subjectCombination === '6-subjects-or-2') {
          return (marks['6-subjects'] || 0) >= (major.requiredMarks || 450) ||
                 (marks['2-subjects'] || 0) >= (major.alternativeRequiredMarks || 140)
        } else {
          return (marks['6-subjects'] || 0) >= (major.requiredMarks || university.requiredMarks || 350)
        }
      }) || false
    }
    
    // Standard universities: compare user marks with required marks
    const userMarks = getUserMarks(university)
    const requiredMarks = university.requiredMarks || 350
    
    return userMarks >= requiredMarks
  }

  // First filter by marks mode and requirement
  let eligible = universities.filter(u => {
    if (!matchesMarksMode(u)) return false
    return meetsRequirement(u)
  })
  
  // Then filter by type if not 'all'
  if (filter !== 'all') {
    eligible = eligible.filter(u => u.type === filter)
  }
  
  // Sort by required marks (highest first), handling null values
  return eligible.sort((a, b) => {
    const aMarks = a.requiredMarks ?? 0
    const bMarks = b.requiredMarks ?? 0
    return bMarks - aMarks
  })
}

/**
 * Get unique university types from a list of universities
 * @param {Array} universities - Array of university objects
 * @returns {Array} Array of unique type strings
 */
export function getUniqueTypes(universities) {
  return [...new Set(universities.map(u => u.type))]
}

/**
 * Type labels in Myanmar language
 */
export const typeLabels = {
  medical: 'ဆေးပညာ',
  computer: 'ကွန်ပျူတာ',
  technology: 'နည်းပညာ',
  economics: 'စီးပွားရေး',
  education: 'ပညာရေး',
  science: 'သိပ္ပံ',
  vocational: 'ပညာသင်ဆင်း',
  aerospace: 'လေကြောင်းနှင့် အာကာသပညာ' ,
  'သတင်းအချက်အလက်နည်းပညာ': 'သတင်းအချက်အလက်နည်းပညာ',
  'သိပ္ပံနှင့်ဝိဇ္ဇာ - ရန်ကုန်': 'သိပ္ပံနှင့်ဝိဇ္ဇာ (ရန်ကုန်)',
  'သိပ္ပံနှင့်ဝိဇ္ဇာ - မန္တလေး': 'သိပ္ပံနှင့်ဝိဇ္ဇာ (မန္တလေး)',
  'သိပ္ပံနှင့်ဝိဇ္ဇာ - နေပြည်တော်': 'သိပ္ပံနှင့်ဝိဇ္ဇာ (နေပြည်တော်)',
    'အထူးဝင်ခွင့်': 'အထူးဝင်ခွင့် (သတင်းစာကြော်ငြာ)'
}

typeLabels.technical_college = 'အစိုးရနည်းပညာကောလိပ်'
typeLabels.polytechnic = 'Polytechnic'

/**
 * Check if marks fall within warning range (close to medicine threshold)
 * @param {number} marks - Student's total marks
 * @returns {boolean}
 */
export function shouldShowWarning(marks) {
  return marks >= 450 && marks <= 490
}

/**
 * Get color for university type icon background
 * @param {string} type - University type
 * @returns {string} Hex color code
 */
export const typeColors = {
  medical: '#E8F4EE',
  computer: '#EAF1FA',
  technology: '#EEEAFA',
  economics: '#FAEEE7',
  education: '#E1F5EE',
  science: '#EAF1FA',
  vocational: '#F1EFE8',
  aerospace: '#D1E8F5',
'သတင်းအချက်အလက်နည်းပညာ': '#D1E8F5',
'သိပ္ပံနှင့်ဝိဇ္ဇာ - ရန်ကုန်': '#EAF1FA',
  'သိပ္ပံနှင့်ဝိဇ္ဇာ - မန္တလေး': '#E8F4EE',
   'သိပ္ပံနှင့်ဝိဇ္ဇာ - နေပြည်တော်': '#EEEAFA',
}

/**
 * Format marks comparison result
 * @param {number} marks - Student's marks
 * @param {number} required - Required marks for university
 * @returns {Object} Status object with label and style class
 */
export function getMarksStatus(marks, required) {
  const isExact = marks === required
  const surplus = marks - required
  
  if (isExact) {
    return {
      label: '⚠️ အတိအကျ',
      className: 'bg-app-gold-light dark:bg-dark-gold-light text-app-gold'
    }
  }
  
  if (surplus > 20) {
    return {
      label: '✓ ပြည့်မီသည်',
      className: 'bg-green-100 dark:bg-green-900/20 text-app-teal'
    }
  }
  
  return {
    label: 'ပြည့်မီနေသည်',
    className: 'bg-app-gold-light dark:bg-dark-gold-light text-app-gold'
  }
}

/**
 * Capitalize first letter of a string
 * @param {string} str - Input string
 * @returns {string} Capitalized string
 */
export function capitalize(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}
