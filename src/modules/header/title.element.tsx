import { useLocation } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

enum pageName {
  "workspaces" = "Workspaces.Title",
  "agents" = "Agents.Title",
  "notifications" = "Notifications.Title",
  "activities" = "Activities.Title",
  "persons" = "Profiles.Title",
  "billing" = "Billing.Title",
  "settings" = "Settings.Title",
  "settingsgroups" = "Settings.Groups.Title",
  "settingsagents" = "Agents.Title",
  "settingsgeneral" = "Settings.General.Title",
  "settingstriggers" = "Settings.Triggers.Title",
  "settingsendpoints" = "Settings.Endpoints.Title",
  "settingsfields" = "Settings.Fields.Title",
  "settingsintegration" = "Settings.Integration.Title",
}

function TitleElement() {
  const { pathname } = useLocation();

  const path = pathname.replace(/\//g, "");

  return (
    <Heading fontSize="lg" fontWeight="semibold">
      {path === ""
        ? "Dashboard.Title"
        : pageName[path as keyof typeof pageName] ?? ""}
    </Heading>
  );
}

export default TitleElement;
