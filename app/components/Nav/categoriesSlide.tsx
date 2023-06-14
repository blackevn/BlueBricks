import { useLinks } from "@/app/hooks";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FilterItem from "./filterItem";
import React from "react";

type CategorySlideProps = {
    category?: string
}

const CategoriesSlide: React.FC<CategorySlideProps> = ({category}) => {

    const { categories } = useLinks()

  return <Carousel
  additionalTransfrom={0}
  arrows
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
{ categories.map(item => (<FilterItem
                                              key={item.id}
                                              id={item.id}
                                              icon={item.icon}
                                              name={item.name}
                                              selected={category === item.name}
                                              />))}
</Carousel>
};

export default CategoriesSlide;
