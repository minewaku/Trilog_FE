import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '~/layouts/';
import { PostList, Social } from '~/layouts/DefaultLayout/components';
import { Modal } from '~/components/Modal';
import { Location, Test } from '~/pages';
import { AuthRoute, ProtectedRoute } from './routes';
import { store } from '~/libs/redux/store';
import { useContext } from 'react';
import { ThemeContext } from '~/contexts';

const App = () => {
    const { theme } = useContext(ThemeContext);
    console.log('auth: ', store.getState().auth);

    return (
        <div className={`${theme.mode} ${theme.theme}`}>
            <BrowserRouter>
                <Routes>
                    <Route element={<ProtectedRoute />}>
                        <Route
                            path="/"
                            element={
                                <DefaultLayout>
                                    <PostList />
                                    <Social />
                                </DefaultLayout>
                            }
                        ></Route>
                    </Route>

                    <Route element={<AuthRoute />}></Route>

                    <Route path="/location" element={<Location />} />
                    <Route path="/test" element={<Test />} />
                </Routes>

                <Modal />
            </BrowserRouter>
        </div>
    );
};

export default App;
