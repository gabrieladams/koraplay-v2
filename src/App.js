import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/globals.scss';
import Home from './routes/home';
import TokenFunctions from './routes/token-functions';
import AboutUs from './routes/company/about-us';
import Careers from './routes/company/careers';
import Apply from './routes/company/careers/apply';
import OurSolutions from './routes/our-solutions';
import Faqs from './routes/faqs';
import ContactUs from './routes/contact-us';
import PageNotFound from './routes/404';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/token-functions' element={<TokenFunctions />} />
        <Route path='/company/about-us' element={<AboutUs />} />
        <Route path='/company/careers' element={<Careers />} />
        <Route path='/company/careers/apply' element={<Apply />} />
        <Route path='/our-solutions' element={<OurSolutions />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
