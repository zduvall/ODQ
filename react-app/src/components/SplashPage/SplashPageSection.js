export default function SplashPageSection({ image, alt, desc, backwards }) {
  return (
    <div className={`splash__secondary-content ${backwards ? 'splash__secondary-content-backwards' : ''}`}>
      <img
        className='splash__secondary-image'
        src={image}
        alt={alt}
      />
      <h2 className='tertiary-title splash__secondary-text'>
        {desc}
      </h2>
    </div>
  );
}
