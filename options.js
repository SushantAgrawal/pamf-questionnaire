var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
var env = config.env;
var allEnvs = {
    staging: {        
        maestroBaseUrl: 'http://dcdlrhr901:8989',
        nodeServerBaseUrl: 'http://biobank-newpro-staging',
        nodeServerPath: 'bio',
        maestroPath: 'biobank-orchestrator/api/external',
        questionsUrlPath: 'biobank-orchestrator/api/external/questionnaire'
    },
    qa: {
        maestroBaseUrl: 'https://qa.biobank.sutterhealth.org',
        nodeServerBaseUrl: 'https://qa.dmz.biobank-newpro.sutterhealth.org',
        nodeServerPath: 'bio',
        maestroPath: '',
        questionsUrlPath: 'questionnaire'
         
    },
    validation: {
        maestroBaseUrl: 'http://dcplrdd101:8989',
        nodeServerBaseUrl: 'http://biobank-newpro-validation.sutterhealth.org',
        nodeServerPath: 'bio',
        maestroPath: 'biobank-orchestrator/api/external',
        questionsUrlPath: 'biobank-orchestrator/api/external/questionnaire'                                                                                                   
    },
    production: {
        maestroBaseUrl: 'https://biobank.sutterhealth.org',
        nodeServerBaseUrl: 'https://dmz.biobank-newpro.sutterhealth.org',
        nodeServerPath: 'bio',
        maestroPath: '',
        questionsUrlPath: 'questionnaire'
    }
};
const sutterHealthUrl = 'http://www.sutterhealth.org/research/biobank';

var questionsPostUrl = allEnvs[env]
    .maestroBaseUrl
    .concat('/')
    .concat(allEnvs[env].questionsUrlPath);
exports.urls = allEnvs[env];
exports.sutterHealthUrl = sutterHealthUrl;
var pages = {
    landing: {
        htmlFileName: 'generic-landing.html',
        nextPage: '',
        maestroPage: 'redirect-to-view-consent'
    },
    emailLanding: {
        htmlFileName: 'email-landing.html',
        nextPage: '',
        maestroPage: 'redirect-to-view-consent'
    },
    thankyou: {
        htmlFileName: 'thankyou.html',
        nextPage: '',
        maestroPage: '',
        status: 4
    },
    consentCompleted: {
        htmlFileName: 'consent-completed.html',
        nextPage: '',
        maestroPage: 'redirect-to-survey',
        status: 2
    },
    invalidDOB: {
        htmlFileName: 'invalid-dob.html',
        nextPage: '',
        maestroPage: 'redirect-to-esign-workflow',
        status: 0
    },
    consentDownloadDOBValidation: {
        htmlFileName: 'consent-download-dob-validation.html',
        nextPage: '',
        maestroPage: 'signed-document'
    },
    viewConsent1: {
        htmlFileName: 'view-consent1.html',
        nextPage: 'viewConsent2',
        maestroPage: '',
        status: 1
    },
    viewConsent2: {
        htmlFileName: 'view-consent2.html',
        nextPage: 'viewConsent3',
        maestroPage: '',
        status: 1
    },
    viewConsent3: {
        htmlFileName: 'view-consent3.html',
        nextPage: 'viewConsent4',
        maestroPage: '',
        status: 1
    },
    viewConsent4: {
        htmlFileName: 'view-consent4.html',
        nextPage: 'viewConsent5',
        maestroPage: '',
        status: 1
    },
    viewConsent5: {
        htmlFileName: 'view-consent5.html',
        nextPage: 'viewConsent6',
        maestroPage: '',
        status: 1
    },
    viewConsent6: {
        htmlFileName: 'view-consent6.html',
        nextPage: '',
        maestroPage: 'redirect-to-consent-quiz',
        status: 1
    },
    quizPassed: {
        htmlFileName: 'quiz-passed.html',
        nextPage: '',
        maestroPage: 'redirect-to-esign-workflow',
        status: 1
    },

    quiz: {
        htmlFileName: 'quiz.html',
        nextPage: '',
        maestroPage: 'redirect-to-consent-quiz-complete',
        status: 1
    },
    quizFailed: {
        htmlFileName: 'quiz-failed.html',
        nextPage: '',
        maestroPage: 'redirect-to-consent-quiz-complete',
        status: 1
    },

    question1: {
        htmlFileName: 'questionnaire1.html',
        nextPage: 'question2',
        nextPage1: 'question3',
        maestroPage: '',
        questionPost: questionsPostUrl,
        status: 3
    },
    question2: {
        htmlFileName: 'questionnaire2.html',
        nextPage: 'question3',
        maestroPage: '',
        questionPost: questionsPostUrl //,
        // status:3
    },
    question3: {
        htmlFileName: 'questionnaire3.html',
        nextPage: 'question4',
        maestroPage: '',
        questionPost: questionsPostUrl,
        status: 3
    },
    question4: {
        htmlFileName: 'questionnaire4.html',
        nextPage: 'question5',
        maestroPage: '',
        questionPost: questionsPostUrl,
        status: 3
    },
    question5: {
        htmlFileName: 'questionnaire5.html',
        nextPage: 'question6',
        maestroPage: '',
        questionPost: questionsPostUrl,
        status: 3
    },
    question6: {
        htmlFileName: 'questionnaire6.html',
        nextPage: 'question7',
        maestroPage: '',
        questionPost: questionsPostUrl,
        status: 3
    },
    question7: {
        htmlFileName: 'questionnaire7.html',
        nextPage: 'question8',
        maestroPage: '',
        questionPost: questionsPostUrl,
        status: 3
    },
    question8: {
        htmlFileName: 'questionnaire8.html',
        nextPage: 'question9',
		nextPage1: 'question11',
        maestroPage: '',
        questionPost: questionsPostUrl,
        status: 3
    },
    question9: {
        htmlFileName: 'questionnaire9.html',
        nextPage: 'question10',
        maestroPage: '',
        questionPost: questionsPostUrl,
        status: 3
    },
    question10: {
        htmlFileName: 'questionnaire10.html',
        nextPage: 'question11',
        maestroPage: '',
        questionPost: questionsPostUrl,
        status: 3
    },
    question11: {
        htmlFileName: 'questionnaire11.html',
        nextPage: 'question12',
        nextPage1: 'question13',
        maestroPage: '',
        questionPost: questionsPostUrl,
        gender:true,
        status: 3
    },
    question12: {
        htmlFileName: 'questionnaire12.html',
        nextPage: 'question13',
        maestroPage: '',
        questionPost: questionsPostUrl,
        gender:true
    },
    question13: {
        htmlFileName: 'questionnaire13.html',
        nextPage: '',
        maestroPage: 'redirect-to-survey-complete',
        questionPost: questionsPostUrl
    },
    consentWithdrawn: {
        htmlFileName: 'consent-withdrawn.html',
        nextPage: '',
        maestroPage: '',
        status: 0
    },
    consentDeclined: {
        htmlFileName: 'consent-declined.html',
        nextPage: '',
        maestroPage: '',
        status: 0
    },
    invitationExpired: {
        htmlFileName: 'invitation-expired.html',
        nextPage: '',
        maestroPage: '',
        status: 0
    },
    invalidInvitation: {
        htmlFileName: 'invalid-invitation.html',
        nextPage: '',
        maestroPage: ''
    },
    notInterested: {
        htmlFileName: 'biobank-not-interested.html',
        nextPage: '',
        maestroPage: ''
    },
    notInterested2: {
        htmlFileName: 'biobank-not-interested2.html',
        nextPage: '',
        maestroPage: ''
    },
    notInterested3: {
        htmlFileName: 'biobank-not-interested3.html',
        nextPage: '',
        maestroPage: ''
    },
    dobValidationError: {
        htmlFileName: 'consent-download-dob-validation-error.html',
        nextPage: '',
        maestroPage: 'redirect-to-signed-document'
    },
    unsubscribe: {
        htmlFileName: 'unsubscribe.html',
        nextPage: '',
        maestroPage: 'opt-out-results'
    },
    unsubscribeConsented: {
        htmlFileName: 'unsubscribe-consented.html',
        nextPage: '',
        maestroPage: ''
    }
};
exports.pages = pages;