import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {RiSearchLine} from "react-icons/ri"
import {TbFocusCentered}from "react-icons/tb"
import {RiShoppingCartLine} from "react-icons/ri"
import {CgProfile}  from "react-icons/cg"
import './home.scss'
const BottomMenu = () => {
  return (
    <div className='bottomMenu'>
<ul>
    <li><AiFillHome/></li>
    <li><RiSearchLine/></li>

    <li><TbFocusCentered/></li>
    <li><RiShoppingCartLine/></li>
    <li><CgProfile/></li>
</ul>


    </div>
  )
}

export default BottomMenu