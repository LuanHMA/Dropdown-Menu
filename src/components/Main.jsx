import { 
    imageClientAudio,
    imageClientDatabiz,
    imageClientMaker,
    imageClientMeet,
    imageMainMobile,
    imageMainDesktop
} from './Image'

export function Main(){
    return(
        <main className="mt-3 px-7 md:w-11/12 m-auto md:flex md:flex-row-reverse md:h-[85vh]">
            <div className="md:w-[60%] md:flex md:justify-end lg:justify-center">
                <img 
                    src={imageMainMobile} 
                    alt="Imagem principal mobile" 
                    className={`
                        sm:w-9/12 sm:m-auto
                        md:hidden
                    `}
                />
                <img 
                    src={imageMainDesktop} 
                    alt="Imagem principal desktop" 
                    className={`
                        hidden h-full
                        md:block
                        
                    `}
                />
            </div>
            

            <div className={`
                md:w-[40%] 
            `}>
                <div className="flex flex-col items-center justify-center gap-y-5 my-8 md:items-start md:mt-20 lg:mt-24 lg:gap-y-8">
                    <h1 className={`
                        text-4xl font-bold text-center 
                        md:text-left md:text-[50px]
                        lg:text-[70px] lg:leading-[70px]
                    `}>Make remote work</h1>

                    <p className={`
                        text-md text-center w-11/12 text-[#696969] 
                        md:text-left md:text-md
                        
                    `}>Get your team in sync, no matter your location. streamline processes, create team rituals, and watch productivity soar.</p>

                    <button className="text-md border-2 border-black rounded-lg px-5 py-2 text-white bg-black font-bold hover:bg-white hover:text-black transition-colors md:text-md lg:text-lg">
                        Lear more
                    </button>
                </div>

                <footer className="flex justify-center items-center px-2 mt-14 mb-20 gap-x-6 md:justify-start md:flex-wrap">
                    <img src={imageClientDatabiz} alt="Databiz logo"/>
                    <img src={imageClientAudio} alt="Audiophile logo" />
                    <img src={imageClientMeet} alt="Meet logo" />
                    <img src={imageClientMaker} alt="Maker logo" />
                </footer>
            </div>

        </main>
    )
}