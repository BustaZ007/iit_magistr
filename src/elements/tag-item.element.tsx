import { Tag, Text, useColorModeValue } from '@chakra-ui/react';
import { TGroup } from '../domains/group';
import { getContrastColor } from '../helpers';

type TTagItem = {
  group: TGroup;
};

function TagItem({ group }: TTagItem) {
  const shadowColor = useColorModeValue(
    'hsl(0 0% 0% / 0.12)',
    'hsl(0 0% 100% / 0.12)'
  );

  const tagColor = group.info.color;

  return (
    <Tag
      key={group.id}
      bg={tagColor}
      maxW={40}
      h="auto"
      boxShadow={`inset 0px 0px 0px 1px ${shadowColor}`}
      color={getContrastColor(tagColor ?? '')}
    >
      <Text noOfLines={1} wordBreak="break-all">
        {group.title}
      </Text>
    </Tag>
  );
}

export default TagItem;
