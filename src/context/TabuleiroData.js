import React, { createContext, useState, useContext } from 'react'
import * as tabuleiro_data from '../../tabueiro_data.json'

const TabuleiroDataContext = createContext()

// Provider
export function TabuleiroDataProvider({ children }) {

  // Fazer aqui para pegar o valor  
  const [regions] = useState(tabuleiro_data.regions)
  const [referencia] = useState(tabuleiro_data.referencia)
  
  // Calcula a situação atual
  const _handleSituation = () => {
    const atual = { confirmados: 0, suspeitos: 0, descartados: 0, letais: 0 }
    regions.forEach(region => {
      atual.confirmados += region.casos.confirmados
      atual.suspeitos += region.casos.suspeitos
      atual.descartados += region.casos.descartados
      atual.letais += region.casos.letais
    });
    return atual
  }

  const situation = _handleSituation()

  return (
    <TabuleiroDataContext.Provider value={{
      regions,
      referencia,
      situation
    }}>
      {children}
    </TabuleiroDataContext.Provider>
  )

}

// Hook
export function useTabuleiroData() {
  const context = useContext(TabuleiroDataContext)
  const { regions, referencia, situation } = context
  return [
    regions,
    referencia,
    situation
  ]
} 