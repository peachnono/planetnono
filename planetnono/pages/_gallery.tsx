import React, { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
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
      {images.map((imageName, index) => (
        <div key={index} className="image-container" onClick={() => openModal(imageName)}>
          <Image
            src={`/images/${imageName}`}
            alt={`Image ${index + 1}`}
            layout="fixed"
            width={200} // Set a fixed width for the images
            height={100} // Set a fixed height for the images
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
              width={800} // Set a suitable width for the modal image
              height={800} // Set a suitable height for the modal image
              objectFit="contain"
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageGallery;
