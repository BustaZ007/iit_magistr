import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useColorModeValue,
} from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import moment from 'moment';
import { CalendarBlank } from 'phosphor-react';
import { DayPicker } from 'react-day-picker';
import { useTranslation } from 'react-i18next';
import ru from 'date-fns/locale/ru';
import { useCallback } from 'react';

type TDrawerDateInput = {
  date: string | undefined;
  name: string;
  error: string | undefined;
  setDate: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{
          age: number;
          gender: string;
          description: string;
          name: string;
          birthday: string | undefined;
        }>
      >;
  label?: string;
};

export default function DrawerDateInput({
  date,
  error,
  setDate,
  name,
  label,
}: TDrawerDateInput) {
  const language = window.navigator ? window.navigator.language : 'en';
  const { t } = useTranslation('components');
  const bg = useColorModeValue('gray.100', 'gray.600');
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.300');

  const onSelect = useCallback(
    (newDate: Date | undefined) => {
      setDate(name, moment(newDate).format('YYYY-MM-DD'));
    },
    [setDate, name]
  );
  return (
    <FormControl
      isInvalid={!!error}
      display="flex"
      alignItems="flex-start"
      z-index={9999}
    >
      {!!label && (
        <FormLabel
          w="max-content"
          fontSize="sm"
          opacity={0.48}
          fontWeight="normal"
          minW={150}
          m={0}
          py={2}
          lineHeight={1}
        >
          {label}
        </FormLabel>
      )}
      <Popover placement="bottom-start">
        {({ onClose }) => (
          <>
            <PopoverTrigger>
              <Button
                pl={2}
                leftIcon={<Icon as={CalendarBlank} w={4} h={4} />}
                textAlign="left"
                justifyContent="flex-start"
                w="max-content"
                maxW="400px"
                fontWeight="normal"
                size="sm"
                borderRadius="md"
                bg={bg}
                variant="outline"
                borderColor={borderColor}
              >
                {date ? moment(date).format('DD MMMM YYYY') : '--.--.--'}
              </Button>
            </PopoverTrigger>
            <PopoverContent w="max-content" rootProps={{ style: { right: 0 } }}>
              <PopoverBody>
                <DayPicker
                  onSelect={onSelect}
                  locale={
                    language === 'ru' || language === 'гu-RU' ? ru : undefined
                  }
                  showOutsideDays
                  toDate={new Date()}
                  fromYear={1900}
                  mode="single"
                  onDayClick={onClose}
                  selected={date ? new Date(date) : undefined}
                  captionLayout="dropdown"
                />
              </PopoverBody>
            </PopoverContent>
          </>
        )}
      </Popover>
      <FormErrorMessage>{error && t(`errors.${error}`)}</FormErrorMessage>
    </FormControl>
  );
}
