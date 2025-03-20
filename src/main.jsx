import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from '~/libs/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider, ModalProvider, WindowContext } from '~/contexts';
import { WindowProvider } from './contexts/WindowContent.jsx';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider>
                <ModalProvider>
                    <WindowProvider>
                        <App />
                        <ToastContainer position="bottom-right" autoClose={3000} />
                    </WindowProvider>
                </ModalProvider>
            </ThemeProvider>
        </PersistGate>
    </Provider>
);
