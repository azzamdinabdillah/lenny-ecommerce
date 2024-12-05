interface Review {
  rating: number;
  text: string;
  date: Date;
  reviewer: string;
  profilePicture: string;
  like: number;
  dislike: number;
}

interface ReviewLists {
  category: string;
  reviews: Review[];
}

export const reviewLists: ReviewLists[] = [
  {
    category: "All Reviews",
    reviews: [
      {
        rating: 5,
        text: "This is amazing product I have.",
        date: new Date("2020-07-02T15:29:00"),
        reviewer: "Darrell Steward",
        profilePicture: "/assets/images/review-1.png",
        like: 128,
        dislike: 0,
      },
      {
        rating: 5,
        text: "This is amazing product I have.",
        date: new Date("2020-07-02T15:29:00"),
        reviewer: "Darlene Robertson",
        profilePicture: "/assets/images/review-2.png",
        like: 128,
        dislike: 0,
      },
      {
        rating: 5,
        text: "This is amazing product I have.",
        date: new Date("2020-07-02T15:29:00"),
        reviewer: "Kathryn Murphy",
        profilePicture: "/assets/images/review-3.png",
        like: 128,
        dislike: 0,
      },
    ],
  },
];
