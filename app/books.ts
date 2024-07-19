export enum Genre {
  FICTION = "Fiction",
  ROMANCE = "Romance",
  LITERATURE = "Literature",
  FANTASY = "Fantasy",
}
export interface Book {
  title: string;
  author: string;
  genre: Genre[];
  description: string;
  cover_image: string;
}
export const books: Book[] = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: [Genre.FICTION],
    description:
      "A powerful story of racial injustice and moral growth in the Deep South.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51OJjhsFcjL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: [Genre.FICTION],
    description:
      "Orwell's chilling vision of a totalitarian future where independent thought is suppressed.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51ROuZJzHVL._SX307_BO1,204,203,200_.jpg",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: [Genre.FICTION],
    description:
      "A tale of wealth, love, and the American Dream set during the Roaring Twenties.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51r%2B0HQmGrL._SX306_BO1,204,203,200_.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: [Genre.FICTION, Genre.ROMANCE],
    description:
      "Austen's witty and timeless novel about love, reputation, and social expectations.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51D5qS8qA3L._SX324_BO1,204,203,200_.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: [Genre.FICTION],
    description:
      "Holden Caulfield's journey through adolescence, rebellion, and identity.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/41HCJGZ5h8L._SX327_BO1,204,203,200_.jpg",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: [Genre.FANTASY],
    description:
      "Epic fantasy saga of a quest to destroy a powerful ring and save Middle-earth.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51W92k6k1XL._SX331_BO1,204,203,200_.jpg",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: [Genre.FANTASY],
    description:
      "The magical journey of a young wizard, Harry Potter, and his friends at Hogwarts.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51H2IJ6m4BL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: [Genre.FICTION],
    description:
      "A futuristic society where humans are engineered and conditioned for a controlled existence.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51f1yOj8SfL._SX312_BO1,204,203,200_.jpg",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: [Genre.ROMANCE, Genre.LITERATURE],
    description:
      "Captain Ahab's obsessive quest for vengeance against the white whale, Moby Dick.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51m7Ax1YQcL._SX331_BO1,204,203,200_.jpg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: [Genre.FANTASY],
    description:
      "Bilbo Baggins' unexpected journey to help a group of dwarves reclaim their homeland.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51OL8QCSWuL._SX307_BO1,204,203,200_.jpg",
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: [Genre.FICTION],
    description:
      "The passionate and independent Jane Eyre's journey of self-discovery and love.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51fh-LsboNL._SX326_BO1,204,203,200_.jpg",
  },
  {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    genre: [Genre.FICTION],
    description:
      "A chilling exploration of a dystopian society where women are oppressed.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51RWeUe9K-L._SX309_BO1,204,203,200_.jpg",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    genre: [Genre.FICTION],
    description:
      "A father and son's journey through a bleak, post-apocalyptic landscape.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/41e5J6usqQL._SX326_BO1,204,203,200_.jpg",
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    genre: [Genre.LITERATURE],
    description:
      "Tragic tale of a doomed love affair set against the backdrop of Russian society.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51wDb6xFH0L._SX326_BO1,204,203,200_.jpg",
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    genre: [Genre.ROMANCE],
    description:
      "Edmond Dantès' quest for revenge and redemption after being wrongfully imprisoned.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51MjIrc+PzL._SX326_BO1,204,203,200_.jpg",
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: [Genre.FICTION],
    description:
      "A Faustian tale of a man who remains eternally youthful while his portrait ages.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51Tt9Mf95BL._SX311_BO1,204,203,200_.jpg",
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: [Genre.FICTION],
    description:
      "The tale of Dr. Frankenstein and the creature he brings to life, exploring themes of creation and humanity.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51BTSJb1gAL._SX316_BO1,204,203,200_.jpg",
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    genre: [Genre.FICTION, Genre.LITERATURE],
    description:
      "A tale of passion, revenge, and the destructive power of love in the Yorkshire moors.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51p0nCuFruL._SX321_BO1,204,203,200_.jpg",
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    genre: [Genre.FICTION, Genre.ROMANCE],
    description:
      "The misadventures of an idealistic knight and his loyal squire, Sancho Panza.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51cmMDK4FwL._SX346_BO1,204,203,200_.jpg",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: [Genre.FICTION],
    description:
      "The story of a young man's moral dilemmas after committing a crime in St. Petersburg.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/41vL0XjzGRL._SX319_BO1,204,203,200_.jpg",
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    genre: [Genre.FICTION],
    description:
      "A complex tale of family dynamics, faith, and morality in 19th-century Russia.",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51P2-7j8XCL._SX331_BO1",
  },
];
