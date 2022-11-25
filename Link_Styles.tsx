// App.tsx

import './App.css'
import {NavLink, Routes, Route, Link} from 'react-router-dom'

const App = () => {
    return (
        <div className="App">

            <Link to={'/'}>main</Link>---

            <NavLink to={'/login'}>login</NavLink>---

            <NavLink to={'/profile'}
                     style={(params) => {
                         return {color: params.isActive ? 'lime' : 'black'}
                     }}>profile</NavLink>---

            <NavLink to={'/profile/settings'}
                     className={({isActive}) => isActive ? 'act' : 'def'}>settings</NavLink>---

            <a href={'https://www.google.com/'}
               target={'_blank'}
               rel={'blab-la'}
            >xxx</a>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={<div>profile</div>}/>
                <Route path={'/profile/settings'} element={<div>settings</div>}/>
            </Routes>
        </div>
    )
}

export default App

// App.css

.App {
    text-align: center;
}

.def {
    background: aquamarine;
}

.act {
    background: blueviolet;
}

.active {
    font-size: 50px;
}