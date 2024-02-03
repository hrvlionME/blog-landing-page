function BotSection(){


    return(
        <>
            <section className="subscribe">
            <div className="text-center mx-auto py-12 sm:py-20 lg:py-32">
                <h6 className="text-5xl text-pri font-title">Subscribe to our<br />
                    <span className="text-sec">Blog</span>
                </h6>
                <p className="text-2xl text-pri max-w-xs font-body mx-auto py-6">Please subscribe to get regulard updates and featured news through your email!</p>
                <input type="email" placeholder="Email Address" className="bg-our-bg px-8 py-2 rounded-3xl shadow-inner ring-sec focus:outline-none focus:ring-1" />
                <input type="submit" value="Submit" className="mt-4 sm:mt-0 px-8 py-2 sm:-ml-12 rounded-3xl bg-sec text-white hover:bg-blue-800 focus:ring-1 -ml-12" />
            </div>
            </section>
        </>
    )
}

export default BotSection