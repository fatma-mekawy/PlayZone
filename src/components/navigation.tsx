import Link from 'next/link'
import React from 'react'
import NavigationLinks from './navigationLinks'
import Search from './Search'
const Navlinks =[
  {href : "/", label : "Home"},
  {href : "/about", label : "About"}, 
  {href : "/services", label : "Services"},
{
    href : "/courts", 
    label : "Sport Courts"
  }
]
export default function Navigation() {
  return (
    <NavigationLinks links={Navlinks} />
    
  )
}
