import React from "react";

function App() {
  const result = 23434 * 0.345;
  return (
    <section>
      <h1>The Example App</h1>
      <NewsArticle />
      <p>
        Renders the value of a variable: <span>{result}</span>
      </p>
      <button
        data-testid="load-more"
        onClick={() => {
          console.log("The button was clicked");
        }}
      >
        Load More
      </button>
    </section>
  );
}

function MyApp() {
  return (
    <div>
      <article>My First React App</article>
      <NewsArticle />
    </div>
  );
}

function NewsArticle() {
  return (
    <article>
      <h1>Article</h1>
    </article>
  );
}

export { App, MyApp };
