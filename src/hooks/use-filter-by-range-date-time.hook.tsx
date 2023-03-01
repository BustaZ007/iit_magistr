import { debounce } from 'lodash';
import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getValidTime, useDatePicker } from '@3divi/shared-components';

type TUseFilterByRangeDateTime = {
  type: 'creation' | 'modify';
};

function useFilterByRangeDateTime({
  type = 'creation',
}: TUseFilterByRangeDateTime) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { date, onSelect, resetDate } = useDatePicker({ type });
  const startDateParams = date?.from;
  const endDateParams = date?.to;

  const [startTime, setStartTime] = useState<string>(
    startDateParams ? moment(startDateParams).format('HH:mm') : '00:00'
  );

  const [endTime, setEndTime] = useState<string>(
    endDateParams ? moment(endDateParams).format('HH:mm') : '23:59'
  );

  const updateUrl = useCallback(
    debounce(() => {
      setSearchParams(searchParams, { replace: true });
    }, 1000),
    [searchParams, setSearchParams]
  );

  const resetData = () => {
    resetDate();
    updateUrl.cancel();
    searchParams.delete(`${type}StartDate`);
    searchParams.delete(`${type}EndDate`);
    setSearchParams(searchParams, { replace: true });
  };

  useEffect(() => {
    if (
      (!searchParams.has(`${type}StartDate`) ||
        !searchParams.has(`${type}EndDate`)) &&
      (date?.from || date?.to)
    )
      resetData();
  }, [searchParams]);

  const compareDates = (firstDate: Date, secondDate: Date, format: string) =>
    moment(firstDate).format(format) === moment(secondDate).format(format);

  const getDataRangeString = () => {
    const startDate = date?.from;
    const endDate = date?.to;
    if (!startDate || !endDate) {
      return '';
    }

    if (compareDates(startDate, endDate, 'DD MMM YYYY')) {
      return `${moment(startDate).format('DD MMM YYYY')}`;
    }

    if (compareDates(startDate, endDate, 'MMM YYYY')) {
      return `${moment(startDate).format('DD')}
              — ${moment(endDate).format('DD MMM YYYY')}`;
    }

    if (compareDates(startDate, endDate, 'YYYY')) {
      return `${moment(startDate).format('DD MMM')}
              — ${moment(endDate).format('DD MMM YYYY')}`;
    }

    return `${moment(startDate).format('DD MMM YYYY')}
              — ${moment(endDate).format('DD MMM YYYY')}`;
  };

  const formatDate = (currentDate: Date | string, time: string) =>
    moment(
      `${moment(currentDate).format('YYYY-MM-DD')} ${getValidTime(time)}:00`
    ).format('YYYY-MM-DDTHH:mmZ');

  useEffect(() => {
    if (date?.from && date?.to) {
      searchParams.set(`${type}StartDate`, formatDate(date?.from, startTime));
      searchParams.set(`${type}EndDate`, formatDate(date?.to, endTime));
      updateUrl();
    }
  }, [date, startTime, endTime]);

  return {
    selectedDateText: getDataRangeString(),
    date,
    onSelect,
    startTime,
    endTime,
    changeStartTime: setStartTime,
    changeEndTime: setEndTime,
    resetData,
  };
}

export default useFilterByRangeDateTime;
