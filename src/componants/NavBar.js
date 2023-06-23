import React from 'react'
import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <nav className='flex flex-col w-full h-20  text-center items-center justify-around sm:flex-col '>
            <div>
                <input type="text" placeholder="Search Your Notes...." className='rounded-md px-8 py-1 bg-slate-200' />
            </div>
            <div>
                <ul className='flex flex-row gap-6 text-base'>
                    <li><Link to="/"> Home Page </Link></li>
                    <li><Link to="/ImportantNotes">Important Notes</Link></li>
                    <li><Link to="/ToDoList">To Do List</Link></li>

                </ul>
            </div>

        </nav>
    )
}
