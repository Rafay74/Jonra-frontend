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

import { AllRfqsPage, RfqDetailsPage } from '@/pages/rfq'
import { ComplianceCheckPage } from '@/pages/compliance'

import { ContactPage } from '@/pages/contact'
import { ProfilePage } from '@/pages/profile'

import { SettingPage } from '@/pages/setting'
import { SettingPrivacyPage } from '@/pages/setting/privacy'
import { SettingHelpPage } from '@/pages/setting/help'

import { AllProposalGeneratorsPage, ProposalGeneratorPage } from '@/pages/proposalgenerator'


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
        <AllRfqsPage />
      </DashboardLayout>
    ),
  },
  {
    path: '/rfq-detail/:id',
    element: (
      <DashboardLayout>
        <RfqDetailsPage />
      </DashboardLayout>
    ),
  },

  {
    path: '/compliance-check',
    element: (
      <DashboardLayout>
        <ComplianceCheckPage />
      </DashboardLayout>
    ),
  },

  {
    path: '/proposal-generator',
    element: (
      <DashboardLayout>
        <ProposalGeneratorPage />
      </DashboardLayout>
    ),
  },
  

  {
    path: '/all-proposals',
    element: (
      <DashboardLayout>
        <AllProposalGeneratorsPage />
      </DashboardLayout>
    ),
  },

  //SETTINGS
  {
    path: '/profile-overview',
    element: (
      <DashboardLayout>
        <ProfilePage />
      </DashboardLayout>
    ),
  },

  {
    path: '/settings',
    element: (
      <DashboardLayout>
        <SettingPage />
      </DashboardLayout>
    ),
  },

  {
    path: '/settings/privacy',
    element: (
      <DashboardLayout>
        <SettingPrivacyPage />
      </DashboardLayout>
    ),
  },

  {
    path: '/settings/help',
    element: (
      <DashboardLayout>
        <SettingHelpPage />
      </DashboardLayout>
    ),
  },

  {
    path: '/contact',
    element: (
      <DashboardLayout>
        <ContactPage />
      </DashboardLayout>
    ),
  },
])
