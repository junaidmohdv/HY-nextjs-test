export default function CommentCard({props}) {
    return(
        <div className="flex">
            <div className="flex-shrink-0 mr-3">
                <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://via.placeholder.com/150/92c952" alt="" />          
            </div>
            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                <strong>Anonymous</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                <p className="text-sm">
                {props.comment}
                </p>
            </div>
        </div>

    )
}