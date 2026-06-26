function Lightbox({
  selectedImage,
  setSelectedImage,
}) {
  if (!selectedImage) return null;

  return (
    <div
      className="overlay"
      onClick={() =>
        setSelectedImage(null)
      }
    >
      <img
        src={selectedImage.image}
        alt={selectedImage.title}
        className="lightbox-image"
      />
    </div>
  );
}

export default Lightbox;