import { useCallback } from 'react'
import createContext from 'zustand/context'
import create from 'zustand'

import { KeplrSlice, createKeplrSlice } from './keplr'

export interface RootState extends KeplrSlice {}

const zustandContext = createContext()

export const ZustandProvider = zustandContext.Provider

export const useStore = zustandContext.useStore

export const initializeStore = () =>
  create<RootState>((...args) => ({
    ...createKeplrSlice(...args),
  }))

export const useCreateStore = () => useCallback(() => initializeStore, [])
