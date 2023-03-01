export type TInitialValue = {
  gender: string;
  description: string;
  name: string;
  birthday: string;
  profileGroupsIds?: string[];
  image?: string;
  [key: string]: string | string[] | undefined;
};

type TCustomField = {
  name: string;
  value: string | string[] | undefined;
};

const handlePersonOperation = (
  values: TInitialValue,
  callback: (infoValues: TCustomField[]) => void
) => {
  const info = { ...values };
  delete info.image;
  delete info.profileGroupsIds;
  delete info.main_sample_id;
  delete info.avatar_id;
  const fields = Object.entries(info).map((entry) => ({
    name: entry[0],
    value: entry[1] ?? '',
  }));
  callback(fields);
};
export { handlePersonOperation };
