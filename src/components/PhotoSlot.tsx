interface PhotoSlotProps {
  src?: string
  caption?: string
  rotation: number
}

/**
 * Quadro estilo polaroide. Sem `src`, mostra um placeholder discreto
 * (moldura tracejada + legenda) para o lugar já ficar reservado no layout.
 * Quando você tiver a foto, basta passar `photoSrc` no data.ts.
 */
export default function PhotoSlot({ src, caption, rotation }: PhotoSlotProps) {
  return (
    <figure className="photo-slot" style={{ transform: `rotate(${rotation}deg)` }}>
      <div className={`photo-slot__frame ${src ? '' : 'photo-slot__frame--empty'}`}>
        {src ? (
          <img src={src} alt={caption ?? ''} loading="lazy" />
        ) : (
          <span className="photo-slot__hint">foto pendiente</span>
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
