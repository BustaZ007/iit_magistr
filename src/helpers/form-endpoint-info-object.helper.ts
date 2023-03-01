import { TEndpointMeta } from '../domains/endpoints';

type TEndpointInfo = {
  type: string;
} & TEndpointMeta;

const formEndpointInfoObject = (endpointInfo: TEndpointInfo) => ({
  ...(endpointInfo.type === 'Webhook' && {
    url: endpointInfo.url,
    method: endpointInfo.method,
  }),
  ...(endpointInfo.type === 'Email' && {
    target_email: endpointInfo.target_email,
  }),
});

export { formEndpointInfoObject };
