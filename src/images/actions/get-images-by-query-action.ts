import { pexelsApi } from "../api/pexels.api";
import { type Image } from "../interfaces/image.interface";
import { type PexelsResponse } from "../interfaces/pexels.response";

export const getImagesByQuery = async (query:string): Promise<Image[]> => {
    // si la busqueda esta vacio devolvemos una lista vacia y no gastamos peticiones
    if(query.length === 0) return[];

    try{
        const {data} = await pexelsApi.get<PexelsResponse>('/search',{
            params: {
                query:query,
                per_page:12,
                locale: 'es-ES'
            }
        } );
        
        //cogemos los datos que nos interesan
        const images: Image[] = data.photos.map(pexelsPhoto => ({
            id:pexelsPhoto.id,
            title: pexelsPhoto.alt || 'Sin título',
            url: pexelsPhoto.src.medium, //tamaño mediano para la tarjeta
            photographer: pexelsPhoto.photographer
        }));

        return images;
    }catch(error){
        console.log(error);
        return [];
    }

}
