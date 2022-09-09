import "./footer.css";
const Footer = () => {
  return (
    <div class="social-links">
      <div class="row">
        <div class="small-6 medium-3 columns text-center mobile-stack">
          <a href="https://www.linkedin.com/in/svitaverma" target="_blank">
            <i class="bx bxl-linkedin" aria-hidden="true"></i>
          </a>
        </div>
        <div class="small-6 medium-3 columns text-center mobile-stack">
          <a href="https://github.com/vermasavita" target="_blank">
            <i class="bx bxl-github" aria-hidden="true"></i>
          </a>
        </div>
        <div class="small-6 medium-3 columns text-center mobile-stack">
          <a href="https://twitter.com/say_saver" target="_blank">
            <i class="bx bxl-twitter" aria-hidden="true"></i>
          </a>
        </div>
        <div class="small-6 medium-3 columns text-center mobile-stack">
          <a href="https://hashnode.com/@savitaverma" target="_blank">
            <i class="bx bxl-blogger" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export { Footer };
