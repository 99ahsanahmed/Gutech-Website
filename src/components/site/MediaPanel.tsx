import Image from 'next/image';

type MediaPanelProps = {
  label: string;
  src?: string;
  alt?: string;
  tall?: boolean;
};

export default function MediaPanel({
  label,
  src,
  alt,
  tall = false,
}: MediaPanelProps) {
  return (
    <div
      className={`media-panel${tall ? ' media-panel--tall' : ''}${
        src ? '' : ' media-panel--placeholder'
      }`}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={alt ?? label}
            fill
            className="media-panel__image"
            sizes="(max-width: 960px) 100vw, 40vw"
            priority={tall}
          />
          <div className="media-panel__overlay" />
        </>
      ) : (
        <div className="media-panel__placeholder">
          <span className="pill">Image placeholder</span>
          <p>{label}</p>
        </div>
      )}

      <div className="media-panel__label">{label}</div>
    </div>
  );
}
