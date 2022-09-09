const BlogCard = ({ id, title, content, link }) => {
  return (
    <div>
      <div className="blog-container" key={id}>
        <a className="blog-card" href={link} target='_blank'>
          <h3 className="blog-title">{title}</h3>
          <p className="small">{content}</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export { BlogCard };
