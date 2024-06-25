import './main.css'

function main(){
    function teste(){
        window.alert('Funcionou')
        console.log('Funcionou')
    }
    return(
        <>
        <div className='bg-1'>
            <button onClick={teste}>Clique</button>
        </div>
        <div className='bg-2'></div>
        <div className='bg-3'></div>
        <div className='bg-4'></div>
        </>
    )
}

export default main