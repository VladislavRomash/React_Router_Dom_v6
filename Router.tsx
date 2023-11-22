// Router.tsx

import {createBrowserRouter} from 'react-router-dom';
import App from './App';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <div>Error</div>,
        children: [
            {
                path: '/0',
                element: <div>one</div>
            },
            {
                path: '/1',
                element: <div>two</div>
            },
            {
                path: '/2',
                element: <div>three</div>
            }
        ]
    }
])

// index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {router} from './Route';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// App.tsx

import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './App.css';

function App() {

    return (
        <div className="App">
            <div>
                <NavLink to={'/0'}>one </NavLink>
                <NavLink to={'/1'}>two </NavLink>
                <NavLink to={'/2'}>three</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>

        </div>
    );
}

export default App;

