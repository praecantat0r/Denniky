function Post(props) {
    return (
    <div className="m-3 bg-white rounded-lg border-2 border-black overflow-hidden flex flex-row" style={{minHeight: "130px", maxHeight: "130px"}}> 
        <div className="h-full w-1/3 bg-gray-200 border-r-2 border-black rounded-lg flex-none">
            <div className="w-full h-full flex justify-center items-center"><p className="text-6xl">{props.Icon}</p></div>
        </div>
        <div className="flex flex-col w-full">
        <div className="w-full flex flex-row">
            <div className="basis-3/4 h-6 border-b-2 border-black"><p className="mx-1 font-dotgothic">{props.Title}</p></div>
            <div className="basis-1/4 h-6 border-b-2 border-black"><p className="mx-1 font-dotgothic text-sm">{props.Date}</p></div>
        </div>
        <div className="w-full h-full">
            <div className="w-full h-full"> <p className="text-gray-600 ml-2">{props.Description}</p></div>
        </div>
        </div>
    </ div>
    )
}
export default Post