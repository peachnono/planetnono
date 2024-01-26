import React, { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

interface ImageGalleryProps {
  images?: string[]; // Make the images prop optional
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images = [] }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div className="image-gallery-container">
      {images && images.map((imageName, index) => (
        <div key={index} className="image-container" onClick={() => openModal(imageName)}>
          <Image
            src={`/images/${imageName}`}
            alt={`Image ${index + 1}`}
            layout="fixed"
            width={200}
            height={100}
            objectFit="cover"
            loading="lazy"
          />
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        shouldCloseOnOverlayClick={true}
        style={{
          content: {
            width: '50%',
            height: '50%',
            margin: 'auto',
          },
        }}
      >
        {selectedImage && (
          <div>
            <Image
              src={`/images/${selectedImage}`}
              alt="Selected Image"
              layout="responsive"
              width={800}
              height={800}
              objectFit="contain"
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageGallery;
