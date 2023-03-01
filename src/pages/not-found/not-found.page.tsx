import { Button, Heading, Icon, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FileDotted } from "phosphor-react";
import { FormPageLayout } from "../../layouts";
import { PATHNAMES } from "../../consts";

function NotFoundPage() {
  return (
    <FormPageLayout>
      <VStack spacing={8} textAlign="center">
        <Icon as={FileDotted} w="12" h="12" />
        <Heading fontSize="4xl" fontWeight="normal">
          NotFound.Title
        </Heading>
        <Button
          as={Link}
          to={PATHNAMES.dashboard}
          size="lg"
          colorScheme="blue"
          id="go-home-button-not-found"
        >
          NotFound.Button
        </Button>
      </VStack>
    </FormPageLayout>
  );
}

export default NotFoundPage;
