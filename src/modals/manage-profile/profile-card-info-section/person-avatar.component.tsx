import { useUploadAvatar } from '../../../domains/profiles';
import { ImageWithUpdateButton } from '../../../elements';

type TUpdatePersonAvatar = {
  avatar: string;
  personId: string;
};

function PersonAvatar({ avatar, personId }: TUpdatePersonAvatar) {
  const { handleFileUpload } = useUploadAvatar(personId);

  return (
    <ImageWithUpdateButton
      mainSampleId={avatar}
      handleFileUpload={handleFileUpload}
    />
  );
}

export default PersonAvatar;
