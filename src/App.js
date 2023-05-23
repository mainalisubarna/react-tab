import './App.css';
import CardItemLister from './pages/CardItemLister';
import { Routes,Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import TabsComponent from './pages/TabsComponent';
function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<CardItemLister />}/>
    <Route path='/tabs' element={<TabsComponent />}/>
    <Route path='*' element={<PageNotFound/>}/>
    </Routes>
        
    </>
  )
}

export default App;
