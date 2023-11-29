import type { FC } from 'react'
import React from 'react'

import type { MenuProps } from 'antd'
import { Button, Dropdown } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import autoprefixer from 'autoprefixer'

import menu from '@/configs/menu'

const Header: FC = () => {
  const { t } = useTranslation(['common'])
  const { asPath, locale } = useRouter()

  const items: MenuProps['items'] = [
    {
      key: 'TH',
      label: (
        <Link href={asPath} locale="th" className="text-sm">
          TH
        </Link>
      ),
    },
    {
      key: 'EN',
      label: (
        <Link href={asPath} locale="en" className="text-sm">
          EN
        </Link>
      ),
    },
  ]
  const navLinks = [
    {
      title: 'WORKS',
      path: '#about',
      type: '',
    },
    {
      title: 'SERVICES',
      path: '#services',
      type: 'dropdown',
    },
    {
      title: 'OUR TEAM',
      path: '#team',
    },
    {
      title: 'ARTICLES',
      path: '#articles',
    },
    {
      title: 'CONTACT',
      path: '#contact',
    },
  ]
  return (
    <header>
      {/* {menu.map((item) => (
        <p>{t(item.label)}</p>
      ))}
      <Dropdown menu={{ items }} placement="bottomRight">
        <Button className="bg-black text-white border-none w-fit">{locale?.toLocaleUpperCase()}</Button>
      </Dropdown> */}
      <nav className="bg-[#0D0D0D] bg-opacity-80	">
        <div className="container flex flex-wrap items-center justify-between mx-auto  py-3">
          <Link href={'/'} className="text-2xl md:text-5xl text-white font-semibold">
            <Image src="/images/logo.png" alt="Kidyers" className="" width={100} height={100} />
          </Link>
          <div className="menu hidden  md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 transition-all hover:text-[#1EA7E1] ">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
