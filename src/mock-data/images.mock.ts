export interface Image {
    id:number;
    title:string;
    url:string;
    //width:number;
    //height:number;
    photographer?: string;
}

export const mockImages: Image[] = [
     {
    id: 1,
    title: "Montaña misteriosa",
    url: 'https://www.pexels.com/es-es/foto/montana-bajo-el-cielo-nublado-1666012.jpeg'
    //width: 300,
    //height: 300
  },
  {
    id: 2,
    title: 'Montaña bajo',
    url: 'https://www.pexels.com/es-es/foto/lago-y-montana-bajo-cielo-blanco-443446.jpeg'
    //width: 400,
    //height: 250,
  },
  {
    id: 3,
    title: 'Paisaje con agua',
    url: 'https://www.pexels.com/es-es/foto/green-hill-cerca-del-cuerpo-de-agua-462162.jpeg'
    //width: 280,
    //height: 350,
  },
  {
    id: 4,
    title: 'Luna nevada',
    url: 'https://www.pexels.com/es-es/foto/luna-sobre-montana-nevada-2361600.jpeg'
    //width: 300,
    //height: 200,
  },
]