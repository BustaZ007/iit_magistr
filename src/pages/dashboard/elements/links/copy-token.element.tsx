import { Key } from "phosphor-react";
import { Button, HStack, Input, useClipboard } from "@chakra-ui/react";
import { MouseEvent } from "react";
import { Card } from "../../section.component";

type TCopyToken = {
  authorizeToken: string;
};

export function CopyToken({ authorizeToken }: TCopyToken) {
  const { hasCopied, onCopy } = useClipboard(authorizeToken);

  const handleCopyClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onCopy();
  };

  return (
    <Card
      icon={Key}
      title="Dashboard.Widgets.AuthorizationKey.Title"
      subtitle="Dashboard.Widgets.AuthorizationKey.Description"
    >
      <HStack spacing={2} w="100%" pt={2}>
        <Input
          size="md"
          noOfLines={1}
          wordBreak="break-all"
          flexShrink={1}
          isReadOnly
          value={authorizeToken}
          id="key"
          type="text"
        />

        <Button
          id="copy-token-button"
          flexShrink={0}
          variant="outline"
          size="md"
          fontWeight="normal"
          onClick={handleCopyClick}
        >
          {hasCopied ? "Copied" : "Copy"}`
        </Button>
      </HStack>
    </Card>
  );
}
