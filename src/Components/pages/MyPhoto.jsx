import { useEffect } from "react";
import "./MyPhoto.css";

const MyPhoto = () => {
  useEffect(() => {
    // Always start from top when page opens
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <section className="my-photo">
      <h1>Download Your Photo</h1>

      <p>
        Enter the unique code from your badge or printout to access your
        personalized event gallery.
      </p>

      <input
        className="photo-input"
        placeholder="IMG001"
      />

      <button className="photo-btn">
        Access Gallery
      </button>
    </section>
  );
};

export default MyPhoto;
