import { Car } from './api/cars';
import CarCard from "../src/components/CarCard";
import Carousel from '../src/components/Carousel';

export default function Index({ cars }: { cars: Car[] }) {
  const renderCarCards = cars.map((car: Car) => {
    const { id, bodyType, modelName, modelType, imageUrl } = car;
    return(
      <CarCard
        key={id}
        id={id}
        modelName={modelName}
        bodyType={bodyType}
        modelType={modelType}
        imageUrl={imageUrl}
      />
    )
  });

  return(
    <main>
      <div className='container'>
        <Carousel
          childrenLength={cars.length}
          displayedItems={1}
        >
          { renderCarCards }
        </Carousel>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/cars');
  const cars = await res.json();

  return {
    props: {
      cars: cars.data
    }
  }
}
