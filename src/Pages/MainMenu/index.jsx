import { useContext } from 'react'
import Layout from '../../Components/Layout'
import { GlobalState } from '../../Context/GlobalState'
import Tabla from '../../Components/Tabla'
import Tarjetas from '../../Components/Tarjetas'
import './mainmenu.scss'
function MainMenu() {
    const {data} = useContext(GlobalState)
    console.log(data)
    return(
        <>  
            <Layout>
                <h1 className='title'>Tremites en proceso de observacion</h1>
                <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quisquam quibusdam possimus quidem veritatis deleniti earum omnis officiis cum quis magnam beatae id atque, eveniet illo voluptatibus ex ipsum veniam!</p>
                <Tarjetas />
                <Tabla data={data} />
            </Layout>
        </>
    )
}

export default MainMenu