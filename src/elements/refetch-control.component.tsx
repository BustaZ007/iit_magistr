/* eslint-disable react/jsx-props-no-spreading */
import { RefetchQueriesInclude } from '@apollo/client';
import { HStack, Switch } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useChangePolling } from '../hooks';

type TRefetchControl = {
  isPolling: boolean;
  queries: RefetchQueriesInclude;
  entity: string;
  [x: string]: any;
};

function RefetchControl({
  isPolling,
  queries,
  entity,
  ...rest
}: TRefetchControl) {
  const { t } = useTranslation('components');
  const { handleSwitchChange } = useChangePolling(entity, queries);

  return (
    <HStack spacing={4} {...rest}>
      <Switch
        w="fit-content"
        onChange={handleSwitchChange}
        isChecked={isPolling}
        cursor="pointer"
        display="flex"
        flexDirection="row"
        alignItems="center"
        fontSize="sm"
        py={1.5}
      >
        {t('PollingSwitch.Title')}
      </Switch>
    </HStack>
  );
}

export default RefetchControl;
