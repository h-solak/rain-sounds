const Footer = () => {
  return (
    <footer className="footer d-flex justify-content-center flex-column justify-content-center align-items-center">
      <div className="mt-1">
        <span className="fs-7 black">Rain sounds from </span>
        <a
          href="https://www.zapsplat.com"
          target={"_blank"}
          rel="noreferrer"
          className="fs-7"
        >
          zapsplat.com
        </a>
      </div>
      <div>
        <span className="fs-7 black">Background video by ArtHouse Studio </span>
        <a
          href="https://www.pexels.com/video/water-sliding-on-the-glass-4560347/"
          target={"_blank"}
          rel="noreferrer"
          className="fs-7"
        >
          pexels.com
        </a>
      </div>
      <a
        href="https://github.com/h-solak"
        target={"_blank"}
        rel="noreferrer"
        className="mt-5 fs-6"
      >
        Visit my github
      </a>
    </footer>
  );
};

export default Footer;
