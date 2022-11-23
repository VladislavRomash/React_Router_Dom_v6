import {NavLink, Routes, Route, useParams} from 'react-router-dom'

const Profile = () => {

    const params = useParams<'x' | 'y'>()

    const some = params // .x || .y

    console.log(some)   // {x: '1', y: '2'}

    return <div>profile</div>
}

export const App = () => {
    return (
        <div className="App">

            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink to={'/profile'}>profile</NavLink>---
            <NavLink to={'/profile/1/2'}>profile/xxx</NavLink>---

            <Routes>

                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/:x/:y'} element={<div><Profile/></div>}/>

            </Routes>

        </div>
    )
}