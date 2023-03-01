const getImageUrl = (id?: string) =>
  id ? `/get${id.includes('rlt') ? '-realtime' : ''}-image/${id}` : '';

export default getImageUrl;
