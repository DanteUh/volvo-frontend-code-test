import Image from "next/image";
import React from "react";
import { Flex, Link, Text, useTheme } from "vcc-ui";

interface CarCard {
  id: string
  bodyType: string
  modelName: string
  modelType: string
  imageUrl: string
}

const CarCard = ({
  id,
  bodyType,
  modelName,
  modelType,
  imageUrl
}: CarCard) => {
  const theme = useTheme();

  return(
    <li className='car-card-item'>
      <Text
        subStyle='emphasis'
        variant='bates'
        extend={{
          color: theme.color.foreground.secondary
        }}
      >
        { bodyType?.toUpperCase() }
      </Text>
      <Flex
        className="m-8"
        extend={{
          flexDirection: 'row'
        }}
      >
        <Text subStyle='emphasis'>
          { modelName } &nbsp;
        </Text>
        <Text
          subStyle='standard'
          extend={{
            color: theme.color.foreground.secondary
          }}
        >
          { modelType }
        </Text>
      </Flex>
      <Image
        src={imageUrl}
        alt={`image of a ${modelName} ${modelType}`}
        width={256}
        height={192}
      />
      <Flex extend={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Link
          href={`/${id}/learn`}
          arrow="right"
        >
          Learn
        </Link>
        <Link
          href={`/${id}/shop`}
          arrow="right"
        >
          Shop
        </Link>
      </Flex>
    </li>
  )
}

export default CarCard;