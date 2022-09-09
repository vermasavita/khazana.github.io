import './exp.css'
const ExperiencesCard = ({ id, img, name, org, learning }) => {
  return (
    <div className="certificate-card-exp" key={id}>
      <div className="certificate-image-div-exp">
        <img src={img} alt="Card Thumbnail" className="card-image"></img>
      </div>
      <div className="certificate-detail-div-exp">
        <h5 className="card-title-exp">{name}</h5>
        <p className="card-subtitle-expp">{org}</p>
        <p className="card-subtitle-exp">{learning}</p>
      </div>
      <div className="certificate-card-footer-exp"></div>
    </div>
  );
};

export { ExperiencesCard };
