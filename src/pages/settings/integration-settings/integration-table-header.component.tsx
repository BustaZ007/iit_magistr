// import { Checkbox, Flex, useColorModeValue } from '@chakra-ui/react';
// import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
// import { TIntegrationData } from '../../../domains/sequr-os-integration';
import { TableHeader } from '../../../elements/table';

// type TIntegrationTableHeader = {
//   integrations: TIntegrationData[];
//   setSelectedItems: Dispatch<SetStateAction<string[]>>;
//   selectedItems: string[];
// };

const IntegrationTableHeaderTitles = [
  'Settings.Integration.System',
  'Settings.Integration.Login',
  'Settings.Integration.Url',
  'Settings.Integration.CreationData',
];

// {
//   integrations,
//   selectedItems,
//   setSelectedItems,
// }: TIntegrationTableHeader

// TODO Вернуть чекбокс когда появится API удаления по множеству ids

function IntegrationTableHeader(): JSX.Element {
  // const borderColor = useColorModeValue('gray.100', 'gray.700');

  // const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   if (e.target.checked)
  //     setSelectedItems(() => integrations.map((item) => item.id));
  //   else setSelectedItems(() => []);
  // };

  return (
    <>
      {/* <Flex
        alignItems="center"
        pl="4"
        borderBottom="1px"
        borderColor={borderColor}
      >
        <Checkbox
          onChange={handleOnChange}
          isChecked={
            integrations.length === 0
              ? false
              : selectedItems.length === integrations.length
          }
          isIndeterminate={
            selectedItems.length > 0 &&
            selectedItems.length < (integrations.length ?? 0)
          }
          p={2}
        />
      </Flex> */}
      <TableHeader titles={IntegrationTableHeaderTitles} />
    </>
  );
}

export default IntegrationTableHeader;
