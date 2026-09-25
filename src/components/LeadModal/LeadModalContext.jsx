import { createContext, useCallback, useContext, useState } from 'react'

/**
 * Lets any button anywhere in the tree open the lead popup without prop
 * drilling. The default value is a no-op so Button.jsx can call
 * useLeadModal() safely even on a page (like /analytics-starter) that never
 * renders <LeadModalProvider> — it just won't have anything to open there.
 */
const LeadModalContext = createContext({
  isOpen: false,
  source: null,
  openModal: () => {},
  closeModal: () => {},
})

export function LeadModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  // Which section's button opened the popup (see Button.jsx) — carried
  // through to LeadForm so the submission records where the lead came from.
  const [source, setSource] = useState(null)
  const openModal = useCallback((s) => {
    setSource(s || 'unknown')
    setIsOpen(true)
  }, [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  return (
    <LeadModalContext.Provider value={{ isOpen, source, openModal, closeModal }}>
      {children}
    </LeadModalContext.Provider>
  )
}

export function useLeadModal() {
  return useContext(LeadModalContext)
}
