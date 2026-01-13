import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import "./PhotoEditorModal.css";

const PhotoEditorModal = ({ imageUrl, onClose }) => {
  const editorRef = useRef(null);

  const [thought1, setThought1] = useState("Wonderful Experience");
  const [thought2, setThought2] = useState("Great Speakers!");
  const [tag, setTag] = useState("#ForAllSummit2026");
  const [loading, setLoading] = useState(false);

 const handleDownload = async () => {
  if (!editorRef.current) return;

  setLoading(true);

  // wait a bit to ensure image + layout is fully rendered
  setTimeout(async () => {
    const canvas = await html2canvas(editorRef.current, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: null, // transparent background
      scale: 2,
      removeContainer: true
    });

    const link = document.createElement("a");
    link.download = "event-photo.png";
    link.href = canvas.toDataURL("image/png");
    link.click();

    setLoading(false);
  }, 300);
};


  return (
    <div className="editor-overlay">
      <div className="editor-header">
        <span>EDITOR MODE</span>
        <button onClick={onClose}>Exit Gallery</button>
      </div>

      <div className="editor-body">
        {/* LEFT */}
        <div className="editor-preview" ref={editorRef}>
          <img
            src={imageUrl}
            alt="Event"
            crossOrigin="anonymous"
          />

          <div className="bubble top">{thought1}</div>
          <div className="bubble middle">{thought2}</div>
          <div className="bubble bottom">{tag}</div>
        </div>

        {/* RIGHT */}
        
        <div className="editor-controls">
          <h2 className="Edit">Make it yours</h2>

          <input value={thought1} onChange={(e) => setThought1(e.target.value)} />
          <input value={thought2} onChange={(e) => setThought2(e.target.value)} />
          <input value={tag} onChange={(e) => setTag(e.target.value)} />

          <button className="save-btn" onClick={handleDownload}>
            {loading ? "Preparing Image..." : "Save to Phone"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoEditorModal;
