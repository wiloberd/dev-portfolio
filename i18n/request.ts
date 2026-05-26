import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
    console.log("Locale:", locale); // Log the locale to verify it's being received correctly

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});