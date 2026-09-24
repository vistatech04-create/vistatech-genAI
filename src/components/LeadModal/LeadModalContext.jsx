import { createContext, useCallback, useContext, useState } from 'react'

/**
 * Lets any button anywhere in the tree open the lead popup without prop
 * drilling. The default value is a no-op so Button.jsx can call
 * useLeadModal() safely even on a page (like /analytics-starter) that never
 * renders <LeadModalProvider> — it just won't have anything to open there.
 */
const LeadModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
})

export function LeadModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  return (
    <LeadModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </LeadModalContext.Provider>
  )
}

export function useLeadModal() {
  return useContext(LeadModalContext)
}
