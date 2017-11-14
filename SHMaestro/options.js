let options = {
    nodeServerBaseUrl: 'http://localhost:3001',
    nodeServerPath:'bio',
    nodeServerGrailPath:'grail',
    redirection:{
        "redirect-to-view-consent":"viewConsent1",
        "redirect-to-survey":"thankyou",
        "redirect-to-esign-workflow":"question1",
        "signed-document":"thankyou",
        "redirect-to-consent-quiz":"quiz",
        "redirect-to-consent-quiz-complete":"quizPassed",
        "redirect-to-signed-document":"thankyou",
        "opt-out-results":"thankyou",
        "redirect-to-survey-complete":'thankyou'
    },
    grailRedirection:{
        "landing-page-completed":"consentCompletedThankYou",
        "signed-document":"consentDeclined",
        "redirect-to-survey":"invalidDob"
    }
};
// module.exports = options;
exports.options = options;
let pamfOptions = {
    nodeServerBaseUrl: 'localhost:4200',
    nodeServerPath:'',
    redirection:{
        pamf:""
    }
};
exports.pamfOptions = pamfOptions;