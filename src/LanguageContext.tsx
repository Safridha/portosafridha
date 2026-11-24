import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Language = 'en' | 'id'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() =>
    localStorage.getItem('portfolio-language') === 'id' ? 'id' : 'en',
  )

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
    document.title =
      language === 'id'
        ? 'Safridha Audi — Pengembang Web & Analis Data'
        : 'Safridha Audi — Web Developer & Data Analyst'

    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute(
      'content',
      language === 'id'
        ? 'Portofolio Safridha Audi Apriliasunfity — pengembangan web, full-stack, dan analisis data.'
        : 'The portfolio of Safridha Audi Apriliasunfity — web development, full-stack engineering, and data analytics.',
    )
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
