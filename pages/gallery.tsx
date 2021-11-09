import Head from 'next/head'
import { useState} from "react"
import { GetServerSideProps } from "next"
import ImageCard from '../components/ImageCard'



const Gallery = ({photos}) => {

    const [ postNum, setPostNum] = useState(8)

    function handleClick() {
        setPostNum(prevPostNum => prevPostNum + 50)
    }

     return (
        <>
            <Head>
                <title>Gallery Page</title>
            </Head>

            <div className="container grid grid-cols-4 gap-10 mx-auto">
                {photos.slice(0, postNum).map(photo => (
                    <ImageCard key={photo.id}  props = {photo}/>
                ))}
            </div>
            
            <div className='mt-10 flex place-content-center'>
                <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Load More</button>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  const photos = await response.json()

  return {
    props: {
      photos
    }
  }
}

export default Gallery
