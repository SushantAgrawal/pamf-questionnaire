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
                ret = "hipLanding?c1=10695&c2=pre_op&c3=LEFT_HIP&c4=clinic&c5=Johnson&c6=Sutter&c7=John%20V.%20Lannin,%20M.D.&c8=http://dcdlrhr901:8989/pamf-proms-orchestrator/api/external/provider-pic/3096&c9=Orthopedic%20Surgeon&c10=http://dcdlrhr901:8989/pamf-proms-orchestrator/api/external/provider-sig/3096&c11=patient&c12=Left%20Hip&c13=PRE-OP";
            } else if (code == 'knee') {
                ret = "kneeLanding?c1=10695&c2=pre_op&c3=LEFT_HIP&c4=clinic&c5=Johnson&c6=Sutter&c7=John%20V.%20Lannin,%20M.D.&c8=http://dcdlrhr901:8989/pamf-proms-orchestrator/api/external/provider-pic/3096&c9=Orthopedic%20Surgeon&c10=http://dcdlrhr901:8989/pamf-proms-orchestrator/api/external/provider-sig/3096&c11=patient&c12=Left%20Hip&c13=PRE-OP"
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