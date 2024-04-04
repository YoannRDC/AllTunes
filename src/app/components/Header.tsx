'use client'

import { useEffect, useState } from "react"
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { usePathname } from 'next/navigation'
import { navigation } from "../constants/index"
import { HamburgerMenu } from "./design/Header"
import Button from "./Button"
import MenuSvg from "../assets/svg/MenuSvg"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from 'next/link';
import { useThemeMode } from "../contexts/ThemeMode";
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';
import { useThemeContext } from "../contexts/ThemeContext";
import { slate, indigo } from '../utils/themes'
import LogoSvg from '../assets/svg/LogoSvg'


const Header = () => {
  const pathname = usePathname()
  const { themeMode, toggleThemeMode } = useThemeMode()
  const { toggleTheme } = useThemeContext()
  const [openNavigation, setOpenNavigation] = useState(false)
  
  const handleSetTheme = () => {
    toggleThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  }

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
  }
  
  useEffect(() => {
    // theme mode
    toggleTheme(indigo)

    document.body.classList.add('dark:bg-gray-950');
    document.body.classList.add('dark:text-gray-50');
    document.body.classList.add('bg-gray-50');
    document.body.classList.add('text-gray-950');
  },)
  
  useEffect(() => {
    if (themeMode === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [themeMode])

  return (
    <div
      className={
        `transition dark:bg-gray-950 bg-gray-50
        fixed top-0 left-0 w-full z-50 border-b border-gray-600 lg:backdrop-blur-sm`
      }
    >
      <header>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a href="#allfeat" className="block w-[12rem] xl:mr-8">
            <LogoSvg />
          </a>

          <nav
            className={`${openNavigation ? "flex" : "hidden"} 
              fixed top-[5rem] left-0 right-0 bottom-0 
              lg:static lg:flex lg:mx-auto 
              lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className={`block relative font-code text-2xl z-10
                      uppercase dark:text-gray-50 text-gray-950 transition-colors 
                      hover:dark:text-gray-50 hover:text-gray-950
                      px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold 
                    ${item.url === pathname
                      ? "z-2 lg:text-n-1"
                      : "lg:dark:text-gray-50/50 lg:text-gray-950/50"
                    } lg:leading-5 lg:dark:hover:text-gray-50 lg:hover:text-gray-950 xl:px-12`}
                  ><span>{item.title}</span>
                </Link>
              ))}

            </div>
            <HamburgerMenu />
          </nav>

          <div className="flex justify-center w-[250px]">
            <ConnectButton accountStatus='address' chainStatus="name" showBalance={false} />
          </div>

          {/* Dark and light mode */}
          <div className="flex justify-between">
            <div className='flex px-2 dark:text-gray-50 text-gray-950'>
              <button onClick={handleSetTheme}>
                {themeMode === 'dark'
                  ? <SunIcon className='h-5 w-5 mx-1' />
                  : <MoonIcon className='h-5 w-5 mx-1' />
                }
              </button>
            </div>
          </div>

          <Button
            className={`ml-auto lg:hidden`}
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>

        </div>
      </header>
    </div>
  )
}

export default Header