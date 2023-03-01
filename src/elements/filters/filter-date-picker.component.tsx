/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Box,
  Button,
  Flex,
  Icon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useColorModeValue,
} from '@chakra-ui/react';
import { CalendarBlank } from 'phosphor-react';
import { DatePicker } from '@3divi/shared-components';
import { useTranslation } from 'react-i18next';
import ClearFilterButton from './clear-filter-button.component';
import { useFilterByRangeDateTime } from '../../hooks';
import TimeInput from '../time-input.element';
import { CustomFormLabel } from '../custom-form-lable.component';

type TFilterDatePicker = {
  type: 'creation' | 'modify';
  label: string;
};

function FilterDatePicker({ type, label }: TFilterDatePicker): JSX.Element {
  const bg = useColorModeValue('white', 'gray.900');
  const { t } = useTranslation('common');
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.300');

  const {
    date,
    startTime,
    endTime,
    onSelect,
    selectedDateText,
    resetData,
    changeEndTime,
    changeStartTime,
  } = useFilterByRangeDateTime({ type });

  return (
    <Box w="full">
      <Flex align="center" justifyContent="space-between" pb={1.5}>
        <CustomFormLabel label={label} htmlFor={type} />
        {selectedDateText && <ClearFilterButton onClick={resetData} />}
      </Flex>
      <Popover placement="left-end">
        <PopoverTrigger>
          <Button
            pl={2}
            leftIcon={<Icon as={CalendarBlank} w={4} h={4} />}
            textAlign="left"
            justifyContent="flex-start"
            w="full"
            fontWeight="normal"
            size="sm"
            id={type}
            borderRadius="md"
            bg={bg}
            variant="outline"
            borderColor={borderColor}
            mb={2}
          >
            {selectedDateText}
          </Button>
        </PopoverTrigger>

        <Portal>
          <PopoverContent w="max-content" rootProps={{ style: { right: 0 } }}>
            <PopoverBody>
              <DatePicker
                onSelect={onSelect}
                selectedDate={date}
                monthsShown={2}
              />
              <Flex w="full" gap={4} px={4} pb={4}>
                <TimeInput
                  id="startTime"
                  timeValue={startTime ?? ''}
                  setTimeValue={changeStartTime}
                  label={t('Start')}
                />
                <TimeInput
                  id="endTime"
                  timeValue={endTime ?? ''}
                  setTimeValue={changeEndTime}
                  label={t('End')}
                />
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </Box>
  );
}

export default FilterDatePicker;
