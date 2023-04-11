import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className= "w-full flex flex-row mb-0 pl-5 md:pt-10 md:pb-2 justify-between items-center navbar">
        <div>
            <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-slate-900 dark:fill-slate-100 hover:scale-110 transition duration-300 ease-in-out cursor-pointer w-[248px] h-[64px]" width="760" height="740" version="1.0" viewBox="0 0 570 555">
                  <path d="M204.9 18.1c-2.6.4-5.6 1.2-6.7 1.8-1.5.8-2.9.7-5.6-.4-4.5-1.9-14.6-1.9-19.1-.1-9.9 4.2-15.8 12.9-16.1 23.9-.2 5.9-.7 7.2-3.4 10.5-3.1 3.8-6 11.5-6 16.2 0 5.1 3 12.6 6.7 16.9 3.4 4 11.9 9.1 15.1 9.1.8 0 3.3 1.9 5.6 4.3 6.2 6.4 12.5 9.1 22.1 9.5 11.2.5 17.5-2 26-10.1 3.5-3.4 8.3-7.6 10.7-9.2 11.6-8.2 13.3-26.5 3.5-38.1-2.1-2.5-2.5-3.8-2.1-6.6.9-5.3-2.1-14.2-6.2-18.8-6.8-7.5-14.6-10.4-24.5-8.9zm-15 19.9c5.5 3.7 7.5 3.7 13 0 4.8-3.2 7-3.6 10.4-1.8 4.9 2.6 5.8 6.4 3.1 13.3-2 5.3-.8 8.6 4.5 11.9 4.4 2.8 6.1 5.3 6.1 8.9 0 3.4-3.5 7.4-7 8.2-1.7.4-3.8 1.8-4.8 3.2-3.9 5.9-8.8 10.1-12.5 10.8-7.8 1.5-12.6-1.1-19.5-10.4-2-2.6-3-3.1-6.7-3.1-6.2 0-10.5-3.7-10.5-9 0-3.1.6-4.3 3.1-6.2 7.5-5.7 8.1-6.6 7.5-11.1-1.9-12.6-1.9-12.5.8-15.1 3.3-3.4 7-3.3 12.5.4zM270.8 35l-2.6 8 4.1 2.1c8.6 4.3 14.2 11.7 15.4 20.4l.6 4.5h17.9l-.7-5.3c-2.1-15.3-11.8-28.9-25.1-35.2-2.9-1.4-5.7-2.5-6.1-2.5-.5 0-2.1 3.6-3.5 8zM427.2 45.7c-5.7 2-12.6 9.1-14.6 15-.9 2.5-1.6 7-1.6 10 0 4.5-.5 6-3.5 9.8-1.9 2.5-4 6.5-4.6 8.8-3.5 13.1 4.9 28.3 17.6 31.9 2.3.6 6 3 8.5 5.4 10.4 9.9 25.2 12.7 37.4 7.1 3.6-1.7 8.2-5 11.7-8.5 3.1-3.1 7.5-6.9 9.7-8.4 9-6 12.8-19.9 8.2-30.5-1.2-2.8-3.3-6.1-4.6-7.4-2.1-1.9-2.4-3.2-2.4-9 0-15-11-25.9-26.2-25.9-2.6 0-6.5.7-8.6 1.5-3.4 1.4-4.2 1.4-8.1 0-5.4-1.9-13.3-1.8-18.9.2zm17 18.8c3.4 2.9 8.9 3.3 10.9.9 4.1-5 11.3-5.3 15-.6 2.2 2.9 2.2 6.2-.2 11.9-1.8 4.5-.3 8.2 4.5 11 4.8 2.6 7 6.4 6.1 10.3-.7 3.4-2.8 5.3-7.7 7.3-2.3 1-4.7 3.1-6.3 5.7-3.4 5.3-7.8 8-13.5 8-5.1 0-9.8-2.5-12.6-6.5-4.3-6.3-6.1-7.5-10.9-7.5-6.1 0-9.5-3.2-9.5-8.9 0-3.2.5-4.4 3.1-6.3 7.2-5.5 8.1-6.7 7.6-10.6-.2-2-1-5.1-1.7-6.8-1.1-2.5-1.1-3.5.1-5.9 2.8-5.9 9.4-6.8 15.1-2zM383.4 64.6c-13.2 6.3-22.8 19.9-24.9 35.1l-.7 5.3h17.9l.6-4.5c1.2-8.7 6.8-16.1 15.4-20.4l4.1-2.1-2.6-8c-1.4-4.4-3.1-8-3.7-8-.5.1-3.3 1.2-6.1 2.6zM286 97.6c-12.6 2.7-23.8 9.9-31.4 20.3l-3.5 4.8-7.8.1c-14.3.2-27.5 6.2-37.6 17-4.8 5.3-11.2 17-12.3 22.7-.5 3.1-.8 3.2-7.9 4.3-9.9 1.5-17.3 4.5-24.4 9.7-10 7.4-17.5 18.7-20.1 30.1-1.4 6.1-1.4 19.7 0 24.4 1.4 4.8 1.3 5-1.4 5-1.4 0-3.8 1.2-5.5 2.6l-3.1 2.6v42.6l3.1 2.6c1.7 1.4 3.6 2.6 4.4 2.6 1.8 0 1.4-4.3 10.6 129.5 6.1 89.4 8.4 118.5 9.5 120.2.8 1.2 3.2 2.7 5.3 3.3 2.7.7 44.4.9 131.6.8l127.7-.3 2.4-2.8c1.3-1.5 2.4-4 2.4-5.5s.3-3.7.6-5c.9-3.1 3.6-2.1 9.5 3.3 7.3 6.8 12 8.8 22 9.3 7.8.4 9.2.2 14.8-2.3 4.1-1.9 7.8-4.5 11-8 2.6-2.9 6.1-5.9 7.7-6.8 3.7-1.9 8.6-7.2 11-11.7 2.7-5.1 2.6-17.2-.3-22.5-1.1-2.2-3-4.9-4.2-5.9-1.7-1.5-2.1-3.1-2.1-7.5 0-11.4-4.6-19.5-13.9-24.3-6.2-3.2-15.7-3.8-21.6-1.4-3.1 1.3-3.9 1.3-7 0-4-1.6-14.1-1.9-18.1-.4-1.5.6-2.9.9-3.1.7-.2-.3 2.1-36.4 5.2-80.4 3-44 5.5-80.5 5.5-81.2 0-.7 2.2-1.1 5.9-1.1 4.9 0 6.5-.4 9-2.6l3.1-2.6v-42.6l-3.1-2.6c-2.6-2.3-4-2.6-10.1-2.6-5.7 0-6.9-.3-6.5-1.4 1.7-4.4 2.8-14.8 2.2-20.5-2.7-25.4-22-44.7-47.7-47.6-5.5-.7-5.6-.8-6.3-4.4-2.1-11.2-14.2-27-25.2-32.9-6.7-3.5-15.3-6.2-19.9-6.2-2.7 0-3.8-.8-7.3-5.5-7.9-10.5-18.7-17.2-31.8-20-8.3-1.8-12.8-1.8-21.3.1zm25.2 19.2c6.1 2.7 13.8 9.9 16.7 15.6 3 6.1 5.4 7.6 12.1 7.6 19.3 0 33.6 13.4 35.7 33.4.4 3.8 1.3 6.7 2.7 8.3 2.1 2.4 2.8 2.5 13.1 2.7 9.8.1 11.6.4 16.6 2.9 6.7 3.2 14.2 10.9 17.2 17.5 2.9 6.4 3.1 20.7.3 27l-1.9 4.2h-13.2l-1.3-5.2c-1.6-6.8-7-14.9-12.4-18.6-5.4-3.6-12-6.2-15.8-6.2h-3V222.7l4.5 1.8c4.3 1.6 8.4 5.7 9.8 9.7.6 1.7-2.5 1.8-56.2 1.8h-56.9l-1.1-4.3c-2-8 2-16.5 9.3-19.8 5.6-2.5 10.4-2.4 16 .6 5.3 2.8 5.3 2.8 12.4-3.6l5.1-4.6-3.2-3c-12.6-12-35.1-11.2-47.7 1.8-2.2 2.3-5.2 6.6-6.7 9.7-2.4 4.9-2.8 6.9-2.8 14.4v8.8h-54.6l-2.4-2.5c-4.5-4.4-2.9-11.6 3.1-14.1l3.4-1.4v-8c0-4.3-.4-8.1-.8-8.4-1.8-1.1-8.4.8-13.5 3.8-8.9 5.4-14.4 17.8-11.9 27l1 3.6h-23.6l-1.9-4.8c-1.2-3.2-1.8-7.3-1.8-12.7 0-10.3 3.5-18.3 10.7-25.1 7.7-7.2 12.3-8.8 25.2-9 13.9-.2 15.1-1.2 16.6-12.6 1.1-9.3 4.2-15.7 10.1-21.6 8.3-8.2 20.4-11.8 31.8-9.3 7 1.5 10.1-.1 13.6-7.1 4.4-8.9 12-15.5 20.8-18.4 6.1-2 19-1.3 24.9 1.4zM446 262.5v8.5H148v-17h298v8.5zm-253.6 32.7c.6 6.5 7.7 215.3 7.6 224.5v5.3h-25.8l-.6-6.2c-.8-8.3-15.6-223.8-15.6-227.2V289h33.8l.6 6.2zm60.6 17.7v23.9l-6.6 6.4c-13.5 12.8-18.9 24.7-18.9 41.8 0 8.3.5 11.9 2.3 17.2 3.1 9 8.5 17.1 16.5 24.5l6.7 6.2V525h-34.8l-.6-13.3c-.7-13.9-7.6-213.9-7.6-219.5V289h43v23.9zm70-4.3c0 18.3-.1 19.6-1.7 18.9-11.4-4.5-37.2-4.5-48.5 0-1.7.7-1.8-.6-1.8-18.9V289h52v19.6zm61-15.4c0 2.4-1.1 35.6-2.5 73.8-1.4 38.2-2.5 72.5-2.5 76.1v6.5l-4.9 2.3c-9.9 4.4-17.3 16.6-15.7 25.9.4 2.8 0 4.1-2.1 6.6-4.4 5.2-6.3 10.5-6.3 17.7 0 7.9 3.3 15.3 8.8 19.9l3.7 3H341v-92.1l6.7-6.2c8-7.4 13.4-15.5 16.5-24.5 1.8-5.3 2.3-8.9 2.3-17.2 0-8.3-.5-11.9-2.3-17.2-3.1-9-8.5-17.1-16.5-24.5l-6.7-6.2V289h43v4.2zm41.4 27.5c-1.2 17.5-3.7 53.7-5.5 80.5l-3.3 48.8h-5.8c-3.2 0-7.5.7-9.5 1.5-2 .9-4 1.2-4.5.7-.7-.7 3.6-143.4 4.8-157l.6-6.2h25.4l-2.2 31.7zm-116.7 21.8c16.1 3 30.6 13.3 36.9 26.1 2.6 5.4 2.9 6.8 2.9 16.4 0 9.6-.3 11-2.9 16.4-6.6 13.5-21.2 23.4-39 26.4-8.9 1.5-10.3 1.5-19.2 0-17.8-3-32.4-12.9-39-26.4-4-8-4.6-21.1-1.5-29.4 5.5-14.7 21.7-26.9 39.4-29.9 8-1.3 13.8-1.2 22.4.4zM281 444.6c11.3 2.4 31.1 1.4 40.3-2.1 1.6-.7 1.7 1.7 1.7 40.9V525h-52v-41.6c0-39.2.1-41.6 1.8-40.9.9.4 4.6 1.3 8.2 2.1zM391.1 470c5.5 3.7 7.5 3.7 13 0 2.4-1.6 5.7-3 7.2-3 4 0 7.4 3.8 8.2 9.2.6 4.1.3 5-2.8 9.4-6 8.6-7.2 16-4 26.1 1.7 5.3 1.7 5.3-.8 7.9-4.9 5.3-12.6 6.8-18.7 3.6-1.8-1-5-4-7-6.8-3.5-4.6-4.2-4.9-9.2-5.6-6.3-.7-10-4-10-8.7 0-3.1 3.4-8.1 5.4-8.1 1.6 0 5.2-3.9 6-6.7.4-1.2 0-3.8-.9-5.8-2.6-6.4-1.7-10.6 3-13.3 3.2-1.8 5.9-1.4 10.6 1.8zm61.4 0c2.1 1.7 5 3 6.5 3s4.4-1.3 6.5-3c4.4-3.5 8.2-3.8 11.8-1 3.4 2.7 4.3 7 2.3 10.9-3.2 6.1-1.7 11 4.3 14.1 4.2 2.1 5.1 3.6 5.1 8.1 0 4.6-1.5 6.6-6.5 8.4-3.4 1.4-5.1 2.8-7.1 6.2-1.8 3.1-3.9 5.1-6.7 6.4-9.1 4.1-15.9 1.4-22.7-9-1.2-1.8-2.9-2.6-7.4-3.2-6.4-.8-9.2-2.7-10.1-6.9-.9-3.9 1.5-8.1 5.8-10.4 4.7-2.4 6.5-6.7 4.7-11-2.6-6.4-2.5-9.3.8-12.6 4-3.9 7.7-3.9 12.7 0z"/>
                  <path d="M321 153.6c-.8.4-3 1.3-4.8 2l-3.2 1.3 3.2 5.8c5.8 10.2 5.1 9.5 8.4 8.3 9.8-3.8 22.7 6.7 21.2 17.2-.3 1.9.6 2.4 6.7 4 11.3 2.9 10.8 3.2 10.3-6.6-.5-10.2-3.7-17.4-10.4-23.6-6.5-6-12.3-8.3-21.9-8.7-4.4-.1-8.7 0-9.5.3zM241.3 161.1c-10.8 4.1-19.6 15.4-21 26.7l-.6 5.2h17.2l1.1-4.3c1.9-7.1 8.9-12.7 15.7-12.7 1.5 0 4.7.9 7.1 2l4.3 2 5.4-5.8c3-3.1 5.4-6.2 5.5-6.7 0-1.4-6.3-5.4-11.2-7.1-5.9-2-17.2-1.7-23.5.7zM61.4 109.8c-8.9 3.1-14.4 8.9-17.1 18.1-.9 3.1-1.3 6.9-.9 9.1.5 3 .2 4.1-1.8 5.9-3.8 3.6-6.8 11.5-6.7 18.1 0 9.9 4.6 17.8 13 22.3 2.7 1.5 5.6 2.7 6.4 2.7.9 0 4.4 2.5 7.7 5.5 8.3 7.3 15 9.8 25.1 9.3 9.4-.6 15.4-3.3 22.9-10.5 3-3 7.5-6.8 10-8.6 5.3-3.9 9.6-11.2 10.5-17.9.9-6.2-1.6-14.7-5.7-19.4-2.8-3.1-3.1-4.2-2.9-8.7.4-10-4.4-18.7-13.2-23.7-6.9-3.9-13.7-4.7-20.7-2.3-5.2 1.7-5.7 1.7-10.5.1-6.4-2.2-9.7-2.2-16.1 0zm14.3 18.6c4.9 4.1 7.8 4.3 12.8.7 5.1-3.6 9.1-4 12.9-1 2.1 1.6 2.6 2.9 2.6 6.4 0 2.4-.4 4.7-1 5-1.3.8-1.3 7.1 0 9.6.6 1 2.5 2.6 4.3 3.5 4.2 2.2 5.6 4.2 5.7 8 0 4-3.2 8.1-7 8.9-1.7.4-3.8 1.8-4.8 3.3C93 185.1 82 187.2 73.6 178c-2-2.2-3.6-4.4-3.6-5 0-1.5-3.9-3.2-8.3-3.6-5.1-.5-8.5-2.7-9.3-6.1-1-4 .7-7.3 5.5-10.8 5.6-3.9 7-7.5 4.7-12.2-2.3-4.9-2-9 .9-11.8 3.2-3.3 8.4-3.3 12.2-.1zM140 120.8c-1.1 3.7-2.3 7.4-2.6 8.3-.3 1.1.6 2.1 2.8 3 5.6 2.3 12.5 9.6 14.8 15.5 1.1 3 2 6.6 2 7.9 0 2.5.1 2.5 8.6 2.5h8.7l-.5-6.4c-1.3-15.2-12.4-29.5-28-36l-3.7-1.6-2.1 6.8zM455 392.7c-1.3 3.7-2.5 7.3-2.7 7.9-.2.7 1.6 2.2 4.1 3.4 8.2 3.9 15.6 15 15.6 23.2 0 1.6 1 1.8 8.6 1.8h8.7l-.5-6.3c-.7-7.9-5.1-17.6-11.2-24.3-4.5-5.1-13.1-10.8-17.7-11.9-2.6-.6-2.8-.3-4.9 6.2z"/>
                </svg>
            </Link>

        </div>
    </nav>
  )
}

export default Navbar