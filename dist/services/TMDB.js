"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const moviedb_promise_1 = require("moviedb-promise");
const tmdb = new moviedb_promise_1.MovieDb((_a = process.env.TMDB_API_KEY) !== null && _a !== void 0 ? _a : '');
const genreIdToGenre = (genredIds) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Promise.all(genredIds.map((id) => tmdb.genreMovieList({ id, language: 'pt' })));
});
const queryMovie = (query) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const queryResult = yield tmdb.searchMovie({ query });
        return (_b = queryResult.results) === null || _b === void 0 ? void 0 : _b.map(({ title, release_date, popularity, overview, genre_ids }) => {
            return { title, release_date, popularity, overview, genre_ids };
        });
    }
    catch (e) {
        console.error('Error: ', e);
        return [];
    }
});
console.log(queryMovie('Rio'));
exports.default = {
    queryMovie,
};
