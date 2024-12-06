export interface Reviews {
  rating: number;
  text: string;
  date: Date;
  reviewer: string;
  profilePicture: string;
  like: number;
  dislike: number;
  isLike: boolean;
}

export interface ReviewLists {
  category: string;
  reviews: Reviews[];
}
