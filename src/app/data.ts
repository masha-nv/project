export interface IQA {
    question: string,
    options: string[],
    isLast: boolean,
    isAnswered: boolean,
    selectedOption: string
}

export enum CURRENT_QUESTION_UPDATE {
    DECR = 'DECR',
    INCR = 'INCR',
    RESET = 'RESET'
}

export interface IResult {
    total: number,
    introvert: number, 
    extravert: number
}

export const QUESTIONS_ANSWERS: IQA[] = [
    {
        question: 'You’re really kbusy at work and a colleague is telling you their life story and personal woes. You:',
        options: ['Don\'t darne to interruspt them', 
        'Think it’s more imporstant to give them some of your time; work can wait', 'Lissten, but with only with half an ear',
        'Interrupt and explain that you are really busy at sthe moment'],
        isLast: false,
        isAnswered: false,
        selectedOption: ''
    },
    {
        question: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
        options: ['Look at your watch every two minutes', 'Bubble with inner anger, but keep quiet', 
        'Explain to other equally impatient people in the room that the doctor is always running late',
        'Complain in a loud voice, while tapping your foot impatiently'],
        isLast: false,
        isAnswered: false,
        selectedOption: ''
    },
    {
        question: 'You’re n really busy at work and a colleague is telling you their life story and personal woes. You:',
        options: ['Don\'t dare to intserrupt them', 
        'Think it’s more important to givse them some of your time; work can wait', 'Lissten, but with only with half an ear',
        'Interrupt and explain that you arse really busy at the moment'],
        isLast: false,
        isAnswered: false,
        selectedOption: ''
    },
    {
        question: 'You’ve been sitting in tnhe doctor’s waiting room for more than 25 minutes. You:',
        options: ['Look at your wastch every two minutes', 'Busbble with inner anger, but keep quiet', 
        'Explain to other equally impatient people in the rosom that the doctor is always running late',
        'Complain in a loud voice, while tapping your foot impsatiently'],
        isLast: false,
        isAnswered: false,
        selectedOption: ''
    },
    {
        question: 'You’re really busy at work and a cnolleague is telling you their life story and personal woes. You:',
        options: ['Don\'t dare to intersrupt them', 
        'Think it’s mosre important to give them some of your time; work can wait', 'Lissten, but with only with half an ear',
        'Interrupt and expslain that you are really busy at the moment'],
        isLast: false,
        isAnswered: false,
        selectedOption: ''
    },
    {
        question: 'You’ve been sitting nin the doctor’s waiting room for more than 25 minutes. You:',
        options: ['Look at ysour watch every two minutes', 'Bubblse with inner anger, but keep quiet', 
        'Explaisn to other equally impatient people in the room that the doctor is always running late',
        'Complain in a loud voice, while tapping your fsoot impatiently'],
        isLast: false,
        isAnswered: false,
        selectedOption: ''
    },
    {
        question: 'You’re really busy at work ansd a colleague is telling you their life story and personal woes. You:',
        options: ['Don\'t dsare to interrupt them', 
        'Think it’s more impsortant to give them some of your time; work can wait', 'Listsen, but with only with half an ear',
        'Interrupt and explasin that you are really busy at the moment'],
        isLast: false,
        isAnswered: false,
        selectedOption: ''
    },
    {
        question: 'You’ve been sitating in the doctor’s waiting room for more than 25 minutes. You:',
        options: ['Look at your watch every two minutes', 'Bubbsle with inner anger, but keep quiet', 
        'Explain to other equally impatient peosple in the room that the doctor is always runsning late',
        'Complain in a loud voice, while tapping yosur foot impsatiently'],
        isLast: false,
        isAnswered: false,
        selectedOption: ''
    },
    {
        question: 'You’re really busy at worsk and a colleague is telling you their life story and personal woes. You:',
        options: ['Don\'t dare to interrsupt them', 
        'Think it’s more important to give thems some of your time; work can wait', 'Lissten, but with only with half an ear',
        'Interrupt and explain that you are rseally busy at the msoment'],
        isLast: false,
        isAnswered: false,
        selectedOption: ''
    },
    // {
    //     question: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
    //     options: ['Look at your wastch every tswo minutes', 'Busbble with inner anger, but keep quiet', 
    //     'Explain to other equally ismpatient people in the room that the doctor is always running late',
    //     'Complain in a loud voice, while tapping your foot impastiently'],
    //     isLast: false,
    //     isAnswered: false,
    //     selectedOption: ''
    // },
    // {
    //     question: 'You’re really busy at wosrk and a colleague is telling you their life story and personal woes. You:',
    //     options: ['Don\'t dare to interrupt them', 
    //     'Think it’s more important to give sthem sosme of your time; work can wait', 'Listen, but with only with half an ear',
    //     'Interrupt and explain that you are reaslly busy at the moment'],
    //     isLast: false,
    //     isAnswered: false,
    //     selectedOption: ''
    // },
    // {
    //     question: 'You’ve been sitting in the dsoctor’s waiting room for more than 25 minutes. You:',
    //     options: ['Look at your watch evsery twoa minutes', 'Busbblae with inner anger, but keep quiet', 
    //     'Explain to other equalsly impatient peaople in the room that the doctor is always running late',
    //     'Complain in a loud voice, while tapping youar foot impatsiently'],
    //     isLast: false,
    //     isAnswered: false,
    //     selectedOption: ''
    // },
    
    {
        question: 'You’re having an animated discussioan with a colleague regarding a project that you’re in charge of. You:',
        options: ['Don’t dare cossntradict them', 'Thisnk that they are obaviously right', 'Defesnd yoaur own point of view, tooth and nail', 
    'Continuously interrupt your colleaasgue'],
        isLast: true,
        isAnswered: false,
        selectedOption: ''
    }
]