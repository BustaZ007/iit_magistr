import { isOnPremise } from '@3divi/shared-components';
import packageJSON from '../../../package.json';

const LinksOnExternalSources = {
  PLATFORM_API: '/api/v2/?workspace_id=',
  IMAGE_API: '/image-api/docs',
  LINUX_AGENT_DOWNLOAD: '/get-agent/v2/linux_x64/',
  WINDOWS_AGENT_DOWNLOAD: '/get-agent/v2/windows_x64/',
  WHAT_IS_AN_AGENT: 'https://docs.3divi.ai/omni_agent/omni_introduction',
  INSTALLING_AND_CONFIGURATION_AGENT:
    'https://docs.3divi.ai/quick_start/#install-and-configure-omni-agent',
  DOCUMENTATION: 'https://docs.3divi.ai',
  SETTING_UP_ENVIRONMENT:
    'https://docs.3divi.ai/omni_agent/omni_getting_started#setting-up-the-environment',
  RELEASE_NOTES: `https://docs.3divi.ai/omni_platform/release_notes/${
    isOnPremise() ? 'on-premise' : 'cloud'
  }/release_notes_${packageJSON.version.replaceAll('.', '_')}`,
};

export default LinksOnExternalSources;
