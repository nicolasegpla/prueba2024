import './nav.scss'
import { useNavigate } from 'react-router-dom'
function Nav() {

    const navigate = useNavigate()

    function testing() {
        navigate('/testing')
    }
    function mainmenu() {
        navigate('/main-menu')
    }
    return(
        <>
            <nav>
                <div className='div-logo'>
                    <span>Reto Tecnico</span>
                </div>
                <div className='div-ul'>
                    <ul>
                        <li onClick={mainmenu}>Main-menu</li>
                        <li onClick={testing}>Testing</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav