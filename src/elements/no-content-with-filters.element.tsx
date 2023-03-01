import React, { ReactNode } from 'react';
import { NoContent } from '@3divi/shared-components';
import { useSearchParams } from 'react-router-dom';
import { IconProps } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

type TNoContentWithFilters = {
  title: string;
  titleWithFilters: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  loading: boolean;
  children?: ReactNode;
};

function NoContentWithFilters({
  title,
  titleWithFilters,
  children,
  loading,
  icon,
}: TNoContentWithFilters) {
  const { t } = useTranslation('common');
  const [searchParams] = useSearchParams();
  const hasFilters =
    [...searchParams.keys()].filter((key) => key !== 'page').length > 0;
  let chosenTitle = title;
  if (loading) {
    chosenTitle = t('LoadData');
  } else if (hasFilters) {
    chosenTitle = titleWithFilters;
  }
  return (
    <NoContent title={chosenTitle} icon={!loading ? icon : undefined}>
      {!loading && !hasFilters && children}
    </NoContent>
  );
}

export default NoContentWithFilters;
