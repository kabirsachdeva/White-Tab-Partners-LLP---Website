"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function PartnerImage({ src, alt, className }: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={className}
      onError={() =>
        setImgSrc(
          `https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&background=1A1A22&color=B8943F&size=400`
        )
      }
    />
  );
}
