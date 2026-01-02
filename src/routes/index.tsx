import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from '@/layout/auth-layout'
import Login from '@/components/auth/login'
import Register from '@/components/auth/register'
import ForgotPassword from '@/components/auth/forget-password'
import OtpVerification from '@/components/auth/otp-verification'
import ResetPassword from '@/components/auth/reset-password'
import DashboardLayout from '@/layout/dashboard-layout'
import MainDashboard from '@/components/dashboard/main/main'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: '/register',
    element: (
      <AuthLayout>
        <Register />
      </AuthLayout>
    ),
  },
  {
    path: '/forgot-password',
    element: (
      <AuthLayout>
        <ForgotPassword />
      </AuthLayout>
    ),
  },
  {
    path: '/otp-verification',
    element: (
      <AuthLayout>
        <OtpVerification />
      </AuthLayout>
    ),
  },
  {
    path: '/reset-password',
    element: (
      <AuthLayout>
        <ResetPassword />
      </AuthLayout>
    ),
  },

  {
    path: '/dashboard',
    element: (
      <DashboardLayout>
        <MainDashboard />
      </DashboardLayout>
    ),
  },
])
