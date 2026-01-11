import { ImageList } from "./images/components/ImageList";

import { SearchBar } from "./shared/components/SearchBar";
import { CustomHeader } from "./shared/components/CustomHeader";
//import { PreviousSearches } from './images/components/PreviousSearches';
import { getImagesByQuery } from "./images/actions/get-images-by-query-action";
import { useState } from "react";
import { type Image } from "./images/interfaces/image.interface";

export const PexelsApp = () => {
  const [images, setImages] = useState<Image[]>([]);

  const handleSearch = async (query: string) => {
    console.log(`Buscando: ${query}`);

    const newImages = await getImagesByQuery(query);

    setImages(newImages);
  };
  return (
    <>
      <CustomHeader
        title="Buscador de imagenes"
        description="Busca tu imagen perfecta"
      />
      <SearchBar onNewSearch={handleSearch} />
      <ImageList images={images} />
    </>
  );
};
