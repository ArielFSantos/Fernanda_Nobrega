import "./action.css"
function Action (){
    let numero = 1;
    function somar(){  
        numero = numero +1;
        window.alert(`Soma : ${numero}`)
    }
    return(
        <>
        <div className='Container'><button onClick={somar}>Somar +1</button></div>
        </>
    )
}

export default Action