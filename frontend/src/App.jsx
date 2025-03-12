import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './AuthProvider'; // Import AuthProvider
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import EmployerDashboard from './pages/EmployerDashboard';
// import JobSeekerDashboard from './pages/JobSeekerDashboard';
// import EvaluatorDashboard from './pages/EvaluatorDashboard';
import Dashboard from './pages/Dashboard';
import JobList from './components/JobList';
import PropTypes from 'prop-types';
import Jobstable from './pages/Jobstable';
import Register from './pages/Register';
import Login from './pages/Login';
import AddJob from './components/dashboard/Addjob';
import EditJob from './components/dashboard/EditJob';
import { AuthProvider } from './context/AuthProvider';
import ApplicationTable from './components/dashboard/application/Applicationtable';
import ApplicationspecificTable from './components/dashboard/application/ApplicationspecificTable ';
import Users from './components/dashboard/users/Users';
import Anouncement from './components/Anouncement';
import Apply from './components/Apply';
import ViewApplication from './components/dashboard/application/ViewApplication';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

// import { AuthProvider } from './components/AuthProvider';

// Layout with Navbar and Footer
const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

// Layout without Navbar and Footer
const MinimalLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <main className="flex-grow">{children}</main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

MinimalLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <AuthProvider> {/* Wrap everything with AuthProvider */}
      <Router>
        <Routes>
          {/* Routes with Navbar and Footer */}
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/anouncement"
            element={
              <MainLayout>
                <Anouncement />
              </MainLayout>
            }
          />
          <Route
            path="/jobs"
            element={
              <MainLayout>
                <JobList />
              </MainLayout>
            }
          />
           <Route path="/apply/:jobId"  element={
              <MainLayout>
                <Apply />
              </MainLayout>
            } />
          {/* <Route
            path="/employer-dashboard"
            element={
              <MainLayout>
                <EmployerDashboard />
              </MainLayout>
            }
          />
          <Route
            path="/job-seeker-dashboard"
            element={
              <MainLayout>
                <JobSeekerDashboard />
              </MainLayout>
            }
          />
          <Route
            path="/evaluator-dashboard"
            element={
              <MainLayout>
                <EvaluatorDashboard />
              </MainLayout>
            }
          /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
         {/* Protected Routes */}
         <Route
            path="/admin"
            element={
              <MinimalLayout>
                <ProtectedRoute allowedRoles={['admin', 'employer','faculity']}>
                  <Dashboard />
                </ProtectedRoute>
              </MinimalLayout>
            }
          />
          <Route
            path="/admin/jobs"
            element={
              <ProtectedRoute allowedRoles={['admin', 'employer','faculity']}>
                <Jobstable />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/addjobs"
            element={
              <ProtectedRoute allowedRoles={['admin', 'employer','faculity']}>
                <AddJob />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-job/:jobId"
            element={
              <ProtectedRoute allowedRoles={['admin', 'employer','faculity']}>
                <EditJob />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/applications"
            element={
              <ProtectedRoute allowedRoles={['admin', 'employer','faculity']}>
                <ApplicationTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/applications/:jobId"
            element={
              <ProtectedRoute allowedRoles={['admin', 'employer','faculity']}>
                <ApplicationspecificTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="/applications/:id"
            element={
              <ProtectedRoute allowedRoles={['admin', 'employer','faculity']}>
                <ViewApplication />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Users />
              </ProtectedRoute>
            }
          />
        

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
