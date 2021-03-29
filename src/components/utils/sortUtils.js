export const byDate = (a, b) => new Date(a.release_date) - new Date(b.release_date);
export const byRating = (a, b) => b.vote_average - a.vote_average;
export const byRuntime = (a, b) => b.runtime - a.runtime;
export const byGenre = (a, b) => b.genres[0] - a.genres[0];