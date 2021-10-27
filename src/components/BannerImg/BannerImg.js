import "./BannerImg.css";

const BannerImg = ({ img, link }) => {
  return (
    <li className="bannerImg" style={{ background: `url(${img})` }}>
      <a href={link}>
        <div></div>
      </a>
    </li>
  );
};

export default BannerImg;
