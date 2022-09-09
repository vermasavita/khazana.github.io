const ProjectCard = ({
  id,
  img,
  title,
  script,
  stack,
  fetures,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="certificate-card" key={id}>
      <div className="certificate-image-div">
        <img src={img} alt="Card Thumbnail" className="card-image"></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className="card-title">{title}</h5>
        <p className="card-subtitle">
          <strong>Tech Stack:</strong> {stack}
        </p>
        <p className="card-subtitle">
          <strong>Features:</strong> {fetures}
        </p>
        <div className="flex">
          {!script && (
            <a href={githubLink} target="_blank">
              <i class="bx bxl-github"></i>
            </a>
          )}

          <a href={liveLink} target="_blank">
            <i class="bx bx-link-external"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
