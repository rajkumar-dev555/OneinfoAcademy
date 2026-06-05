/** Central contact details — keep NAP consistent across CTAs */
export const PHONE_DISPLAY = '+91 99408 04524';
export const PHONE_E164 = '+919940804524';
export const PHONE_TEL = 'tel:+919940804524';
export const WHATSAPP_NUMBER = '919940804524';

export function whatsappUrl(message = "Hi OneInfo Academy, I'd like course details and a free career consultation.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function whatsappUrlForCourse(courseName) {
  return whatsappUrl(`Hi OneInfo Academy, I'm interested in the ${courseName} course in Coimbatore. Please share batch details and placement support.`);
}
