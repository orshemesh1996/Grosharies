export const UserDummy = {
  firstName: "Dummy",
  lastName: "User",
  emailAddress: "email@email.com",
  password: "",
  phone: "050000000",
  accountType: "user",
  rank: 0,
  posts: [],
  profileImage: "",
  source: "grosharies",
  collectedHistory: [],
  notifications: [],
};

export const PostDummy = {
  _id: 0,
  headline: "Post Headline",
  userId: 1,
  address: "5 King George, Tel Aviv",
  addressCoordinates: { lat: 40, lng: 40 },
  publishingDate: Date.now,
  pickUpDates: [{ from: Date.now, until: Date.now }],
  status: "still there",
  tags: [],
  content: [],
  description: "Post Description",
  images: [],
  videos: [],
  observers: [],
  repliers: [],
};
