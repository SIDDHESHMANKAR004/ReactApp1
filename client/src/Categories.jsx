import "./Categories.css";

const categories = [
  { id: 1, title: "Sneakers", image: "/shoes6.jpg" },
  { id: 2, title: "Boots", image: "/shoes2.jpg" },
  { id: 3, title: "Formal", image: "/shoes3.jpg" },
  { id: 6, title: "Sports", image: "/aboutimg.png" },
  ];

export default function Categories({ onSelectCategory }) {
  return (
    <section className="categories-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">All Categories</h1>
          <p className="page-subtitle">
            Explore our curated collection of footwear for every occasion
          </p>
        </header>

        <div className="categories-grid">
          {categories.map((item, index) => (
            <article
              key={item.id}
              className="category-card"
              style={{ "--delay": `${index * 60}ms` }}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title} products`}
              onClick={() => onSelectCategory(item.title)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onSelectCategory(item.title);
                }
              }}
            >
              <div className="category-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>

              <div className="category-info">
                <h3>{item.title}</h3>
                <span className="arrow">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}