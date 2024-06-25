import './home.css'

function Home(){
    function teste(){
        window.alert('Funcionou')
    }
    return(
        <>
        <div className='bg-1'></div>
        <button onClick={teste}>Ativar</button>
        <div className='bg-2'></div>
        <div className='bg-3'></div>
        <div className='bg-4'></div>
        </>
    )
}

export default Home