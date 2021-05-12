export default function SplashPageSection({ image, desc, backwards }) {
  console.log(image);

  return (
    <div
      className={`splash__secondary-content ${
        backwards ? 'splash__secondary-content-backwards' : ''
      }`}
    >
      {image}
      <h2 className='secondary-title splash__secondary-text'>{desc}</h2>
    </div>
  );
}
