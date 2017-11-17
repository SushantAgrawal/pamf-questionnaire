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
            }
            else {
                ret = "incorrectTjr";
            }
            return (ret);
        },
        "login": "letterLanding",
        "load-questionnaire": "hipIntro",
        "opt-out": "letterLanding"
    }
};
exports.pamfOptions = pamfOptions;