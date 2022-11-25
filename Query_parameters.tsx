// App.tsx

import {NavLink, Routes, Route, Link, useSearchParams} from 'react-router-dom'
import {useEffect} from 'react';


const Profile = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    console.log(searchParams.get('name'))
    console.log(Object.fromEntries(searchParams))

    useEffect(() => {
        console.log('research')
    }, [searchParams])

    return <div>
        profile
        <button onClick={() => setSearchParams({...Object.fromEntries(searchParams), age: '32'})}>add age</button>
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