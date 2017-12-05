export const hipQuestions = {
    "code": "", // c1 from query parameter
    "bundle": "", // c2 from query parameter
    "surgery_type": "", // c3 from query parameter
    "channel": "", // c4 from query parameter
    "qx_name": "HOOS", // from browser user agent
    "qx_id": "358", //hard-coded to this value
    "qx_vendor": "newpro", // hard-coded
    "qx_os": "", // from browser user agent
    "qx_browser": "", // from browser user agent
    "qx_device": "", // from browser user agent
    "qx_ip_address": "", // from browser user agent
    "qx_started_at": "", // if c14 from query parameter is passed, then this should be the c14 value
    "qx_accessed_at": "", // if c14 from query parameter is passed, then this should be the c14 value
    "qx_accessed_by": "",//c11 from query parameter
    "qx_completed_at": "", // if c14 from query parameter is passed, then this should be the c14 value
    "qx_status": "COMPLETED",
    "qx_instance_id": "", // this will be set at server side, unique identifier
    "qx_raw_score": "",// this will be set at server side, calculated programmatically
    "qx_response": "",// this will be set at server side, this whole JSON as string
    "qx_score": "",// this will be set at server side, calculated programmatically
    "qx_score_type": "",// this will be set at server side, hard-coded to "HOOS"

    "responses": [
        {
            "qx_code": "DV_Q1_1",
            "qx_text": "Going up or down stairs",
            "answer_options": [
                "None",
                "Mild",
                "Moderate",
                "Severe",
                "Extreme"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Moderate"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "What amount of hip pain have you experienced the last week during the following activities?",
            "section": "PAIN"
        },
        {
            "qx_code": "DV_Q1_2",
            "qx_text": "Walking on an uneven surface",
            "answer_options": [
                "None",
                "Mild",
                "Moderate",
                "Severe",
                "Extreme"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Moderate"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "What amount of hip pain have you experienced the last week during the following activities?",
            "section": "PAIN"
        },
        {
            "qx_code": "DV_Q2_1",
            "qx_text": "Rising from sitting",
            "answer_options": [
                "None",
                "Mild",
                "Moderate",
                "Severe",
                "Extreme"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Moderate"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "The following questions concern your physical function. By this we mean your ability to move around and to look after yourself. For each of the following activities please indicate the degree of difficulty you have experienced in the last week due to your hip.",
            "section": "PHYSICAL FUNCTION"
        },
        {
            "qx_code": "DV_Q2_2",
            "qx_text": "Bending to floor/pick up an object",
            "answer_options": [
                "None",
                "Mild",
                "Moderate",
                "Severe",
                "Extreme"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Moderate"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "The following questions concern your physical function. By this we mean your ability to move around and to look after yourself. For each of the following activities please indicate the degree of difficulty you have experienced in the last week due to your hip.",
            "section": "PHYSICAL FUNCTION"
        },
        {
            "qx_code": "DV_Q2_3",
            "qx_text": "Lying in bed (turning over, maintaining hip position)",
            "answer_options": [
                "None",
                "Mild",
                "Moderate",
                "Severe",
                "Extreme"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Moderate"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "The following questions concern your physical function. By this we mean your ability to move around and to look after yourself. For each of the following activities please indicate the degree of difficulty you have experienced in the last week due to your hip.",
            "section": "PHYSICAL FUNCTION"
        },
        {
            "qx_code": "DV_Q2_4",
            "qx_text": "Sitting",
            "answer_options": [
                "None",
                "Mild",
                "Moderate",
                "Severe",
                "Extreme"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Moderate"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "The following questions concern your physical function. By this we mean your ability to move around and to look after yourself. For each of the following activities please indicate the degree of difficulty you have experienced in the last week due to your hip.",
            "section": "PHYSICAL FUNCTION"
        }
    ]
};

export const kneeQuestions = {
    "code": "", // c1 from query parameter
    "bundle": "", // c2 from query parameter
    "surgery_type": "", // c3 from query parameter
    "channel": "", // c4 from query parameter
    "qx_name": "KOOS", // from browser user agent
    "qx_id": "357", //hard-coded to this value
    "qx_vendor": "newpro", // hard-coded
    "qx_os": "", // from browser user agent
    "qx_browser": "", // from browser user agent
    "qx_device": "", // from browser user agent
    "qx_ip_address": "", // from browser user agent
    "qx_started_at": "", // if c14 from query parameter is passed, then this should be the c14 value
    "qx_accessed_at": "", // if c14 from query parameter is passed, then this should be the c14 value
    "qx_accessed_by": "",
    "qx_completed_at": "", // if c14 from query parameter is passed, then this should be the c14 value
    "qx_status": "COMPLETED",
    "qx_instance_id": "", // this will be set at server side, unique identifier
    "qx_raw_score": "", // this will be set at server side, calculated programmatically
    "qx_response": "",// this will be set at server side, this whole JSON as string
    "qx_score": "",// this will be set at server side, calculated programmatically
    "qx_score_type": "", // this will be set at server side, hard-coded to "KOOS"

    "responses": [
        {
            "qx_code": "DV_Q1",
            "qx_text": "How severe is your knee stiffness after first wakening in the morning? ",
            "answer_options": [
                "None",
                "Mild",
                "Moderate",
                "Severe",
                "Extreme"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Moderate"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "The following question concerns the amount of joint stiffness you have experienced during the last week in your knee. Stiffness is a sensation of restriction or slowness in the ease with which you move your knee joint.",
            "section": "STIFFNESS"
        },
        {
            "qx_code": "DV_Q2_1",
            "qx_text": "Twisting/pivoting on your knee",
            "answer_options": [
                "None",
                "Mild",
                "Moderate",
                "Severe",
                "Extreme"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Moderate"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "What amount of knee pain have you experienced the last week during the following activities?",
            "section": "PAIN"
        },
        {
            "qx_code": "DV_Q2_2",
            "qx_text": "Straightening knee fully",
            "answer_options": [
                "None",
                "Mild",
                "Moderate",
                "Severe",
                "Extreme"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Moderate"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "What amount of knee pain have you experienced the last week during the following activities?",
            "section": "PAIN"
        },
        {
            "qx_code": "DV_Q2_3",
            "qx_text": "Going up or down stairs",
            "answer_options": [
                "None",
                "Mild",
                "Moderate",
                "Severe",
                "Extreme"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Moderate"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "What amount of knee pain have you experienced the last week during the following activities?",
            "section": "PAIN"
        },
        {
            "qx_code": "DV_Q2_4",
            "qx_text": "Standing upright",
            "answer_options": [
                "None",
                "Mild",
                "Moderate",
                "Severe",
                "Extreme"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Moderate"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "What amount of knee pain have you experienced the last week during the following activities?",
            "section": "PAIN"
        },
        {
            "qx_code": "DV_Q3_1",
            "qx_text": "Rising from sitting",
            "answer_options": [
                "None",
                "Mild",
                "Moderate",
                "Severe",
                "Extreme"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Moderate"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "The following questions concern your physical function. By this we mean your ability to move around and to look after yourself. For each of the following activities please indicate the degree of difficulty you have experienced in the last week due to your knee.",
            "section": "FUNCTION, DAILY LIVING"
        },
        {
            "qx_code": "DV_Q3_2",
            "qx_text": "Bending to floor/pick up an object",
            "answer_options": [
                "None",
                "Mild",
                "Moderate",
                "Severe",
                "Extreme"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Moderate"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "The following questions concern your physical function. By this we mean your ability to move around and to look after yourself. For each of the following activities please indicate the degree of difficulty you have experienced in the last week due to your knee.",
            "section": "FUNCTION, DAILY LIVING"
        }
    ]
};

export const promisQuestions = {
    "code": "", // c1 from query parameter
    "bundle": "", // c2 from query parameter
    "surgery_type": "", // c3 from query parameter
    "channel": "", // c4 from query parameter
    "qx_name": "PROMIS", // from browser user agent
    "qx_id": "356", //hard-coded to this value
    "qx_vendor": "newpro", // hard-coded
    "qx_os": "", // from browser user agent
    "qx_browser": "", // from browser user agent
    "qx_device": "", // from browser user agent
    "qx_ip_address": "", // from browser user agent
    "qx_started_at": "", // if c14 from query parameter is passed, then this should be the c14 value
    "qx_accessed_at": "", //same as qx_started_at if c14 from query parameter is passed, then this should be the c14 value
    "qx_accessed_by": "",
    "qx_completed_at": "", // if c14 from query parameter is passed, then this should be the c14 value
    "qx_status": "COMPLETED",
    "qx_instance_id": "",// this will be set at server side, unique identifier
    "qx_mental_raw_score": "", // this will be set at server side, calculated programmatically
    "qx_mental_se_score": "",// this will be set at server side, calculated programmatically
    "qx_mental_t_score": "",// this will be set at server side, calculated programmatically
    "qx_physical_raw_score": "", // this will be set at server side, calculated programmatically
    "qx_physical_se_score": "",// this will be set at server side, calculated programmatically
    "qx_physical_t_score": "",// this will be set at server side, calculated programmatically
    "qx_response": "",// this will be set at server side, this whole JSON as string
    "qx_score": "",// this will be set at server side, calculated programmatically
    "qx_score_type": "",// this will be set at server side, hard-coded to "PROMIS"

    "responses": [
        {
            "qx_code": "DV_Q1_1",
            "qx_text": "In general, would you say your health is:",
            "answer_options": [
                "Excellent",
                "Very good",
                "Good",
                "Fair",
                "Poor"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Good"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "Please respond to each item by marking one box per row.",
            "section": "PROMIS - Global Health"
        },
        {
            "qx_code": "DV_Q1_2",
            "qx_text": "In general, would you say your quality of life is:",
            "answer_options": [
                "Excellent",
                "Very good",
                "Good",
                "Fair",
                "Poor"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Good"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "Please respond to each item by marking one box per row.",
            "section": "PROMIS - Global Health"
        },
        {
            "qx_code": "DV_Q1_3",
            "qx_text": "In general, how would you rate your physical health?",
            "answer_options": [
                "Excellent",
                "Very good",
                "Good",
                "Fair",
                "Poor"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Good"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "Please respond to each item by marking one box per row.",
            "section": "PROMIS - Global Health"
        },
        {
            "qx_code": "DV_Q1_4",
            "qx_text": "In general, how would you rate your mental health, including your mood and your ability to think?",
            "answer_options": [
                "Excellent",
                "Very good",
                "Good",
                "Fair",
                "Poor"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Good"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "Please respond to each item by marking one box per row.",
            "section": "PROMIS - Global Health"
        },
        {
            "qx_code": "DV_Q1_5",
            "qx_text": "In general, how would you rate your satisfaction with your social activities and relationships?",
            "answer_options": [
                "Excellent",
                "Very good",
                "Good",
                "Fair",
                "Poor"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Good"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "Please respond to each item by marking one box per row.",
            "section": "PROMIS - Global Health"
        },
        {
            "qx_code": "DV_Q1_6",
            "qx_text": "In general, please rate how well you carry out your usual social activities and roles. (This includes activities at home, at work and in your community, and responsibilities as a parent, child, spouse, employee, friend, etc.)",
            "answer_options": [
                "Excellent",
                "Very good",
                "Good",
                "Fair",
                "Poor"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Good"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "Please respond to each item by marking one box per row.",
            "section": "PROMIS - Global Health"
        },
        {
            "qx_code": "DV_Q2",
            "qx_text": "To what extent are you able to carry out your everyday physical activities such as walking, climbing stairs, carrying groceries, or moving a chair?",
            "answer_options": [
                "Completely",
                "Mostly",
                "Moderately",
                "A little",
                "Not at all"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Moderately"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "Please respond to each item by marking one box per row.",
            "section": ""
        },
        {
            "qx_code": "DV_Q3",
            "qx_text": "How often have you been bothered by emotional problems such as feeling anxious, depressed or irritable?",
            "answer_options": [
                "Never",
                "Rarely",
                "Sometimes",
                "Often",
                "Always"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "Sometimes"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "In the past seven days...",
            "section": ""
        },
        {
            "qx_code": "DV_Q4",
            "qx_text": "How would you rate your fatigue on average?",
            "answer_options": [
                "None",
                "Mild",
                "Moderate",
                "Severe",
                "Very Severe"
            ],
            "answer_options_score": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "answer_text": [
                "MOderate"
            ],
            "answer_text_score": [
                "3"
            ],
            "qx_global_text": "In the past seven days...",
            "section": ""
        },
        {
            "qx_code": "DV_Q5",
            "qx_text": "",
            "answer_options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
            ],
            "answer_options_score": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
            ],
            "answer_text": [
                "5"
            ],
            "answer_text_score": [
                "5"
            ],
            "qx_global_text": "How would you rate your pain on average?",
            "section": "PAIN"
        }
    ]
};

export const collaborate = {
    "code": "", // c1 from query parameter
    "bundle": "", // c2 from query parameter
    "surgery_type": "", // c3 from query parameter
    "channel": "", // c4 from query parameter
    "qx_name": "COLLABORATE", // from browser user agent
    "qx_id": "356", //hard-coded to this value
    "qx_vendor": "newpro", // hard-coded
    "qx_os": "", // from browser user agent
    "qx_browser": "", // from browser user agent
    "qx_device": "", // from browser user agent
    "qx_ip_address": "", // from browser user agent
    "qx_started_at": "", // if c14 from query parameter is passed, then this should be the c14 value
    "qx_accessed_at": "", // if c14 from query parameter is passed, then this should be the c14 value
    "qx_accessed_by": "",
    "qx_completed_at": "", // if c14 from query parameter is passed, then this should be the c14 value
    "qx_status": "COMPLETED",
    "qx_instance_id": "",// this will be set at server side, unique identifier
    "qx_raw_score": "",// this will be set at server side, calculated programmatically
    "qx_response": "",// this will be set at server side, this whole JSON as string
    "qx_score": "",// this will be set at server side, calculated programmatically
    "qx_score_type": "",// this will be set at server side, hard-coded to "COLLABORATE"

    "responses": [
        {
            "qx_code": "DV_Q1_1",
            "qx_text": "",
            "answer_options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"
            ],
            "answer_options_score": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"
            ],
            "answer_text": [
                "5"
            ],
            "answer_text_score": [
                "5"
            ],
            "qx_global_text": "How much effort was made to help you understand your health issues?",
            "section": "Thinking about the visit you had with your health care provider today …"
        },
        {
            "qx_code": "DV_Q1_2",
            "qx_text": "",
            "answer_options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"
            ],
            "answer_options_score": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"
            ],
            "answer_text": [
                "5"
            ],
            "answer_text_score": [
                "5"
            ],
            "qx_global_text": "How much effort was made to listen to the things that matter most to you about your health issues?",
            "section": "Thinking about the visit you had with your health care provider today …"
        },
        {
            "qx_code": "DV_Q1_3",
            "qx_text": "",
            "answer_options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"
            ],
            "answer_options_score": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"
            ],
            "answer_text": [
                "5"
            ],
            "answer_text_score": [
                "5"
            ],
            "qx_global_text": "How much effort was made to include what matters most to you in choosing what to do next?",
            "section": "Thinking about the visit you had with your health care provider today …"
        }
    ]
};

