import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import BloodDonor from './components/BloodDonor/BloodDonor/BloodDonor';
import { createContext, useContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Patients from './components/Patients/Patients/Patients';
import DonateBlood from './components/BloodDonor/DonateBlood/DonateBlood';
import DonorRequest from './components/BloodDonor/DonorRequest/DonorRequest';
import Admin from './components/Admin/Admin/Admin';
import DonorPage from './components/Admin/DonorPage/DonorPage';
import DonorRequestPage from './components/Admin/DonorRequestPage/DonorRequestPage';
import FindDonor from './components/Patients/FindDonor/FindDonor';
import PatientRequest from './components/Patients/PatientRequest/PatientRequest';
import AllPatientRequest from './components/Admin/AllPatientRequest/AllPatientRequest';
import AllPatient from './components/Admin/AllPatient/AllPatient';
import { Toaster, toast } from 'alert';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  })

  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/login' element={<Login></Login>} />

          {/* Donor Page*/}
          <Route element={<PrivateRoute />}>
            <Route path='/donorDashboard' element={<BloodDonor />}></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/donateBlood' element={<DonateBlood />}></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/donorRequest' element={<DonorRequest />}></Route>
          </Route>


          {/* Admin Page */}
          <Route element={<PrivateRoute />}>
            <Route path='/adminDashboard' element={<Admin></Admin>}></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/allDonor' element={<DonorPage></DonorPage>}></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/allDonorRequest' element={<DonorRequestPage />}></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/allPatientRequest' element={<AllPatientRequest />}></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/allPatient' element={<AllPatient />}></Route>
          </Route>

          {/* Patient */}
          <Route element={<PrivateRoute />}>
            <Route path='/patientDashboard' element={<Patients />}></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/findDonor' element={<FindDonor></FindDonor>}></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/patientRequest' element={<PatientRequest />}></Route>
          </Route>
        </Routes>
      </Router>
    </userContext.Provider>
  );
}

export default App;
