//function to get excerpt text from the post
const excerpt = (text) => {
    text.length > 70 ? text = text.substring(0,70) + "..." : text
    return text;
}

export default function PostCard({props}){
    return(
            <div className="relative rounded-lg shadow-lg bg-white m-5 h-full mb-5">
                <div className=" text-lg font-extrabold p-6">{props.title}</div>

                <div className="px-8">
                    <p className="text-gray-500">{excerpt(props.body)}</p>
                </div>

                <div className="text-right py-3 px-6 text-gray-500 mt-10">
                    <button className="absolute left-6 bottom-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">View more</button>
                </div>
            </div>
    )
}