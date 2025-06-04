// In TypeScript, both interface and type let us describe the shape of data — especially objects.
// They help the computer (and other developers) understand what a thing looks like.

// !!They look almost the same — and they work the same in most cases!

// Interface
interface Movie {
  title: string;
  year: number;
  genres: string[];
  publisher?: string;
}

interface MovieWithRating extends Movie {
  rating: number;
}

// Type alias
type MovieType = {
  title: string;
  year: number;
  genres: string[];
};

// Use interface when you're modeling things like a shape or an entity (like a Movie or User).
// Use type when you need more advanced flexibility (like combining types or making unions).

// Example of union types
type ID = string | number;

let id: ID = "123";
