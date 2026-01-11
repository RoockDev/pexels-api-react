export interface PexelsResponse {
    page: number;
    per_page: number;
    photos: Photo[];
    total_results: number;
    next_page?: string;
}

export interface Photo {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id : number;
    avg_color: string;
    src: Src; //pexels nos da la imagen en muchos tamaños
    liked: boolean;
    alt: string; //esto se usará como titulo
}

export interface Src {
    original: string;
    large2x: string;
    large: string;
    medium: string; //este para la tarjeta
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
}