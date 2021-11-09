export default function ImageCard({props}){
    return(
        <div className="w-full rounded">
            <img src={props.url} alt={props.title} />
        </div>
    )
}