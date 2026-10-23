"use client";

import { forwardRef, useSyncExternalStore } from "react";
import { PhoneInput, defaultCountries } from "react-international-phone";

// The library renders every country (with a flag image) into the closed
// dropdown, which adds ~150 KB to the server HTML. Server-render only the
// default country and load the full list once the page is hydrated.
const SERVER_COUNTRIES = defaultCountries.filter((country) => country[1] === "in");

const subscribe = () => () => {};

const LazyPhoneInput = forwardRef(function LazyPhoneInput(props, ref) {
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  return (
    <PhoneInput
      ref={ref}
      countries={hydrated ? defaultCountries : SERVER_COUNTRIES}
      {...props}
    />
  );
});

export default LazyPhoneInput;
