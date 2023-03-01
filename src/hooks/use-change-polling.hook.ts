import { useSearchParams } from 'react-router-dom';
import { client } from '@3divi/shared-components';
import { RefetchQueriesInclude, useReactiveVar } from '@apollo/client';
import moment from 'moment';
import { ChangeEvent, useEffect, useMemo } from 'react';
import { pollingDateVar } from '../providers/apollo-client';

function useChangePolling(itemName: string, queries: RefetchQueriesInclude) {
  const [searchParams] = useSearchParams();
  const searchKeys = useMemo(() => [...searchParams.keys()], [searchParams]);
  const pollingDate = useReactiveVar(pollingDateVar);
  const setStartDate = () => {
    pollingDateVar({ ...pollingDate, [itemName]: moment().format() });
    client.refetchQueries({ include: queries });
  };

  const handleSwitchChange = (e: ChangeEvent<HTMLInputElement>) => {
    pollingDateVar({
      ...pollingDate,
      [itemName]: e.target.checked ? null : moment().format(),
    });
    if (e.target.checked) client.refetchQueries({ include: queries });
  };

  useEffect(() => {
    if (pollingDate[itemName])
      pollingDateVar({ ...pollingDate, [itemName]: moment().format() });
  }, [searchKeys.length]);

  return {
    handleSwitchChange,
    setStartDate,
  };
}

export default useChangePolling;
