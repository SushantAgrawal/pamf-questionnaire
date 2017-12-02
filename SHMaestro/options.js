let pamfOptions = {
    nodeServerBaseUrl: 'http://localhost:4200',
    nodeServerPath: 'pamf',
    redirection: {
        "landing-page": function (req) {
            let ret = "";
            let contact_type = req.query["contact_type"];
            let code = req.query["code"];
            let email = req.query["email"];
            if (code == 'hip') {
                ret = "hipLanding?c14=10/11/2017";
            } else if (code == 'knee') {
                ret = "kneeLanding?c14=10/12/2017"
            } else if(code == 'col'){
                ret = "collaborate?c14=10/12/2017"
            }else if(code == 'promis'){
                ret = "promisPart1?c14=10/12/2017"
            }else if(code == 'thankYouHip'){
                ret = "thankYouHip?c14=10/12/2017"
            }else if(code == 'thankYouKnee'){
                ret = "thankYouKnee?c14=10/12/2017"
            }else if(code == 'unsubscribe'){
                ret = "unsubscribe?c14=10/12/2017"
            }else if(code == 'unsubscribeThankYou'){
                ret = "unsubscribeThankYou?c14=10/12/2017"
            }else if(code == 'ineligible'){
                ret = "ineligible?c14=10/12/2017"
            }            
            else {
                ret = "incorrectTjr";
            }
            return (ret);
        },
        "login": "letterLanding",
        "load-questionnaire": "hipIntro",
        "opt-out": "letterLanding",
        "load-questionnaire-knee":"kneeIntro",
    }
};
exports.pamfOptions = pamfOptions;