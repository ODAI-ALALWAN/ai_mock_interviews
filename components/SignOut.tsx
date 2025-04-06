"use client"
import { Button } from './ui/button'
import { IoIosLogOut } from "react-icons/io";

import { signOut } from '@/lib/actions/auth.action'

const SignOut = () => {
  return (
    <div>
      <Button variant="secondary" size="icon" className="btn-primary" 
      onClick={signOut}
      
      ><IoIosLogOut/></Button>
    </div>
  )
}

export default SignOut
