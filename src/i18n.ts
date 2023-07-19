import { AbstractIntlMessages } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

type FileType = {
  default: AbstractIntlMessages;
};

export default getRequestConfig(async ({ locale }) => {
  const translatedFile = (await import(
    `@/messages/${locale}.json`
  )) as FileType;

  return {
    messages: translatedFile.default,
  };
});
