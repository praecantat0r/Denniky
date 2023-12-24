function Post(props) {
    return (
    <div className="m-3 bg-white rounded-lg border-2 border-black flex flex-row" style={{minHeight: "110px", maxHeight: "110px"}}> 
        <div className=" w-1/3 bg-gray-200 border-r-2 border-black rounded-lg flex-none">
            <div className="w-full h-full flex justify-center items-center"><p className="h-full w-full flex justify-center items-center text-6xl">{props.Icon}</p></div>
        </div>
        <div className="flex flex-col w-full overflow-hidden">
            <div className="w-full flex flex-row">
                <div className="basis-3/4 h-6 border-b-2 border-black overflow-hidden"><p className="mx-1 font-dotgothic truncate">{props.Title}</p></div>
                <div className="basis-1/4 h-6 border-b-2 border-black"><p className="mx-1 font-dotgothic text-sm">{props.Date}</p></div>
            </div>
            <div className="w-full h-full">
                <div className="w-full h-full overflow-hidden"> <p className="text-gray-600 ml-2 h-full text-clip text-sm">{props.Description}</p></div>
            </div>
        </div>
    </ div>
    )
}
export default Post