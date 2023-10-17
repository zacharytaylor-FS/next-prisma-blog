'use client'
// import { Fragment, useState } from 'react'
import  Link from 'next/link'
import Image from 'next/image'
import BrandLogo from '../../public/logo.png'
import {
  Button, 
  Navbar,   
  NavbarBrand,  
  NavbarContent,   
  NavbarItem,   
  NavbarMenuToggle,  
  NavbarMenu,  
  NavbarMenuItem
} from "@nextui-org/react";


export default function Header() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ]

  return (
    <Navbar className="w-full" size=''>
          <NavbarContent className='sm:hidden' justify='start'>
            <NavbarMenuToggle/>
          </NavbarContent>


        <NavbarContent className='sm:hidden pr-3' justify='start'>
          <NavbarBrand>
            <Link href="#" className="-m-1.5 p-1.5 [&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
              <Image className="h-8 w-3/4" src={BrandLogo} alt="" />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        
        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarBrand>
            <Link href="#" className="-m-1.5 p-1.5 [&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
              <Image className="h-8 w-3/4" src={BrandLogo} alt="" />
            </Link>
          </NavbarBrand>
          <NavbarItem>
            <Link color='' href=''>
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='' href=''>
              Feed
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='' href=''>
              Drafts
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='' href=''>
              Sign in
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify='end'>
        <NavbarItem className='md:hidden lg:flex'>
            <Link color='' href=''>
              Sign up
            </Link>
          </NavbarItem>
        <NavbarItem className='md:hidden lg:flex'>
            <Button as={Link} color='primary' href='' variant='flat'>
              Sign in
            </Button>
          </NavbarItem>
        </NavbarContent>
        
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
              className='w-full'
              color={
                index === 2 ? 'warning' : index === menuItems.length -1 ? 'danger' : 'foreground'
              }
              href='#'
              size='lg'>
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
  )
}
