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

exports.options = options;
let pamfOptions = {
    nodeServerBaseUrl: 'http://localhost:4200',
    nodeServerPath:'',
    redirection:{
        "landing-page":function(contact_type,code,email){
            let ret="";
            if(code=='12345'){
                ret="selectType";
            } else{
                ret="incorrectTjr";
                // ret='letterLanding'
            }
            return(ret);
        }
    }
};
exports.pamfOptions = pamfOptions;