import { IMAGE_URL } from '@/api/catApi'

interface CardProps {
  imageId: string
  alt: string
  caption: string
}

export const Card = ({ imageId, alt, caption }: CardProps) => {
  const generateImageUrl = `${IMAGE_URL}/${imageId}.jpg`
  return (
    <figure className="p-4 bg-slate-700 rounded-md">
      <img
        className="rounded-md object-cover"
        src={generateImageUrl}
        alt={alt}
      />
      <figcaption className="text-lg mt-4">{caption}</figcaption>
    </figure>
  )
}
