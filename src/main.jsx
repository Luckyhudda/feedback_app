
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ReviewProvider } from './context/ReviewContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <ReviewProvider>
    <App />
  </ReviewProvider>,
  </>
)
