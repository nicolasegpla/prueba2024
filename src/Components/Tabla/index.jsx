/* eslint-disable react/prop-types */

import './tabla.scss'
function Tabla({data}) {
    return(
        <>
        <div className='tabla-div'>
        <tbody>
            <tr className='titulo-tabla-tr'>
                <th className='id titulo-tabla'>#</th>
                <th className='titulo-tabla'>Numero de radicacion</th>
                <th className='titulo-tabla'>Fecha</th>
                <th className='titulo-tabla'>Nombre solicitante</th>
            </tr>
            {
                data?.map(solicitud => (
                    <tr key={solicitud.id}>
                        <th className='id'>{solicitud.id}</th>
                        {
                            solicitud.numero_radicacion ? <th>{solicitud.numero_radicacion}</th> : <th className='validator'>invalid</th>
                        }
                        {
                            solicitud.fecha ? <th>{solicitud.fecha}</th> : <th className='validator'>invalid</th>
                        }
                        {
                            solicitud.nombre_solicitante ? <th>{solicitud.nombre_solicitante}</th> : <th className='validator'>invalid</th>
                        }
                    </tr>
                ))
            }

         </tbody>

        </div>
         

        </>
    )
}

export default Tabla