export default function ButtonComponent({nombre, color}) {
    const misEstilos = {
        backgroundColor: color
    }
    const handelClick = () => {
        alert(`Estas en la seccion de ${nombre}`)

    }
    return (
    <>

    <button  onClick={handelClick}  style={misEstilos}>{nombre}</button>
    
    </>
    
    )
}