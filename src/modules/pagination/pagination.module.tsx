import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { range } from "lodash";
import { CaretLeft, CaretRight } from "phosphor-react";

type TPaginationProps = {
  page: number;
  totalCount: number;
  limit?: number;
  setPage: (num: number) => void;
  maxPaginationButton: 3 | 5 | 7 | 9;
  shouldBeInTwoLines?: boolean;
};

function Pagination({
  page,
  totalCount,
  limit = 30,
  setPage,
  maxPaginationButton,
  shouldBeInTwoLines,
}: TPaginationProps) {
  const totalPagesCount = Math.ceil(totalCount / limit);
  const buttonStep = Math.floor(maxPaginationButton / 2);

  let viewedText = `${page === 1 ? 1 : limit * (page - 1)}-${Math.min(
    limit * page,
    totalCount
  )}`;

  if (totalPagesCount === 1) {
    viewedText = `${totalCount}`;
  }

  const handleOnNextClick = () => {
    setPage(page + 1);
  };

  const handleOnPrevClick = () => {
    setPage(page - 1);
  };

  const handleOnPageButtonClick = (item: number) => () => {
    setPage(item);
  };

  const buttonsArray = () => {
    if (totalPagesCount <= maxPaginationButton)
      return range(2, totalPagesCount);

    if (page <= buttonStep + 1) return range(2, maxPaginationButton + 1);

    if (page >= totalPagesCount - buttonStep)
      return range(page - buttonStep, totalPagesCount);

    return range(page - buttonStep, page + buttonStep + 1);
  };

  const emptyButton = (
    <Button
      mr="-px"
      fontWeight="normal"
      cursor="default"
      _hover={{ bg: "none" }}
      _active={{ bg: "none" }}
      _focus={{ bg: "none" }}
    >
      ...
    </Button>
  );

  return (
    <>
      <Flex justify="space-between" align="center">
        <HStack pt={4} pb={shouldBeInTwoLines ? 0 : 4} px="6" spacing={4}>
          {totalPagesCount > 1 && (
            <ButtonGroup isAttached variant="outline">
              <Button
                isDisabled={page < 2}
                variant="outline"
                fontWeight="normal"
                onClick={handleOnPrevClick}
                leftIcon={<Icon as={CaretLeft} />}
                pl={2}
                mr="-px"
              >
                Back
              </Button>

              <Button
                variant={page === 1 ? "solid" : "outline"}
                mr="-px"
                fontWeight="normal"
                onClick={handleOnPageButtonClick(1)}
              >
                1
              </Button>

              {page - buttonStep > 2 &&
                totalPagesCount !== maxPaginationButton &&
                emptyButton}

              {buttonsArray().map(
                (item: number | undefined) =>
                  !!item && (
                    <Button
                      key={item}
                      variant={page === item ? "solid" : "outline"}
                      mr="-px"
                      fontWeight="normal"
                      onClick={handleOnPageButtonClick(item)}
                    >
                      {item}
                    </Button>
                  )
              )}

              {totalPagesCount - buttonStep - 1 > page &&
                totalPagesCount !== maxPaginationButton &&
                emptyButton}

              <Button
                variant={page === totalPagesCount ? "solid" : "outline"}
                mr="-px"
                fontWeight="normal"
                onClick={handleOnPageButtonClick(totalPagesCount)}
              >
                {totalPagesCount}
              </Button>

              <Button
                isDisabled={page >= totalPagesCount}
                variant="outline"
                fontWeight="normal"
                onClick={handleOnNextClick}
                rightIcon={<Icon as={CaretRight} />}
                pr={2}
              >
                Next
              </Button>
            </ButtonGroup>
          )}
        </HStack>
        {!shouldBeInTwoLines && (
          <Text fontSize="md" color="gray.400" fontWeight="normal" pr={6}>
            components:Pagination.EntitiesViewed.Full
          </Text>
        )}
      </Flex>
      {shouldBeInTwoLines && (
        <Text fontSize="md" color="gray.400" fontWeight="normal" pl={6} py={4}>
          components:Pagination.EntitiesViewed.Full {viewedText}
          {totalCount}
        </Text>
      )}
    </>
  );
}

export default Pagination;
