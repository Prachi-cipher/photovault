function Hero() {
  return (
    <section className="hero">
      <h1>Capture Every Moment</h1>
      <p>
        A collection of beautiful photographs by a professional photographer.
      </p>
      <button
  onClick={() =>
    document
      .getElementById("gallery")
      .scrollIntoView({ behavior: "smooth" })
  }
>
  Explore Gallery
</button>
    </section>
  );
}

export default Hero;