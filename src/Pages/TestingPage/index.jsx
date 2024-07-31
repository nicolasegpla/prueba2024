import Layout from "../../Components/Layout"
import Tarjetas from '../../Components/Tarjetas'
function TestingPage() {
    return(
        <>
            <Layout>
                <h1 className='title'>Testing</h1>
                <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quisquam quibusdam possimus quidem veritatis deleniti earum omnis officiis cum quis magnam beatae id atque, eveniet illo voluptatibus ex ipsum veniam!</p>
                    <Tarjetas />    
            </Layout>
            
        </>
    )
}

export default TestingPage