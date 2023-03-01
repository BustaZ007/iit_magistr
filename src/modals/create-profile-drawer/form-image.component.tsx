import {
  Flex,
  useToast,
  Text,
  HStack,
  Icon,
  Box,
  FormControl,
  Spinner,
} from '@chakra-ui/react';
import { INACTIVE_USER_ERROR } from '@3divi/shared-components';
import { FormikErrors } from 'formik';
import { Warning, WarningOctagon } from 'phosphor-react';
import { ApolloError } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TSearchResult } from '../../domains/profiles';
import { CustomFormLabel, ProfileImage } from '../../elements';
import { useConvertFileToBase64 } from '../../hooks';
import missingImageLight from '../../static/missing-image-light.svg';
import missingImageDark from '../../static/missing-image-dark.svg';
import LoadImageButton from './load-image-button.component';
import { TInitialValue } from '../../helpers';

type TFormImage = {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<TInitialValue>>;
  searchPersons: (sourceImage: string) => Promise<TSearchResult[] | undefined>;
  searchLoading: boolean;
  searchError: ApolloError | undefined;
};

function FormImage({
  setFieldValue,
  searchError,
  searchLoading,
  searchPersons,
}: TFormImage) {
  const { t } = useTranslation('pages');
  const toast = useToast();
  const [candidates, setCandidates] = useState<TSearchResult[]>([]);
  const { base64Image, error, handleFileUpload } = useConvertFileToBase64();

  useEffect(() => {
    if (base64Image) {
      setCandidates([]);
      searchPersons(base64Image).then((res) => {
        setFieldValue('image', base64Image);
        if (res) {
          // Кастомное фильтр тикет 584 Plaftorm PM так как добавляется в конец массива profile: null
          setCandidates(res.filter((item) => item.profile));
        }
      });
    }
  }, [base64Image]);

  useEffect(() => {
    if (error) {
      toast({
        title: t(`components:errors.${error}`),
        status: 'error',
        position: 'top',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [error]);

  return (
    <Box w="full">
      <FormControl display="flex" alignContent="flex-start">
        <Box py={2}>
          <CustomFormLabel label={t('Profiles.ProfileCard.Photo')} />
        </Box>

        <Flex>
          <ProfileImage
            image={base64Image && `data:image/jpeg;base64,${base64Image}`}
            size="160px"
            fallbackDarkSrc={missingImageDark}
            fallbackLightSrc={missingImageLight}
          />
          <Flex direction="column" gap={3} alignItems="flex-start" pl={3}>
            <LoadImageButton
              handleFileUpload={handleFileUpload}
              disabled={searchLoading}
              text={t('common:Upload')}
            />
            {searchLoading && (
              <HStack spacing={1} h="max-content">
                <Spinner size="md" />
                <Text>{t('Profiles.ProfileCard.Candidates.Search')}</Text>
              </HStack>
            )}
            {searchError && searchError.message !== INACTIVE_USER_ERROR && (
              <HStack spacing={1} h="max-content">
                <Icon as={WarningOctagon} w={7} h={7} color="red" />
                <Text>{`${t(`components:errors.${searchError.message}`)} ${t(
                  'components:errors.ChooseNewImage'
                )}`}</Text>
              </HStack>
            )}
            {!!candidates.length && (
              <Box>
                <HStack spacing={1} h="max-content">
                  <Icon as={Warning} w={7} h={7} color="orange" />
                  <Text>{t('Profiles.ProfileCard.Candidates.Found')}</Text>
                </HStack>
                <Flex pt={2} gap={2}>
                  {candidates.map((candidate) => (
                    <ProfileImage
                      key={candidate.profile.id}
                      sampleId={candidate.profile.mainSample.id}
                      size="64px"
                    />
                  ))}
                </Flex>
              </Box>
            )}
          </Flex>
        </Flex>
      </FormControl>
    </Box>
  );
}

export default FormImage;
