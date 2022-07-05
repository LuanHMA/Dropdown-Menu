import { useState } from 'react';
import Logo from '../assets/images/logo.svg'
import iconTodo from '../assets/images/icon-todo.svg'
import iconReminders from '../assets/images/icon-reminders.svg'
import iconPlanning from '../assets/images/icon-planning.svg'
import iconCalendar from '../assets/images/icon-calendar.svg'
import arrowUp from '../assets/images/icon-arrow-up.svg'
import arrowDown from '../assets/images/icon-arrow-down.svg'
import iconMenu from '../assets/images/icon-menu.svg'
import iconCloseMenu from '../assets/images/icon-close-menu.svg'

export function Header(){

    const [ changeMenu, setChangeMenu ] = useState(false);
    const [ statusMenuItemTop, setStatusMenuItemTop ] = useState(false);
    const [ statusMenuItemBottom, setStatusMenuItemBottom ] = useState(false);

    function handleMenuItemTop(){
        setStatusMenuItemTop(!statusMenuItemTop);
    }
    function handleMenuItemBottom(){
        setStatusMenuItemBottom(!statusMenuItemBottom)
    }

    return(
        <header className="p-4">
            <div className="flex items-center justify-between md:justify-start ">
                
                <img src={Logo} alt="Logo" />

                {/* Menu */}
                <div className={`
                    fixed ${changeMenu ? "right-0" : "right-[-100vw]"} top-0 bg-[#f7f4f4] shadow-lg pl-5 py-2 h-screen z-99 w-[60vw] transition-all ease-linear delay-300
                    
                    md:static md:shadow-none md:h-max md:w-max md:flex md:justify-between md:flex-1

                   
                `}>

                    <div className="flex justify-end mb-5 mt-1 mr-2 md:hidden">
                        <img 
                            src={iconCloseMenu} 
                            alt="Icon close menu" 
                            onClick={()=> setChangeMenu(false)}   
                            className="cursor-pointer" 
                        />
                    </div>

                    {/* Navegation */}
                    <ul className={`
                        flex flex-col gap-y-4
                        md:flex-row md:gap-y-0 md:gap-x-8 md:items-center 
                    `}>
                        
                        <li className={`overflow-hidden transition-all`}>
                            <div 
                                className='flex items-center gap-x-2 md:mb-0 cursor-pointer hover:text-[#141414]'
                                onClick={handleMenuItemTop}
                            >
                                <span>Features</span>
                                <img src={statusMenuItemTop ? arrowDown : arrowUp } alt="Arrow Up Icon" />
                            </div>

                            {/* Items menu */}
                            <ul className={`
                                ${statusMenuItemTop ? "hidden" : false}
                                flex flex-col gap-y-3 pl-4 mt-3

                                md:absolute md:top-[65px] md:left-[78px]  md:p-4 md:rounded-lg md:shadow-lg md:border-3 md:border-black md:bg-[#fafafa] md:mt-1
                                2xl:left-[315px]
                            `}>
                                <li><a href="#" className="flex items-center gap-x-2">
                                    <img src={iconTodo} alt="Todo Icon" />
                                    <span>Todo List</span>
                                </a></li>
                                
                                <li><a href="#" className="flex items-center gap-x-2">
                                    <img src={iconCalendar} alt="Todo Icon" />
                                    <span>Calendar</span>
                                </a></li>

                                <li><a href="#" className="flex items-center gap-x-2">
                                    <img src={iconReminders} alt="Todo Icon" />
                                    <span>Reminders</span>
                                </a></li>

                                <li><a href="#" className="flex items-center gap-x-2">
                                    <img src={iconPlanning} alt="Todo Icon" />
                                    <span>Planning</span>
                                </a></li>
                            </ul>
                        </li>

                        <li className={`overflow-hidden transition-all`}>
                            <div 
                                className="flex items-center gap-x-2 cursor-pointer md:mb-0 hover:text-[#141414]"
                                onClick={handleMenuItemBottom}
                            >
                                <span>Company</span>
                                <img src={ statusMenuItemBottom ? arrowDown : arrowUp } alt="Arrow Up Icon" />
                            </div>

                            {/* Items c */}
                            <ul className={`
                                ${statusMenuItemBottom ? "hidden" : false}
                                flex flex-col gap-y-3 pl-4 mt-3

                                md:absolute md:top-[65px] md:p-4 md:bg-[#fafafa] md:rounded-lg md:shadow-lg md:border-3 md:border-black md:mt-1 
                            `}>
                                <li>
                                    <a href="#" className="hover:text-[#141414]">History</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#141414]">Our Team</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#141414]">Blog</a>
                                </li>
                            </ul>
                        </li>

                        <li><a href="#" className="hover:text-[#141414]">Careers</a></li>

                        <li><a href="#" className="hover:text-[#141414]">About</a></li>

                    </ul>

                    <div className={`
                        flex flex-col items-center mt-5 gap-y-3 
                        md:flex-row md:mt-0 md:gap-x-4
                    `}>
                        <button className="w-[80%] hover:text-[#141414] ">Login</button>
                        <button className="w-[80%] border-2 rounded-lg py-1 border-[#696969] hover:border-[#141414] hover:text-[#141414] md:w-auto md:px-3">Register</button>
                    </div>

                </div>

                {/* Icon Menu Mobile */}
                <img 
                    src={iconMenu} 
                    alt="Icon Menu" 
                    className="cursor-pointer md:hidden"
                    onClick={ ()=> setChangeMenu(true) }
                />

            </div>
        </header>
    )
}