// App.tsx

import {NavLink, Routes, Route, Link, useNavigate} from 'react-router-dom'


const Profile = () => {

    const navigate = useNavigate()

    return <div>
        profile
        <button onClick={() => navigate('/login')}>logout</button>
    </div>
}

const App = () => {
    return (
        <div className="App">

            <Link to={'/'}>main</Link>---
            <Link to={'/login'}>login</Link>---
            <NavLink to={'/profile'}>profile</NavLink>---
            <NavLink to={'/profile/settings'}>settings</NavLink>---


            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={<div><Profile/></div>}/>
                <Route path={'/profile/settings'} element={<div>settings</div>}/>
            </Routes>
        </div>
    )
}

export default App