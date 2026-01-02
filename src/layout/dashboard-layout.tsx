import type { ReactNode } from 'react'
import { Bell, Eye, Cloud, ChevronDown } from 'lucide-react'

import InputField from '../components/common/input-field'
import ButtonComponent from '@/components/common/button'

import Chart from '../assets/ChartPieSlice.svg'
import Bag from '../assets/bag.svg'
import Profile from '../assets/profile.svg'
import Arrow from '../assets/arrow.svg'
import logo from '../assets/Mask group.svg'
import me from '../assets/me.svg'

interface IDashboard {
  children?: ReactNode
}

const DashboardLayout = ({ children }: IDashboard) => {
  return (
    <main className="min-h-screen bg-[#092835] flex p-4 gap-4">
      {/* Sidebar */}
      <aside
        className="w-[380px] h-[calc(100vh)] bg-[#123C4E] flex flex-col shrink-0 rounded-4xl"
        style={{ fontFamily: "'PolySans Trial', sans-serif" }}
      >
        <div className="px-6 py-6 flex justify-center items-center">
          <img src={logo} alt="logo" className="w-auto h-auto" />
        </div>

        <nav className="flex-1 px-8 py-6">
          <div className="space-y-1">
            <div className="mb-4">
              <div className="h-px bg-[#1a4d5f]  mb-4"></div>
              <h2 className="text-white text-2xl font-extrabold">MAIN MENU</h2>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#092835] rounded-2xl cursor-pointer">
              <img src={Arrow} alt="arrow" />

              <img src={Chart} alt="dashboard_logo" />
              <span className="text-white font-medium">Dashboard</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#092835] rounded-2xl cursor-pointer transition-colors">
              <img src={Arrow} alt="arrow" />
              <img src={Bag} alt="dashboard_logo" />
              <span className="text-white">RFQ Library</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#092835] rounded-2xl cursor-pointer transition-colors">
              <img src={Arrow} alt="arrow" />
              <img src={Bag} alt="dashboard_logo" />
              <span className="text-white">Compliance Check</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#092835] rounded-2xl cursor-pointer transition-colors">
              <img src={Arrow} alt="arrow" />
              <img src={Bag} alt="dashboard_logo" />
              <span className="text-white">Proposal Generator</span>
            </div>
          </div>

          <div className="mt-8 pt-8">
            <div className="space-y-1">
              <div className="mb-4">
                <div className="h-px bg-[#1a4d5f]  mb-4"></div>
                <h2 className="text-white text-2xl font-extrabold">SETTINGS</h2>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#092835] rounded-2xl cursor-pointer transition-colors">
                <img src={Arrow} alt="arrow" />
                <img src={Profile} alt="dashboard_logo" />
                <span className="text-white">Profile Overview</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#092835] rounded-2xl cursor-pointer transition-colors">
                <img src={Arrow} alt="arrow" />
                <img src={Bag} alt="dashboard_logo" />
                <span className="text-white">Settings</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#092835] rounded-2xl cursor-pointer transition-colors">
                <img src={Arrow} alt="arrow" />
                <img src={Bag} alt="dashboard_logo" />
                <span className="text-white">Contact Us</span>
              </div>
            </div>
          </div>
        </nav>

        <div className="px-8 pb-6">
          <ButtonComponent
            size="large"
            bgColor="#ffffff"
            block
            style={{ color: '#123C4E' }}
          >
            Logout
          </ButtonComponent>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-[#092835] px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 flex items-center gap-2 h-12 ">
              <InputField
                placeholder="Search"
                className="flex-1 h-full rounded-xl bg-[#123C4E] px-4"
              />

              <ButtonComponent
                className="h-full px-6 rounded-xl text-white font-medium"
                style={{
                  background:
                    'linear-gradient(90deg, #1EC5E0 0%, #9F8EFF 100%)',
                }}
              >
                Search
              </ButtonComponent>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#123C4E] p-4">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <div className="rounded-full bg-[#123C4E] p-4">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div className="rounded-full bg-[#123C4E] p-4">
                <Cloud className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="flex items-center gap-3 pl-4 border-l border-[#1a4d5f] cursor-pointer hover:opacity-80 transition-opacity">
              <div className=" rounded-full flex items-center justify-center">
                <img src={me} alt="logo_me" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm">
                  John Smith
                </span>
                <span className="text-gray-400 text-xs">Account</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 bg-[#092835] overflow-auto">{children}</div>
      </div>
    </main>
  )
}

export default DashboardLayout
