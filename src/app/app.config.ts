export const messages = {
    idNotMappedToUrl: 'Message id is not mapped to http url in config.ts file at application root.',
    httpGetUnknownError: 'Unknown error encountered while making http get request'
};
// let host = window.location.href;
// export const pamfUrl = "http://www.pamf.org";
export const urlMaps = {
    "letter:landing:next": "landing-page",
    "incorrect:tjr:done": "login",
    "hip:landing:next": "load-questionnaire",
    "hip:page2:submit": "submit-questionnaire",
    "hip:page2:redirect": "load-questionnaire",
    "knee:page3:submit": "submit-questionnaire",
    "knee:page3:redirect": "load-questionnaire",
    "promis:part5:submit": "submit-questionnaire",
    "promis:part5:redirect": "load-questionnaire",
    "ineligible:next": "login",
    "unsubscribe:next": "opt-out",
    "do:not:unsubscribe": "http://www.pamf.org",
    "unsubscribe:thank:you:exit": "http://www.pamf.org",
    "collaborate:submit": "submit-questionnaire",
    "collaborate:redirect": "load-questionnaire",
    "pamf:url":"http://www.pamf.org"
}




