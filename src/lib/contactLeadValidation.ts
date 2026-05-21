const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactLeadFields = {
  name: string;
  email: string;
  country: string;
  phone: string;
  company: string;
  message: string;
};

export function validateContactLead(
  form: ContactLeadFields,
  dialCodes: Record<string, string>,
): Partial<Record<keyof ContactLeadFields, string>> {
  const errors: Partial<Record<keyof ContactLeadFields, string>> = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(form.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!form.country.trim()) errors.country = "Please select your country.";
  if (!form.company.trim()) errors.company = "Company name is required.";
  if (!form.message.trim()) errors.message = "Message is required.";

  const ph = form.phone.trim();
  if (!ph) {
    errors.phone = "Phone number is required.";
  } else {
    const dialDigits = (dialCodes[form.country] || "").replace(/\D/g, "");
    const allDigits = ph.replace(/\D/g, "");
    const national =
      dialDigits && allDigits.startsWith(dialDigits)
        ? allDigits.slice(dialDigits.length)
        : allDigits;
    if (national.length < 8)
      errors.phone = "Enter a complete phone number (at least 8 digits).";
    else if (allDigits.length > 15) errors.phone = "Phone number is too long.";
  }
  return errors;
}

/** When picking a country: empty phone → dial + space; national digits only → dial + digits; leading + left as-is. */
export function phoneValueAfterCountryChange(
  prevPhone: string,
  newCountry: string,
  dialCodes: Record<string, string>,
): string {
  const dial = dialCodes[newCountry];
  if (!dial) return prevPhone;
  const raw = prevPhone.trim();
  if (!raw) return `${dial} `;
  if (raw.startsWith("+")) return prevPhone;
  const digits = raw.replace(/\D/g, "");
  return `${dial}${digits}`;
}

/** E.164-style string for API, or "" if optional phone left empty / dial only. */
export function normalizedPhoneForLead(
  phone: string,
  country: string,
  dialCodes: Record<string, string>,
): string {
  const raw = phone.trim();
  if (!raw) return "";
  const dialDigits = (dialCodes[country] || "").replace(/\D/g, "");
  const allDigits = raw.replace(/\D/g, "");
  const national =
    dialDigits && allDigits.startsWith(dialDigits)
      ? allDigits.slice(dialDigits.length)
      : allDigits;
  if (national.length === 0) return "";
  if (raw.startsWith("+")) return `+${allDigits}`;
  return `+${dialDigits}${national}`;
}
