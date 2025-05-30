import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import Demo from './App'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
    <Demo />
    </Provider>
  </StrictMode>,
)
