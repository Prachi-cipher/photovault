import images from "../data/images";
import Imagecard from "./Imagecard";

function Gallery({ searchTerm,selectedCategory,setSelectedImage})

{

  const filteredImages = images.filter((img) => {

  const matchesSearch =
    img.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||

    img.category
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    img.category === selectedCategory;

  return (
    matchesSearch &&
    matchesCategory
  );
});

  return (
    <div id="gallery" className="gallery">
      {filteredImages.map((img) => (
        <Imagecard
          key={img.id}
          image={img}
          setSelectedImage={setSelectedImage}
        />
      ))}
    </div>
  );
}

export default Gallery;