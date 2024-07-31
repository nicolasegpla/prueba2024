import { useContext } from 'react';
import './_appui.scss';
import { GlobalState } from '../../Context/GlobalState';

function AppUI() {

    const {test} = useContext(GlobalState)
    console.log(test)
    return (
        <>
            <h1 className='text'>prueba</h1>
        </>
    )
}

export default AppUI