export interface MovieApi {
    adult: boolean,
    backdrop_path: string, 
    genreIds: Array<number>,
    id: number,
    original_language: string, 
    original_title: string,
    overview: string, 
    popularity: number,
    poster_path: string,
    release_date: string, 
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number

}

export interface MovieApiResult {
    page: number,
    results : Array<MovieApi>,
    total_pages : number,
    total_results : number
    
}