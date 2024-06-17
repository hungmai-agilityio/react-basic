export interface IBook {
  id: string;
  title: string;
  image: string;
  text: string;
  author: string;
  subjects: string[];
  rating: number;
  have_read: number;
  reading: number;
  created_at: Date;
}
