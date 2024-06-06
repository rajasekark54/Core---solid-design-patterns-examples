/* 
What is the Iterator Pattern?
  The Iterator pattern is a behavioral design pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. This pattern allows you to traverse through a collection, regardless of its type.

Why and When to Use the Iterator Pattern
  Traversal: When you need to traverse a collection of objects without exposing its internal structure.
  Uniform Access: To provide a uniform way to iterate over different types of collections.
  Multiple Iterations: When you need to support multiple simultaneous traversals of a collection.
  Simplification: To simplify the collection classes by extracting the traversal logic into separate iterator classes.
  Benefits of the Iterator Pattern
  Decoupling: Decouples the traversal algorithm from the aggregate object.
  Single Responsibility: Simplifies the collection by moving the traversal logic to the iterator.
  Flexibility: Allows for different traversal algorithms to be implemented and used interchangeably.
*/

// Real-Time Application Example: Social Media Feed
// Let's consider an example of a social media feed where we want to iterate over a list of posts.

// Step 1: Define the Iterator Interface
// Iterator interface
interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}

// Step 2: Create the Aggregate Interface
// Aggregate interface
interface IterableCollection<T> {
  createIterator(): Iterator<T>;
}

// Step 3: Create Concrete Iterator and Aggregate Classes
// Post class representing a social media post
class Post {
  constructor(public content: string, public author: string) {}
}

// Concrete iterator for Post objects
class PostIterator implements Iterator<Post> {
  private index: number = 0;

  constructor(private posts: Post[]) {}

  next(): Post | null {
    if (this.hasNext()) {
      return this.posts[this.index++];
    }
    return null;
  }

  hasNext(): boolean {
    return this.index < this.posts.length;
  }
}

// Concrete collection class for Post objects
class PostCollection implements IterableCollection<Post> {
  private posts: Post[] = [];

  addPost(post: Post): void {
    this.posts.push(post);
  }

  createIterator(): Iterator<Post> {
    return new PostIterator(this.posts);
  }
}

// Step 4: Use the Iterator Pattern
// Client code
const postCollection = new PostCollection();

postCollection.addPost(new Post('Post 1 content', 'Author 1'));
postCollection.addPost(new Post('Post 2 content', 'Author 2'));
postCollection.addPost(new Post('Post 3 content', 'Author 3'));

const iterator = postCollection.createIterator();

while (iterator.hasNext()) {
  const post = iterator.next();
  if (post) {
    console.log(`Post: ${post.content}, Author: ${post.author}`);
  }
}

/* 
Explanation
  Iterator Interface (Iterator<T>): Defines the methods next and hasNext for traversing elements.
  Aggregate Interface (IterableCollection<T>): Defines the method createIterator for creating an iterator.
  Concrete Iterator (PostIterator): Implements the Iterator interface for traversing Post objects.
  Concrete Collection (PostCollection): Implements the IterableCollection interface and holds a collection of Post objects.
  Client Code: Uses the PostCollection and its iterator to traverse and print the posts.
*/

export {};
