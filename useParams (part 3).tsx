import {NavLink, Routes, Route, useParams} from 'react-router-dom'

const Profile = () => {

    const params = useParams<'*'>()

    const some = params // ['*']

    console.log(some)   // {*: '1'}

    return <div>profile</div>
}

export const App = () => {
    return (
        <div className="App">

            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink to={'/profile'}>profile</NavLink>---
            <NavLink to={'/profile/1'}>profile/xxx</NavLink>---

            <Routes>

                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/*'} element={<div><Profile/></div>}/>

            </Routes>

        </div>
    )
}