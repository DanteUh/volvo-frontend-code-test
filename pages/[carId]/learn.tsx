import { useRouter } from "next/router";
import { Text } from "vcc-ui";

function Learn() {
  const router = useRouter();
  const { carId } = router.query;

  return(
    <Text>
      Learn page for car with carId: {carId}
    </Text>
  );
}

export default Learn;