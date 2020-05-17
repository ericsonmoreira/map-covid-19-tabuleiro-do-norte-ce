import React, { createContext, useState, useContext } from 'react'
import * as tabuleiro_data from '../../tabueiro_data.json'


const TabuleiroDataContext = createContext()

export function TabuleiroDataProvider({ children }) {

  // Fazer aqui para pegar o valor  
  const [data] = useState(tabuleiro_data)

  return (
    <TabuleiroDataContext.Provider value={{ data }}>
      {children}
    </TabuleiroDataContext.Provider>
  )

}

// Hook
export function useTabuleiroData() {
  const context = useContext(TabuleiroDataContext)
  const { data } = context
  return {
    data
  }
} 