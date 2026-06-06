export default function Header() {
  return (
    <header className="bg-app-accent text-white py-7 px-6 relative overflow-hidden">
      <div className="absolute right-[-40px] top-[-40px] w-[200px] h-[200px] rounded-full bg-white/5" />
      <div className="absolute left-[-20px] bottom-[-30px] w-[120px] h-[120px] rounded-full bg-white/5" />
      
      <p className="text-xs tracking-[2px] opacity-70 uppercase mb-2">
        မြန်မာနိုင်ငံ · တက္ကသိုလ်ဝင်ခွင့်
      </p>
      <h2 className="text-2xl font-bold leading-tight mb-1">
        တက္ကသိုလ် ဝင်ခွင့်လမ်းညွှန်
      </h2>
      <p className="text-sm opacity-75 mt-2">
        University Admission Checker · စုစုပေါင်းအမှတ် ထည့်ပါ
      </p>
    </header>
  )
}