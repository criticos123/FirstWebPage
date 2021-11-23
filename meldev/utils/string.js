import Router from "next/router";

export const parseLocalizedStrings = (data) =>
  Object.entries(data).reduce(
    (parsedData, [key, value]) => ({
      ...parsedData,
      [key]:
        value && value.__typename && value.__typename === "LocaleString"
          ? value[Router.locale]
          : value,
    }),
    {}
  );
