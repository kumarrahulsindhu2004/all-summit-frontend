// import { useRef, useState } from "react";
// import html2canvas from "html2canvas";
// import "./PhotoEditorModal.css";

// const PhotoEditorModal = ({ imageUrl, onClose }) => {
//   const editorRef = useRef(null);

//   const [thought1, setThought1] = useState("Wonderful Experience");
//   const [thought2, setThought2] = useState("Great Speakers!");
//   const [tag, setTag] = useState("#ForAllSummit2026");
//   const [loading, setLoading] = useState(false);

//  const handleDownload = async () => {
//   if (!editorRef.current) return;

//   setLoading(true);

//   // wait a bit to ensure image + layout is fully rendered
//   setTimeout(async () => {
//     const canvas = await html2canvas(editorRef.current, {
//       useCORS: true,
//       allowTaint: true,
//       backgroundColor: null, // transparent background
//       scale: 2,
//       removeContainer: true
//     });

//     const link = document.createElement("a");
//     link.download = "event-photo.png";
//     link.href = canvas.toDataURL("image/png");
//     link.click();

//     setLoading(false);
//   }, 300);
// };

//   return (
//     <div className="editor-overlay">
//       <div className="editor-header">
//         <span>EDITOR MODE</span>
//         <button onClick={onClose}>Exit Gallery</button>
//       </div>

//       <div className="editor-body">
//         {/* LEFT */}
//         <div className="editor-preview" ref={editorRef}>
//           <img
//             src={imageUrl}
//             alt="Event"
//             crossOrigin="anonymous"
//           />

//           <div className="bubble top">{thought1}</div>
//           <div className="bubble middle">{thought2}</div>
//           <div className="bubble bottom">{tag}</div>
//         </div>

//         {/* RIGHT */}

//         <div className="editor-controls">
//           <h2 className="Edit">Make it yours</h2>

//           <input value={thought1} onChange={(e) => setThought1(e.target.value)} />
//           <input value={thought2} onChange={(e) => setThought2(e.target.value)} />
//           <input value={tag} onChange={(e) => setTag(e.target.value)} />

//           <button className="save-btn" onClick={handleDownload}>
//             {loading ? "Preparing Image..." : "Save to Phone"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhotoEditorModal;








"use client"

import { useRef, useState } from "react"
import html2canvas from "html2canvas"
import "./PhotoEditorModal.css"

const PhotoEditorModal = ({ imageUrl, onClose }) => {
  const editorRef = useRef(null)

  const [thought1, setThought1] = useState("Wonderful Experience")
  const [thought2, setThought2] = useState("Great Speakers!")
  const [tag, setTag] = useState("#ForAllSummit2026")
  const [loading, setLoading] = useState(false)

  const generateImageBlob = async () => {
    const canvas = await html2canvas(editorRef.current, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      scale: 2,
    })

    return new Promise((resolve) => canvas.toBlob(resolve, "image/png"))
  }

  const handleDownload = async () => {
    if (!editorRef.current) return
    setLoading(true)

    const blob = await generateImageBlob()
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = "event-photo.png"
    link.click()

    URL.revokeObjectURL(url)
    setLoading(false)
  }

  const handleShare = async () => {
    if (!navigator.share) {
      alert("Sharing is supported on mobile devices only. Please download instead.")
      return
    }

    setLoading(true)

    const blob = await generateImageBlob()
    const file = new File([blob], "event-photo.png", { type: "image/png" })

    try {
      await navigator.share({
        title: "My Event Moment",
        text: "I attended #ForAllSummit2026",
        files: [file],
      })
    } catch (err) {
      console.log("Share cancelled")
    }

    setLoading(false)
  }

  return (
    <div className="editor-overlay">
      <div className="editor-header">
        <span>EDITOR MODE</span>
        <button onClick={onClose}>Exit Gallery</button>
      </div>

      <div className="editor-body">
        <div className="editor-preview" ref={editorRef}>
          <div className="image-wrap">
            <img src={imageUrl || "/placeholder.svg"} alt="Event" crossOrigin="anonymous" />
          </div>

          <div className="bubble top cloud-svg">
            <svg viewBox="0 0 200 70" preserveAspectRatio="none">
              <path d="M40 50h110a30 30 0 0 0 0-60 45 45 0 0 0-86-10A35 35 0 0 0 40 50z" fill="white" />
            </svg>
            <span>{thought1}</span>
          </div>

          <div className="bubble middle">{thought2}</div>

          <div className="bubble bottom heart-svg">
            <svg viewBox="0 0 100 90">
              <path
                d="M50 80
                   L10 40
                   A20 20 0 0 1 50 20
                   A20 20 0 0 1 90 40
                   Z"
                fill="#ff4d6d"
              />
            </svg>
            <span>{tag}</span>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="editor-controls">
          <h2>Make it yours</h2>

          <input value={thought1} onChange={(e) => setThought1(e.target.value)} />
          <input value={thought2} onChange={(e) => setThought2(e.target.value)} />
          <input value={tag} onChange={(e) => setTag(e.target.value)} />

          <button className="save-btn" onClick={handleDownload}>
            {loading ? "Preparing Image..." : "Save to Phone"}
          </button>

          <button className="share-btn" onClick={handleShare}>
            Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default PhotoEditorModal
