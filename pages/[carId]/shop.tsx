import { useRouter } from "next/router";
import { Text } from "vcc-ui";

function Shop() {
  const router = useRouter();
  const { carId } = router.query;

  return(
    <Text>
      Shop page for car with carId: {carId}
    </Text>
  );
}

export default Shop;