import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// Layouts
import Layout from '@/layout';

// Interfaces
import { ToastProps } from '@/interfaces';

// Components
import { Toast } from '@/components/Toast';

// Constants
import { URLS } from '@/constants';

// Pages
import SignInPage from '@/pages/SignIn';
import SignUpPage from '@/pages/SignUp';
import Home from '@/pages/Home';
import SearchPage from '@/pages/Search';
import BookPreview from '@/pages/BookPreview';
import Shelf from '@/pages/Shelf';
import FavoriteBooksPage from '@/pages/Favorite';
import Account from '@/pages/Account';
import NotFound from '@/pages/NotFound';

function App() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const {
    HOME,
    SEARCH,
    SHELF,
    SIGN_IN,
    SIGN_UP,
    BOOK_PREVIEW,
    FAVORITE,
    ACCOUNT
  } = URLS;

  const showToast = (toast: ToastProps) => {
    setToasts((prevToasts) => [...prevToasts, toast]);
  };

  return (
    <div className="font-inter bg-silver-350 select-none">
      <Routes>
        <Route path={SIGN_IN} element={<SignInPage showToast={showToast} />} />
        <Route path={SIGN_UP} element={<SignUpPage showToast={showToast} />} />

        <Route element={<Layout />}>
          <Route path={HOME} element={<Home />} />
          <Route path={SEARCH} element={<SearchPage />} />
          <Route path={SHELF} element={<Shelf />} />
          <Route
            path={BOOK_PREVIEW}
            element={<BookPreview showToast={showToast} />}
          />
          <Route path={FAVORITE} element={<FavoriteBooksPage />} />
          <Route path={ACCOUNT} element={<Account showToast={showToast} />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Toast toasts={toasts} />
    </div>
  );
}

export default App;