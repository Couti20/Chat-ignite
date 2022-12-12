import './sidebar.modulo.css'

import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {

    return (
        <aside className='sidebar'>
            <img className="cover" src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" alt="" />


            <div className="profile">
            <Avatar  src="https://avatars.githubusercontent.com/u/111618271?v=4"/>
                <strong>Michael Coutinho </strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine  size={17}/>
                    Editar perfil
                </a>
            </footer>
        </aside>

    )

}