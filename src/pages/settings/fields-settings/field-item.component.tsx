import { useTranslation } from 'react-i18next';
import { Text, useDisclosure } from '@chakra-ui/react';
import { TableRow } from '../../../elements/table';
import { ManageFieldModal } from '../../../modals';

type TFieldItem = {
  name: string;
  type: string;
};

function FieldItem({ name, type }: TFieldItem) {
  const { onOpen } = useDisclosure();
  const { t } = useTranslation('components');

  const getModals = (isOpen: boolean, onClose: () => void) =>
    isOpen ? (
      <ManageFieldModal
        isOpen={isOpen}
        onClose={onClose}
        fieldName={name}
        type={type}
      />
    ) : undefined;

  return (
    <TableRow getModals={getModals} onClick={onOpen}>
      <Text>{t(`Modal.ManageField.Type.${type}`)}</Text>
      <Text>{name}</Text>
    </TableRow>
  );
}

export default FieldItem;
