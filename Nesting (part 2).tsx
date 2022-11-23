// App.tsx

import {NavLink, Routes, Route, Outlet} from 'react-router-dom'

export const App = () => {
    return (
        <div className="App">

            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink to={'/profile'}>profile</NavLink>---
            <NavLink to={'/profile/settings'}>settings</NavLink>---

            <Routes>

                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={(
                    <div>
                        profile
                        <Outlet/>
                    </div>
                )}>
                    <Route path={'/profile/settings'} element={<div>settings</div>}/>
                </Route>

            </Routes>

        </div>
    )
}