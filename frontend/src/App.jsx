import { useEffect, useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Layout from './Layout'
import AuthLayout from './components/AuthLayout'
import Signup from './components/Signup'
import Login from './components/Login'
import TermsAndConditions from './components/TermsAndConditons'
import HomePage from './pages/HomePage'
import Movies from './pages/Movies'
import AdminPage from './pages/Admin/AdminPage'
import AdminSignup from './components/Admin/AdminSignup'
import AdminLogin from './components/Admin/AdminLogin'
import ProtectedRoute from '../src/ProtectedRoute'
import MovieDetail from './pages/MovieDetail'
import Show from './pages/show/Show'
import PreShowPage from './pages/show/MovieByTheater'
import MovieByTheater from './pages/show/MovieByTheater'
import BookingPage from './pages/BookingPage'
import DashBoard from './pages/Admin/DashBoard'
import MovieManage from './pages/Admin/MovieManage'
import EditMovie from './components/Admin/MovieManage/EditMovie'
import CreateMovie from './components/Admin/MovieManage/CreateMovie.jsx'
import Actors from './pages/Actors/Actors'
import ActorProfile from './components/Admin/Actors/ActorProfile'
import CreateActor from './pages/Actors/CreateActor'
import AllShows from './pages/show/AllShows'
import AllBooking from './pages/AllBooking'
import Theaters from './pages/Theaters/Theaters'
import UserBooking from './pages/UserBooking'
import AssignMovie from './pages/Theaters/AssignMovie'
import CreateShow from './pages/show/CreateShow'
import CreateTheater from './pages/Theaters/CreateTheater'
import EditTheater from './pages/Theaters/EditTheater'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from './store/Slices/authSlice'
import AdminLayout from './AdminLayout'
import { getCurrentAdmin } from './store/Slices/adminSlice'










function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCurrentUser())
  },[dispatch])
  
  useEffect(()=>{
    dispatch(getCurrentAdmin())
  },[dispatch])


  return (
    <>
         <Routes>
          <Route path='/' element = {<Layout />}>

          {/* public Routes */}

          <Route 
          index
          element = {
            // <AuthLayout authentication={false}>
              <HomePage />
            // </AuthLayout>
          }
          />

<Route 
          path='/movies'
          element = {
            // <AuthLayout authentication={false}>
              <Movies />
            // </AuthLayout>
          }
          />

          <Route 
          path= '/movies/:movieId'
          element = {
            // <AuthLayout>
              <MovieDetail />
            // </AuthLayout>
          }
          
          />
          <Route 
          path= '/movie/:movieId'
          element = {
            // <AuthLayout>
              <MovieDetail />
            // </AuthLayout>
          }
          
          />

          <Route 
          path='/show/:movieId'
          element = {
            // <AuthLayout authentication={false}>
              <MovieByTheater />
            // </AuthLayout>
          }
          />

          <Route 
          path='/seatbooking/:showId'
          element = {
            // <AuthLayout authentication={false}>
              <Show />
            // </AuthLayout>
          }
          />

          <Route 
          path='signup'
          element = {
            // <AuthLayout authentication={false}>
              <Signup />
            // </AuthLayout>
          }
          />

          <Route 
          path='login'
          element = {
            <AuthLayout authentication={false}>
              <Login />
             </AuthLayout>
          }
          />

          <Route 
          path='terms&conditions'
          element = {
            // <AuthLayout authentication={false}>
              <TermsAndConditions />
            // </AuthLayout>
          }
          />
          <Route 
          path='/booking/:bookingId'
          element = {
            // <AuthLayout authentication={false}>
              <BookingPage />
            // </AuthLayout>
          }
          />
          <Route 
          path='/bookingbyUser/:userId'
          element = {
            <AuthLayout authentication={true}>
              <UserBooking />
            </AuthLayout>
          }
          />



         

          </Route>
          
{/* Admin Auth Pages (Outside layout) */}
<Route
  path='/admin/login'
  element={
    // <AuthLayout authentication={false} adminOnly={false}>
      <AdminLogin />
    // </AuthLayout>
  }
/>
<Route
  path='/admin/signup'
  element={
    // <AuthLayout authentication={false} adminOnly={false}>
      <AdminSignup />
    // </AuthLayout>
  }
/>


{/* Admin Routes (With Admin Layout) */}
<Route path='/admin' element={<AdminLayout />}>
  <Route
    index
    element={
      <AuthLayout authentication={true} adminOnly={true}>
        <DashBoard />
       </AuthLayout>
    }
  />

<Route
  path='/admin/dashboard'
  element={
    <AuthLayout authentication={true} adminOnly={true}>
      <DashBoard />
    // </AuthLayout>
  }
/>
<Route
  path='/admin/movieManage'
  element={
    <AuthLayout authentication={true} adminOnly={true}>
      <MovieManage />
     </AuthLayout>
  }
/>
<Route
  path='/admin/movieManage/create'
  element={
    <AuthLayout authentication={true} adminOnly={true}>
      <CreateMovie />
     </AuthLayout>
  }
/>

<Route
path='/admin/movieManage/:movieId'

element = {
  <EditMovie />
}
/>
<Route
path='/admin/actor'

element = {
  <Actors />
}
/>
<Route
path='/admin/actor/:artistId'

element = {
  <ActorProfile />
}
/>
<Route
path='/admin/actor/create'

element = {
  <CreateActor />
}
/>
<Route
path='/admin/shows/all'

element = {
  <AllShows />
}
/>
<Route
path='/admin/bookings/all'

element = {
  <AllBooking />
}
/>
<Route
path='/admin/theaters'

element = {
  <Theaters />
}
/>
<Route
path='/admin/theaters/create'

element = {
  <CreateTheater />
}
/>
<Route
path='/admin/theaters/assign/:theaterId'

element = {
  <AssignMovie />
}
/>
<Route
path='/admin/theaters/show/create/:theaterId'

element = {
  <CreateShow />
}
/>
<Route
path='/admin/theaters/edit/:theaterId'

element = {
  <EditTheater />
}
/>
</Route>

          </Routes>       
    </>

  )
}

export default App
