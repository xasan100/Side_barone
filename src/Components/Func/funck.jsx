import React, { useState } from 'react'
import "./stayle.css"
import Men from "../../assest/men.jpg"
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";

export const SideMene = () => {
    const [inactive, setInactive] = useState(false);
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    const OpenFunction = () => {
        setOpen(!open)
    }


    const OpenFunction2 = () => {
        setOpen2(!open2)
    }
    const OpenFunction3 = () => {
        setOpen3(!open3)
    }


    return (
        <div className={`side_menu  ${inactive ? "inactive" : ""}`}>
            <div className='top_section' >
                <div className='logo' >
                    <span onClick={() => setInactive(!inactive)} className='React_i'>  <FaReact /></span>
                    <div onClick={() => setInactive(!inactive)} className='toggele-menu-btn' >
                        {!inactive ? <i className="bi bi-arrow-left-square-fill"></i> : ""}
                    </div>
                </div>
            </div>
            < div className='search-controller' >
                <button className='search-btn'>
                    <i className="bi bi-search"></i>
                </button>
                <input type="text" placeholder=' search me' />
            </div>

            < div className='divider' ></div>

            <div className='main-menu'>
                <ul>
                    <li>
                        <span className='menu-item' onClick={() => OpenFunction()}>
                            <div className="box_shadowf">
                                <div className='menu-icon'>
                                    <i><GrAppsRounded /></i>
                                </div>
                                <span>Fontend</span>
                            </div>
                        </span>
                        {open ?
                            <ul className={`sub-menu ${inactive ? "addColor" : ""} `} >
                                <li>
                                    <span><FaHtml5 /> </span>
                                    <span>Html5</span>
                                </li>
                                <li>
                                    <span><FaCss3 /> </span>
                                    <span>Css</span>
                                </li>
                                <li>
                                    <span><FaJs /> </span>
                                    <span>Java script</span>
                                </li>
                            </ul>
                            : ""
                        }
                    </li>
                </ul>
            </div>

            <div className='main-menu'>
                <ul>
                    <li>
                        <span className='menu-item' onClick={() => OpenFunction2()}>
                            <div className="box_shadowf">
                                <div className='menu-icon'>
                                    <i><GrAppsRounded /></i>
                                </div>
                                <span>ANDROID</span>
                            </div>
                        </span>
                        {open2 ?
                            <ul className={`sub-menu ${inactive ? "addColor" : ""} `} >
                                <li>
                                    <span className='icon_fone'><FaHtml5 /> </span>
                                    <span>Html5</span>
                                </li>
                                <li>
                                    <span className='icon_fone'><FaCss3 /> </span>
                                    <span>Css</span>
                                </li>
                                <li>
                                    <span className='icon_fone'><FaJs /> </span>
                                    <span>Java script</span>
                                </li>
                            </ul>

                            : ""
                        }
                    </li>
                </ul>
            </div>
            <div className='main-menu'>
                <ul>
                    <li>
                        <span className='menu-item' onClick={() => OpenFunction3()}>
                            <div className="box_shadowf">
                                <div className='menu-icon'>
                                    <i><GrAppsRounded /></i>
                                </div>
                                <span>BACKEND</span>
                            </div>
                        </span>
                        {open3 ?
                            <ul className={`sub-menu ${inactive ? "addColor" : ""} `} >
                                <li>
                                    <span><FaHtml5 /> </span>
                                    <span>React Native</span>
                                </li>
                                <li>
                                    <span><FaCss3 /> </span>
                                    <span>Kotlin</span>
                                </li>
                                <li>
                                    <span><FaJs /> </span>
                                    <span>Java</span>
                                </li>
                            </ul>

                            : " "
                        }
                    </li>
                </ul>
            </div>
            <div className='side-menu-footer'>
                <div className='avatar'>
                    <img src={Men} alt="" />
                </div>
                <div className='user-info'>
                    <h4>Khasan</h4>
                    <p>xasan_100@icloud.com</p>

                </div>
            </div>
        </div>
    )
}
