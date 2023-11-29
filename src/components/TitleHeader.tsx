import React from 'react'

import Link from 'next/link'
import { MdArrowForward } from 'react-icons/md'
const TitleHeader = () => {
  return (
    <div className="bg-[#000000] ">
      <div className="container mx-auto py-4">
        <div className="flex items-center">
          <div className="text-white text-lg grow ">
            You are processing your DIY-Service Package. Continue to complete and get the digital marketing strategy of
            your own. - FREE!
          </div>
          <div className="flex-none ">
            <Link href={'/index'} className="text-[#28ABE2] flex items-center text-base">
              <span className="pr-1">Continue</span>
              <MdArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleHeader
