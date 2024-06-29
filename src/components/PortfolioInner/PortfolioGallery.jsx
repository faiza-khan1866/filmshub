import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import galleryImg from "../../images/portfolio/galleryimg1.png";

const PortfolioGallery = ({ imagesData, ImgBaseUrl }) => {
  const images = [];

  if (imagesData && Array.isArray(imagesData)) {
    imagesData?.forEach(({ featured_img }) => {
      if (featured_img) {
        images.push({
          src: ImgBaseUrl + featured_img,
        });
      }
    });
  }
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <div className="portfolio_gallery_sec py-5">
        <div className="container" data-aos="fade-up">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry columnsCount={3} gutter="0.5rem">
              {images?.map((x, i) => (
                <figure
                  key={i}
                  onClick={() => {
                    setPhotoIndex(i);
                    setIsOpen(true);
                  }}
                >
                  <img src={x?.src ? x?.src : galleryImg} alt="gallery" />
                </figure>
              ))}
            </Masonry>
          </ResponsiveMasonry>
          {/* <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
            margin={10}
            rowHeight={320}
          /> */}
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]?.src}
              nextSrc={images[(photoIndex + 1) % images?.length]?.src}
              prevSrc={
                images[(photoIndex + images?.length - 1) % images?.length]?.src
              }
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex(
                  (photoIndex + images?.length - 1) % images?.length
                )
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images?.length)
              }
            />
          )}
        </div>
      </div>
    </>
  );
};
export default PortfolioGallery;
