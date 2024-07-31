import './tarjetas.scss'
function Tarjetas () {
    return (
        <>
            <div className='card-container'>
                <div className="card">
                    <div className="card-title"><p>Licencias Construccion</p></div>
                    <div className="card-info">
                        <span>$10 dolares/ mo</span>
                        <p className='card-p'>Ingenieria legal arquitectura</p>
                    </div>
                    <button className='button-card'>Prueba</button>
                </div>

                <div className="card">
                    <div className="card-title"><p>Licencias Construccion</p></div>
                    <div className="card-info">
                        <span>$15 dolares/ mo</span>
                        <p className='card-p'>Ingenieria legal arquitectura</p>
                    </div>
                    <button className='button-card active'>Prueba</button>
                </div>

                <div className="card card-color">
                    <div className="card-title active"><p>Licencias Construccion</p></div>
                    <div className="card-info">
                        <span>$13 dolares/ mo</span>
                        <p className='card-p'>Ingenieria legal arquitectura</p>
                    </div>
                    <button className='button-card active'>Prueba</button>
                </div>

            </div>
        </>
    )
}

export default Tarjetas