export interface IPost {
  id: string;
  title?: string;
  text: string;
  date: string;
  media_count: number;
}

export interface IPostsResponse {
  posts: IPost[];
  total: number;
  page: number;
  per_page: number;
}
