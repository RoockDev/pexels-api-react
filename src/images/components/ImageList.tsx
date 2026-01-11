import { type Image } from "../interfaces/image.interface";

interface Props {
    images: Image[];
}

export const ImageList = ({images}: Props) => {
    return (
        <div className="images-container">
            {images.map((image) => (
                <div key={image.id} className="image-card">
                    <img src={image.url} alt={image.title} />
                    <h3>{image.title}</h3>
                    <p>{image.photographer}</p>
                </div>
            ))}
        </div>
    );
};

