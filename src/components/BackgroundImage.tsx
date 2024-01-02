"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
  width: number;
  height: number;
}

const BackgroundImage: React.FC<BackgroundImage> = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [styles, setStyles] = useState({})

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get<UnsplashImage[]>(
          `https://api.unsplash.com/users/gen035/photos`,
          {
            params: {
              client_id: 'bl4vu5C9jNQf2iHhnkdIXn-KpqWYEzRCn4td8CG71bQ',
              per_page: 50
            },
          }
        );

        // Filter only horizontal images (width > height)
        const horizontalImages = response.data.filter(
          (image) => image.width > image.height
        );

        setImages(horizontalImages);        
      } catch (error) {
        console.error('Error fetching images:', error.message);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const current = Math.floor(Math.random() * images.length + 1);
    const url = images && images.length > 0 && images[current] && images[current].urls.regular;

    if(url) {
      setStyles({
        backgroundImage: `url(${url})`
      })
    }
  }, [images]);

  return (
    <>
      <div className="fixed h-full w-full -z-50 bg-cover bg-center" style={styles} />
      <div className="fixed h-full w-full -z-10 bg-black opacity-75" />
    </>
  );
};

export default BackgroundImage;
