export interface Movie {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}

/*
{
      "popularity": 490.61,
      "vote_count": 257,
      "video": false,
      "poster_path": "/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
      "id": 474350,
      "adult": false,
      "backdrop_path": "/p15fLYp0X04mS8cbHVj7mZ6PBBE.jpg",
      "original_language": "en",
      "original_title": "It Chapter Two",
      "genre_ids": [
        35,
        27
      ],
      "title": "It Chapter Two",
      "vote_average": 7.2,
      "overview": "27 years after...",
      "release_date": "2019-09-06"
    },
*/
