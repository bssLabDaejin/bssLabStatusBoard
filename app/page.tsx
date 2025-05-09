import './page.css'

function MainTitle(){
    return(
        <div >
            <div className='title' id='printLogo'>
                <img src='/BSSLogoLong.png' id='mainImageFloat'/>
                <h1 style={{margin: '0 auto'}}>빅데이터시스템소프트웨어 실험실</h1>
            </div>
        </div>
    )
}

function MainBody() {
    return (
        <div>
            
        </div>
    )
}

export default function Page(){
    return (
        <div style={{backgroundColor:"gray", margin:0}}>
            <div className='MainBox'>
                <div id='title'>
                    <MainTitle />
                </div>
                
                <div id='member'>
                    <div>
                    {/* <div style={{margin:'2vh auto'}}> */}
                        <h1 style={{margin: '0.5vh 1vh'}}>
                            부원 소개
                        </h1>
                    </div>
                </div>
                
                <div id='Body'>
                    <MainBody />
                </div>
                
            </div>
        </div>
    )
}