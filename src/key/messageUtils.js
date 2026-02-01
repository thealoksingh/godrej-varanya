// Utility function to create messages with user address
export const createMessageWithAddress = (baseMessage, userName = '') => {
  const userAddress = window.user_address;
  let message = '';
  
  if (userName) {
    message = baseMessage.replace('${name}', userName);
  } else {
    message = baseMessage;
  }
  
  // Only append address if it's available and not null/undefined
  if (userAddress && userAddress !== "Location not available") {
    message += ` My address is: ${userAddress}`;
  }
  
  return message;
};

// Message templates
export const messageTemplates = {
  general: "Hello, this is ${name}. I'm interested in Godrej Varanya property and would love to have a brief discussion at your convenience.",
  callback: "Hello, this is ${name}. I would like to request a callback to discuss Godrej Varanya property. Please contact me at your convenience.",
  brochure: "Hello, this is ${name}. I would like to download the brochure for Godrej Varanya property. Please share the details.",
  mobile: "Hello, I'm interested in Godrej Varanya property and would love to have a brief discussion at your convenience. (this form is submitted from mobile view)",
  offerPrice: "Hello, this is ${name}. I am interested in Godrej Varanya property and would appreciate more details regarding the current offers, pricing, and any special benefits available.",
  brochureRequest: "Hello, this is ${name}. I'm interested in Godrej Varanya property. Could you please send me the brochure?"
};