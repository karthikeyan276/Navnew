import React from 'react'

import "./Slider.css";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

function Slider() {

  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // Sample items for Carousel
  const items = [
    {src:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/July2022GW/New_FST_Icons/Federal/Shoes/shoes-3000x._CB632760683_.jpg",
    },
    {src:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Flight_PC_Hero_3000x1200_April._CB636945433_.jpg",
    },
    {
        src:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/GWUnrec/PFS/D39822856_WLA_BAU_GW-Unrec-heroes_DesktopTallHero_3000x1200._CB634361564_.jpg",
    },{
        src:"https://images-eu.ssl-images-amazon.com/images/G/31/AUTO_2021/BAU_GW/July_22/corrected/3B_Hero_3000x1200._CB632757139_.jpg",
    }

  ];

  // Items array length
  const itemLength = items.length - 1

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ?
      itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ?
      0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  // Carousel Item Data
  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className='d'>
      
      <Carousel previous={previousButton} next={nextButton}
        activeIndex={activeIndex}>
        <CarouselIndicators items={items}
          activeIndex={activeIndex}
          onClickHandler={(newIndex) => {
            if (animating) return;
            setActiveIndex(newIndex);
          }} />
        {carouselItemData}
      </Carousel>
    </div >
  );
}

export default Slider;
