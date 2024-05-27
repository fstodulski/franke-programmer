export const sendCustomEvent = (
  eventCategory: string,
  eventAction: string,
  eventLabel: string,
  eventValue: string
) => {
  if (window.gtag) {
    window.gtag('event', eventAction, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue
    });
  } else {
    console.error('gtag is not defined');
  }
};
