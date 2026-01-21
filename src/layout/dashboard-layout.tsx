import { useState, type ReactNode } from 'react'
import { Bell, Eye, Cloud, ChevronDown, Menu, X } from 'lucide-react'

import Chart from '@/assets/ChartPieSlice.svg'
import Bag from '@/assets/bag.svg'
import Profile from '@/assets/profile.svg'
import Arrow from '@/assets/arrow.svg'
import logo from '@/assets/Mask group.svg'
import me from '@/assets/me.svg'

import { ButtonAtom } from '@/components/atoms'
import { SearchBar } from '@/components/molecules'
import { Link } from 'react-router-dom'
import { ProfileModal, StatusModal } from '@/components/molecules/modal'

interface IDashboard {
  children?: ReactNode
}

const DashboardLayout = ({ children }: IDashboard) => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const openProfileModal = () => {
    setIsProfileModalOpen(true)
  }

  const closeProfileModal = () => setIsProfileModalOpen(false)

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {isProfileModalOpen && (
        // <ProfileModal onClose={closeProfileModal} />
        <StatusModal onClose={closeProfileModal} />
      )}

      <main className="min-h-screen bg-[#092835] flex p-2 md:p-4 gap-2 md:gap-4">
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-50 w-[280px] lg:w-[300px] xl:w-[320px]   bg-[#123C4E] flex flex-col shrink-0 rounded-4xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
          style={{ fontFamily: "'PolySans Trial', sans-serif" }}
        >
          <div className="px-6 py-6 flex justify-center items-center">
            <img src={logo} alt="logo" className="w-auto h-auto" />
          </div>

          <nav className="flex-1 px-4 md:px-6 lg:px-8 py-4 md:py-6">
            <div className="space-y-1">
              <div className="mb-4">
                <div className="h-px bg-[#1a4d5f]  mb-4"></div>
                <h2 className="text-white text-xl lg:text-2xl font-extrabold">MAIN MENU</h2>
              </div>

              <Link to={'/dashboard'}>
                <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#092835] rounded-2xl cursor-pointer">
                  <img src={Arrow} alt="arrow" />

                  <img src={Chart} alt="dashboard_logo" />
                  <span className="text-white font-medium">Dashboard</span>
                </div>
              </Link>

              <Link to={'/rfq-library'}>
                <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#092835] rounded-2xl cursor-pointer transition-colors">
                  <img src={Arrow} alt="arrow" />
                  <img src={Bag} alt="dashboard_logo" />
                  <span className="text-white">RFQ Library</span>
                </div>
              </Link>

              <Link to={'/compliance-check'}>
                <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#092835] rounded-2xl cursor-pointer transition-colors">
                  <img src={Arrow} alt="arrow" />
                  <img src={Bag} alt="dashboard_logo" />
                  <span className="text-white">Compliance Check</span>
                </div>
              </Link>

              <Link to={'/proposal-generator'}>
                <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#092835] rounded-2xl cursor-pointer transition-colors">
                  <img src={Arrow} alt="arrow" />
                  <img src={Bag} alt="dashboard_logo" />
                  <span className="text-white">Proposal Generator</span>
                </div>
              </Link>
            </div>

            <div className="mt-8 pt-8">
              <div className="space-y-1">
                <div className="mb-4">
                  <div className="h-px bg-[#1a4d5f]  mb-4"></div>
                  <h2 className="text-white text-xl lg:text-2xl font-extrabold">SETTINGS</h2>
                </div>
                <Link to={'/profile-overview'}>
                  <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#092835] rounded-2xl cursor-pointer transition-colors">
                    <img src={Arrow} alt="arrow" />
                    <img src={Profile} alt="dashboard_logo" />
                    <span className="text-white">Profile Overview</span>
                  </div>
                </Link>

                <Link to={'/settings'}>
                  <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#092835] rounded-2xl cursor-pointer transition-colors">
                    <img src={Arrow} alt="arrow" />
                    <img src={Bag} alt="dashboard_logo" />
                    <span className="text-white">Settings</span>
                  </div>
                </Link>

                <Link to={'/contact'}>
                  <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#092835] rounded-2xl cursor-pointer transition-colors">
                    <img src={Arrow} alt="arrow" />
                    <img src={Bag} alt="dashboard_logo" />
                    <span className="text-white">Contact Us</span>
                  </div>
                </Link>
              </div>
            </div>
          </nav>

          <div className="px-8 pb-6">
            <ButtonAtom size="large" bgColor="#ffffff" block style={{ color: '#123C4E' }}>
              Logout
            </ButtonAtom>
          </div>
        </aside>

        <div className="flex-1 flex flex-col">
          <header className="bg-[#092835] px-4 md:px-6 lg:px-8 py-3 md:py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-[#123C4E] text-white hover:bg-[#1a4d5f] transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <SearchBar />

              <div className="flex items-center gap-2 md:gap-3">
                <div className="rounded-full bg-[#123C4E] p-3 md:p-4">
                  <Bell className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="hidden sm:block rounded-full bg-[#123C4E] p-3 md:p-4">
                  <Eye className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="hidden md:block rounded-full bg-[#123C4E] p-3 md:p-4">
                  <Cloud className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l border-[#1a4d5f] cursor-pointer hover:opacity-80 transition-opacity">
                <div
                  className="rounded-full flex items-center justify-center"
                  onClick={() => openProfileModal()}
                >
                  <img src={me} alt="logo_me" className="w-8 h-8 md:w-auto md:h-auto" />
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-white font-medium text-sm">John Smith</span>
                  <span className="text-gray-400 text-xs">Account</span>
                </div>
                <ChevronDown className="hidden sm:block w-4 h-4 text-gray-400" />
              </div>
            </div>
          </header>

          <div className="flex-1 bg-[#092835] overflow-auto">{children}</div>
        </div>
      </main>
    </>
  )
}

export default DashboardLayout
