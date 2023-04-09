import { useLocation } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

enum pageName {
  "workspaces" = "Workspaces.Title",
  "agents" = "Agents.Title",
  "notifications" = "Notifications.Title",
  "activities" = "Activities.Title",
  "persons" = "Profiles.Title",
  "billing" = "Billing.Title",
  "settings" = "Настройки",
}

function TitleElement() {
  const { pathname } = useLocation();

  const path = pathname.replace(/\//g, "");

  return (
    <Heading fontSize="lg" fontWeight="semibold">
      {path === ""
        ? "Домашняя страница"
        : pageName[path as keyof typeof pageName] ?? ""}
    </Heading>
  );
}

export default TitleElement;
