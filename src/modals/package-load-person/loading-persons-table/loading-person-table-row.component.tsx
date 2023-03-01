import {
  Flex,
  Image,
  useColorModeValue,
  Text,
  Icon,
  Tooltip,
} from '@chakra-ui/react';
import { INACTIVE_USER_ERROR } from '@3divi/shared-components';
import { useState } from 'react';
import {
  ArrowCircleDown,
  CheckCircle,
  Hourglass,
  XCircle,
} from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import ProgressBar from '../progress-bar.component';
import MissingImageDark from '../../../static/missing-image-dark.svg';
import MissingImageLight from '../../../static/missing-image-light.svg';
import { useCreateProfileFromFile } from '../../../domains/profiles';

type TLoadingPersonTableRow = {
  file: File;
  addFileLoadingStatus: (status: 'error' | 'success') => void;
  canFileLoad: boolean;
};

function LoadingPersonTableRow({
  file,
  addFileLoadingStatus,
  canFileLoad,
}: TLoadingPersonTableRow): JSX.Element {
  const { t } = useTranslation('components');
  const { status, error } = useCreateProfileFromFile({
    file,
    handleLoadingEnd: addFileLoadingStatus,
    canFileLoad,
  });
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const [imageURL] = useState(URL.createObjectURL(file));
  const fallbackImage: string = useColorModeValue(
    MissingImageLight,
    MissingImageDark
  );

  const Icons = {
    pending: <Icon as={Hourglass} boxSize={6} />,
    loading: <Icon as={ArrowCircleDown} boxSize={6} />,
    success: <Icon as={CheckCircle} boxSize={6} />,
    failed: <Icon as={XCircle} boxSize={6} />,
  };

  const Details = {
    pending: <Text>{t(`LoadingProfileTable.InQueue`)}</Text>,
    loading: <ProgressBar />,
    success: <Text>{t(`LoadingProfileTable.SuccessAdded`)}</Text>,
    failed: (
      <Text wordBreak="break-word">
        {t(
          `errors.${error === INACTIVE_USER_ERROR ? 'AccountBlocked' : error}`
        )}
      </Text>
    ),
  };

  return (
    <>
      <Flex
        alignItems="center"
        pl="6"
        py="3"
        borderBottom="1px"
        borderColor={borderColor}
      >
        <Image
          boxSize="50px"
          objectFit="contain"
          src={imageURL}
          fallbackSrc={fallbackImage}
          alt="Image Preview"
        />
      </Flex>

      <Flex
        alignItems="center"
        px="6"
        py="3"
        borderBottom="1px"
        borderColor={borderColor}
      >
        <Tooltip label={t(`LoadingProfileTable.Statuses.${status}`)} hasArrow>
          {Icons[status]}
        </Tooltip>
      </Flex>

      <Flex
        alignItems="center"
        px="6"
        py="3"
        borderBottom="1px"
        borderColor={borderColor}
      >
        {Details[status]}
      </Flex>
    </>
  );
}

export default LoadingPersonTableRow;
