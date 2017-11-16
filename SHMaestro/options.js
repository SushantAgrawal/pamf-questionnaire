let options = {
    nodeServerBaseUrl: 'http://localhost:3001',
    nodeServerPath: 'bio',
    nodeServerGrailPath: 'grail',
    redirection: {
        "redirect-to-view-consent": "viewConsent1",
        "redirect-to-survey": "thankyou",
        "redirect-to-esign-workflow": "question1",
        "signed-document": "thankyou",
        "redirect-to-consent-quiz": "quiz",
        "redirect-to-consent-quiz-complete": "quizPassed",
        "redirect-to-signed-document": "thankyou",
        "opt-out-results": "thankyou",
        "redirect-to-survey-complete": 'thankyou'
    },
    grailRedirection: {
        "landing-page-completed": "consentCompletedThankYou",
        "signed-document": "consentDeclined",
        "redirect-to-survey": "invalidDob"
    }
};

exports.options = options;
let pamfOptions = {
    nodeServerBaseUrl: 'http://localhost:4200',
    nodeServerPath: 'pamf',
    redirection: {
        "landing-page": function (req) {
            let ret = "";
            let contact_type = req.query["contact_type"];
            let code = req.query["code"];
            let email = req.query["email"];
            if (code == '12345') {
                ret = "hipLanding?c14=10/11/2017";
            } else {
                ret = "incorrectTjr";
            }
            return (ret);
        },
        "login": "letterLanding",
        "load-questionnaire":"hipIntro"
    }
};
exports.pamfOptions = pamfOptions;