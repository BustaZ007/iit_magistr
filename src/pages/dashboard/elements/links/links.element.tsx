import { BracketsCurly, Files, ImageSquare, Link } from "phosphor-react";
import { SectionButtonBlock, DashboardSectionBlock } from "../../blocks";

import { LinksOnExternalSources } from "../../../../consts";
import { CopyToken } from "./copy-token.element";

export function LinksElement() {
  const authorizeToken = "authorizeToken";

  return (
    <DashboardSectionBlock icon={Link} title="Dashboard.Resources">
      <SectionButtonBlock
        id="docs-link-dashboard"
        icon={Files}
        title="Dashboard.TopWidgets.Docs"
        subtitle="Dashboard.CompleteGuide"
        url={LinksOnExternalSources.DOCUMENTATION}
      />

      {authorizeToken && <CopyToken authorizeToken={authorizeToken} />}

      <SectionButtonBlock
        id="api-link-dashboard"
        icon={BracketsCurly}
        title="Dashboard.TopWidgets.PlatformApi"
        subtitle="Dashboard.Widgets.PlatformAPI.Description"
        url={`${LinksOnExternalSources.PLATFORM_API}}`}
      />

      <SectionButtonBlock
        id="image-api-link-dashboard"
        icon={ImageSquare}
        title="Dashboard.TopWidgets.ImageApi"
        subtitle="Dashboard.Widgets.ImageAPI.Description"
        url={LinksOnExternalSources.IMAGE_API}
      />
    </DashboardSectionBlock>
  );
}
