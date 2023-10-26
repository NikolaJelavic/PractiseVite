 import ImageShow from './ImageShow'

export default function ImageList({images}) {
    const renderedImages = images.map((image)=>{
        return <ImageShow image={image} key={image.id} />
    })

    return <div className="flex flex-row flex-wrap w-2/5">{renderedImages}</div>
}
