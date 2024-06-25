import "./action.css"
function Action (){
    let numero = 0;
    function somar(numero){  
        numero = numero +1;
        return numero;
    }
    return(
        <>
        <h1>Soma:{numero}</h1>
        <div className='Container'><button onClick={somar}>Somar +1</button></div>
        </>
    )
}

export default Action