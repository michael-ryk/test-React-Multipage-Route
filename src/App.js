import { Route, Routes, Navigate } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetails from './pages/QuoteDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate replace to="/allquotes" />} />
        <Route path='/allquotes' element={<AllQuotes />} exact />
        <Route path='/quotes/:quoteId' element={<QuoteDetails />} />
        <Route path='/newquote' element={<NewQuote />} />
      </Routes>
    </div>
  );
}

export default App;
