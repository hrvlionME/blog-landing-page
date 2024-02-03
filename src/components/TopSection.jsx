

function TopSection(){


    return(
        <>
            <div className="text-center py-10 sm:py-14">
                <h1 className="text-3xl md:text-5xl text-sec font-title">Latest Blog <br />
                    <span className="text-pri">Posts</span>
                </h1>
                <p className="text-2xl text-pri max-w-xs font-body mx-auto py-6">Welcome to the blog site.</p>
                <input type="search" placeholder="Search..." className="bg-our-bg px-8 py-2 rounded-3xl shadow-inner ring-sec focus:outline-none focus:ring-1" />
            </div>
        </>
    )
}

export default TopSection