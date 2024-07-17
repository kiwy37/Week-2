export interface Movie {
  id: number;
  title: string;
  image: string;
  description: string;
  rating: number;
  myRating: number | null;
  averageRating: number;
  creators: string[];
  stars: string[];
  releaseDate: Date | null;
  genre: string[];
  trailer: string;
}
