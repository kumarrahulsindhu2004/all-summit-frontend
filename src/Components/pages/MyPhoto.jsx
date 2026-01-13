import { useEffect, useState } from "react";
import PhotoEditorModal from "./PhotoEditorModal";
import "./MyPhoto.css";

const MyPhoto = () => {
  const [photoId, setPhotoId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showEditor, setShowEditor] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleAccess = () => {
    if (!photoId.trim()) {
      setError("Please enter a photo ID");
      return;
    }

    setError("");
    setImageUrl(`http://localhost:5000/image/${photoId}`);
    setShowEditor(true);
  };

  return (
    <section className="my-photo">
      <h1>Download Your Photo</h1>

      <input
        className="photo-input"
        placeholder="IMG001"
        value={photoId}
        onChange={(e) => setPhotoId(e.target.value)}
      />

      <button className="photo-btn" onClick={handleAccess}>
        Access Gallery
      </button>
<h2>We have this images file name for testing, enter one at a time ex - IMG001,IMG002,IMG003,IMG004</h2>
      {error && <p className="photo-error">{error}</p>}

      {showEditor && (
        <PhotoEditorModal
          imageUrl={imageUrl}
          onClose={() => setShowEditor(false)}
        />
      )}
    </section>
  );
};

export default MyPhoto;
