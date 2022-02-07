import { MovieDb } from 'moviedb-promise';
import dotenv from 'dotenv';
import { Genres } from '../constants/Genres';
import { GenresResponse } from 'moviedb-promise/dist/request-types';

dotenv.config();

const tmdb = new MovieDb(process.env.TMDB_API_KEY ?? '');

const genreIdToGenre = (genreId: number) => {
    return genreId in Genres ? Genres[genreId] : '';
};

const queryMovie = async (query: string) => {
    try {
        const queryResult = await tmdb.searchMovie({ query, language: 'pt' });
        return (
            queryResult.results?.map(
                ({
                    title,
                    release_date,
                    popularity,
                    overview,
                    genre_ids,
                    vote_average,
                }) => {
                    const genres = genre_ids?.map((genre_id) =>
                        genreIdToGenre(genre_id)
                    );
                    return {
                        title,
                        release_date,
                        popularity,
                        overview,
                        genres,
                        vote_average,
                    };
                }
            ) ?? []
        );
    } catch (e) {
        console.error('Error: ', e);
        return [];
    }
};

queryMovie('toy story').then((value) => console.log(value));

export default {
    queryMovie,
};
