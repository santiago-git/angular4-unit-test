export class Movie {
    price: number;
    name: string;
    description: string;
    cover: string;

    constructor(movie: Movie) {
        this.price = movie.price;
        this.name = movie.name;
        this.description = movie.description;
        this.cover = movie.cover;
    }
}
