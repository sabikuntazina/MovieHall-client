export interface Movie {
  _id?: string;             // MongoDB Atlas auto-generated ID
  title: string;
  director: string;         // পরিচালক
  releaseDate: string;      // রিলিজের তারিখ
  showTime: string;         // শো টাইম
  genre: string;
  duration: string;
  poster: string;
  description: string;
}