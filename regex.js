// function to extract emails, url, phone numbers and credit cards
function extractMatches(text){
    // regex to match email
    const emailReg = /([a-zA-Z0-9._%+-])+@([a-zA-Z0-9.-])+\.([a-zA-Z]){2,}(\.([a-zA-Z]){2,})?/g
    // regex to match url
    const urlReg = /(http[s]?):\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+(\/[a-zA-Z0-9]*)*/g
    // regex to match phone numbers
    const phoneNumReg = /\(?([0-9]){3}\)?[\s.-]?([0-9]){3}(\.|-)([0-9]){4}/g
    //// regex to match credit cards
    const creditReg = /\b([0-9]{4}(\s|-)){3}([0-9]){4}\b/g

    // extracting all matches for each type
    const emails = text.match(emailReg)
    const urls = text.match(urlReg)
    const phoneNumbers = text.match(phoneNumReg)
    const creditCards = text.match(creditReg)
    // return an object with the matches
    return {
        emails,
        urls,
        phoneNumbers,
        creditCards
  };
}

// sample text
const testStrings =`
Email addresses:
user@example.com
firstname.lastname@company.co.uk
invalid@domain
user@domain,com
URLs:
https://www.example.com
http://subdomain.example.org/page
www.example.com
http:/invalid-url.com
Phone numbers (various formats):
(123) 456-7890
123-456-7890
123.456.7890
1234567890
123-45-7890
Credit card numbers:
1234 5678 9012 3456
1234-5678-9012-3456
1234567890123456
1234_5678_9012_3456
1234-5678-9012
`
//call the function and log the results
const result = extractMatches(testStrings);
console.log('Emails:', result.emails || 'No emails found');
console.log('URLs:', result.urls || 'No URLs found');
console.log('Phone Numbers:', result.phoneNumbers || 'No phone numbers found');
console.log('Credit Card Numbers:', result.creditCards || 'No credit card numbers found');