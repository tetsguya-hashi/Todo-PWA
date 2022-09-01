import { Route, Routes } from 'react-router-dom';
import Drugstores from '../components/pages/Drugstores';
import HandredStore from '../components/pages/HandredStore';
import Supermarket from '../components/pages/Supermarket';


const Router = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Supermarket />} />
      <Route path={'/dorugstore/'} element={<Drugstores />} />
      <Route path={'/handredstore/'} element={<HandredStore />} />
    </Routes>
  )
}

export default Router