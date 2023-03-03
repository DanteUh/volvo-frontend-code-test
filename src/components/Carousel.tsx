import React, { useEffect, useState } from 'react';
import { isBrowser, isMobile } from 'react-device-detect';
import { Flex, IconButton, View } from 'vcc-ui';

interface Carousel {
  children: React.ReactNode
  childrenLength: number
  displayedItems: number
}

const Carousel = ({ children, childrenLength, displayedItems }: Carousel) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [touchPosition, setTouchPosition] = useState<any>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  }

  const next = () => {
    if (currentIndex < (length - displayedItems)) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  useEffect(() => {
    setLength(childrenLength)
  }, [childrenLength]);

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchDown = touchPosition;

    if(touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  }

  const renderCarouselCells = (length: number) => {
    const arr = [];
    for (let index = 0; index < length; index++) {
      const element = <li className={`carousel-cell ${index === currentIndex ? 'cell-active' : ''}`}></li>
      arr.push(element);
    }
    return arr;
  }

  return(
    <>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div
            className="carousel-content-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <ul
              className={`carousel-content show-${displayedItems}`}
              style={{ transform: `translateX(-${currentIndex * (282)}px)` }}
            >
              { children }
            </ul>
          </div>
        </div>
      </div>
      {isMobile &&
        <Flex
          extend={{
            justifyContent: 'center',
            flexDirection: 'row'
          }}
        >
          <ul className='carousel-indicators'>
            { renderCarouselCells(childrenLength) }
          </ul>
        </Flex>
      }
      {isBrowser &&
        <View
          spacing={1}
          extend={{
            justifyContent: 'end',
            flexDirection: 'row'
          }}
        >
          <IconButton
            aria-label='previous-car-item'
            iconName='navigation-chevronback'
            variant='outline'
            onClick={prev}
          />
          <IconButton
            aria-label='next-car-item'
            iconName='navigation-chevronforward'
            variant='outline'
            onClick={next}
          />
        </View>
      }
    </>
  );
}

export default Carousel;