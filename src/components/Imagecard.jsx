function ImageCard({
  image,
  setSelectedImage,
}) {
  return (
    <div
      className="card"
      onClick={() =>
        setSelectedImage(image)
      }
    >
      <img
        src={image.image}
        alt={image.title}
      />

      <h3>{image.title}</h3>
      <p>{image.category}</p>
    </div>
  );
}

export default ImageCard;