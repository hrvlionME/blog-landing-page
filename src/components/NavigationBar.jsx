import {useState, useEffect} from 'react'

function NavigationBar(){
    const [isClicked, setIsClicked] = useState(false)


    useEffect(() => {
        const handleResize = () => {
            setIsClicked(window.innerWidth <= 768); 
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); 


    function handleToggle(){
        setIsClicked(!isClicked)
    }

    return(
        <>
            <div className="bg-white shadow-md">
                <header className="container mx-auto max-w-7xl flex flex-wrap justify-between items-center p-6">
                    <div className="flex items-center text-sec hover:text-pri hover:cursor-pointer transition duration-200">
                        <svg role="img" className="fill-current h-8 w-8 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                        </svg>
                        <span className="text-xl font-title">TailwindNews</span>
                    </div>
                    <div className="md:hidden block">
                        <button className={`rounded bg-sec text-white hover:bg-pri transition px-3 py-1 ${isClicked ? '' : 'hidden'}`} onClick={handleToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        </button>
                        <button className={`rounded bg-sec text-white hover:bg-pri transition px-3 py-1 ${isClicked ? 'hidden' : ''}`} onClick={handleToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>


                        </button>
                    </div>
                    <nav className={`${isClicked ? 'hidden' : ''} font-title w-full md:w-auto md:flex md:items-center`}>
                        <ul className="text-lg">
                            <li className="my-3 md:my-0 block md:inline-block items-center mr-4">
                                <a href="" className="text-pri hover:text-sec transition duration-150">Home</a>
                            </li>
                            <li className="mb-3 md:mb-0 block md:inline-block items-center mr-4">
                                <a href="" className="text-pri hover:text-sec transition duration-150">About</a>
                            </li>
                            <li className="mb-3 md:mb-0 block md:inline-block items-center mr-4">
                                <a href="" className="text-pri hover:text-sec transition duration-150">Contact</a>
                            </li>
                            <li className="mb-3 md:mb-0 block md:inline-block items-center mr-4">
                                <a href="" className="text-pri hover:text-sec transition duration-150">Product & Shop</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default NavigationBar