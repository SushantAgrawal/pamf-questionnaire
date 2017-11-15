var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
var env = config.env;
const allEnvs = {
    staging: {
        maestroBaseUrl: 'http://localhost:3003',
        // nodeServerBaseUrl: 'http://localhost:3001',
        // nodeServerPath: 'pamf',
        maestroPath: '',
        questionsUrlPath: 'questionnaire'
    },
    qa: {
        maestroBaseUrl: 'https://qa.biobank.sutterhealth.org',
        // nodeServerBaseUrl: 'https://qa.dmz.biobank-newpro.sutterhealth.org',
        // nodeServerPath: 'bio',
        maestroPath: '',
        questionsUrlPath: 'questionnaire'

    },
    validation: {
        maestroBaseUrl: 'http://dcplrdd101:8989',
        // nodeServerBaseUrl: 'http://biobank-newpro-validation.sutterhealth.org',
        // nodeServerPath: 'bio',
        maestroPath: 'biobank-orchestrator/api/external',
        questionsUrlPath: 'biobank-orchestrator/api/external/questionnaire'
    },
    production: {
        maestroBaseUrl: 'https://biobank.sutterhealth.org',
        // nodeServerBaseUrl: 'https://dmz.biobank-newpro.sutterhealth.org',
        // nodeServerPath: 'bio',
        maestroPath: '',
        questionsUrlPath: 'questionnaire'
    }
};
const urls = allEnvs[env];
const sutterHealthUrl = 'http://www.sutterhealth.org/research/biobank';
const questionsPostUrl = allEnvs[env]
    .maestroBaseUrl
    .concat('/')
    .concat(allEnvs[env].questionsUrlPath);
module.exports = {
    urls:urls,
    sutterHealthUrl:sutterHealthUrl,
    questionsPostUrl:questionsPostUrl
}