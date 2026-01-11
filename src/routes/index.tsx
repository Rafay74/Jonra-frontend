import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from '@/layout/auth-layout'
import DashboardLayout from '@/layout/dashboard-layout'
import MainDashboard from '@/components/dashboard/main/main'
import {
  ForgotPasswordPage,
  LoginPage,
  OtpVerificationPage,
  RegisterPage,
  ResetPasswordPage,
} from '@/pages/auth'
import { RfqLibrary } from '@/components/dashboard/rfq-library'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: '/register',
    element: (
      <AuthLayout>
        <RegisterPage />
      </AuthLayout>
    ),
  },
  {
    path: '/forgot-password',
    element: (
      <AuthLayout>
        <ForgotPasswordPage />
      </AuthLayout>
    ),
  },
  {
    path: '/otp-verification',
    element: (
      <AuthLayout>
        <OtpVerificationPage />
      </AuthLayout>
    ),
  },
  {
    path: '/reset-password',
    element: (
      <AuthLayout>
        <ResetPasswordPage />
      </AuthLayout>
    ),
  },

  //dashboard
  {
    path: '/dashboard',
    element: (
      <DashboardLayout>
        <MainDashboard />
      </DashboardLayout>
    ),
  },
  {
    path: '/rfq-library',
    element: (
      <DashboardLayout>
        <RfqLibrary />
      </DashboardLayout>
    ),
  },
])
