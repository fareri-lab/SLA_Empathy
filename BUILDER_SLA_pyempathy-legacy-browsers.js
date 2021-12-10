/****************************** 
 * Builder_Sla_Pyempathy Test *
 ******************************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'BUILDER_SLA_pyempathy';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'version': '1', 'session': '001', 'friend': '', 'other': ''};

// Start code blocks for 'Before Experiment'
intromsg1 = "In this experiment, you are going to make a series of monetary decisions. \n\nYou will have $24 to start with in this experiment.\n\n  You will have the opportunity to add to this amount based on your decisions.  Press 'space' to continue.";
intromsg2 = "On all trials of the experiment, you will be deciding between: \n\n(1) a  50% monetary gamble\n\n OR:\n\n(2) an 100% (i.e. guaranteed) monetary option.\n\n\nOn most trials, you will be presented with a choice between a 50% chance of winning or losing money and a 100% chance of gaining nothing ($0). \n\n\nOn some trials, the choice will be between a 50% chance of gaining money or gaining $0 and a 100% chance of gaining a different monetary amount.  \n\n\nPress 'space' to continue.";
intromsg3 = "You will be making three sets of choices throughout the course of the experiment, with a different allotment of $24 each time.  \n\n Some of your choices will affect only you, others will affect someone else.\n\n You will press the \u20181\u2019 key to choose the gamble or the \u20182\u2019 key to choose the guaranteed option, given the amounts shown. \n\n\n Please press \u2018space\u2019 to watch a short demonstration of what each trial will look like. ";
extoptext = "$2.00";
exbottomtext = "-$3.00";
excertain = "$1.00";
exampletext1 = "So, if you choose the option on the left, \nyou will have a 50% chance of gaining ($2) \nand a 50% chance of losing (-$3),\nout of your allotted $24.";
exampletext2 = "If you choose the option on the right, \n you have a 100% chance (or a guarantee)  \n of gaining the given amount.\n In this case, if chosen, you would gain a guaranteed $1.";
selfstarttext = "You have completed the practice trials. \n For the first task, you will be making choices only for yourself. \n You have $24 to use in this task. \n You will have the opportunity to add to this amount based on your decisions.There will be short breaks built into the tasks that will allow you to proceed by pressing the \u2018space\u2019 bar. \n Your decisions and outcomes will affect only you. \n\n Press \u2018space\u2019 to begin";

/* Syntax Error: Fix Python code */
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Instructions1RoutineBegin());
flowScheduler.add(Instructions1RoutineEachFrame());
flowScheduler.add(Instructions1RoutineEnd());
flowScheduler.add(Instructions2RoutineBegin());
flowScheduler.add(Instructions2RoutineEachFrame());
flowScheduler.add(Instructions2RoutineEnd());
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const RepeatExampleLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RepeatExampleLoopLoopBegin, RepeatExampleLoopLoopScheduler);
flowScheduler.add(RepeatExampleLoopLoopScheduler);
flowScheduler.add(RepeatExampleLoopLoopEnd);
flowScheduler.add(Pre_PracticeRoutineBegin());
flowScheduler.add(Pre_PracticeRoutineEachFrame());
flowScheduler.add(Pre_PracticeRoutineEnd());
const Practice_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Practice_trialsLoopBegin, Practice_trialsLoopScheduler);
flowScheduler.add(Practice_trialsLoopScheduler);
flowScheduler.add(Practice_trialsLoopEnd);
flowScheduler.add(Self_StartRoutineBegin());
flowScheduler.add(Self_StartRoutineEachFrame());
flowScheduler.add(Self_StartRoutineEnd());
const Self_TaskLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Self_TaskLoopLoopBegin, Self_TaskLoopLoopScheduler);
flowScheduler.add(Self_TaskLoopLoopScheduler);
flowScheduler.add(Self_TaskLoopLoopEnd);
flowScheduler.add(Self_ratingscaleRoutineBegin());
flowScheduler.add(Self_ratingscaleRoutineEachFrame());
flowScheduler.add(Self_ratingscaleRoutineEnd());
flowScheduler.add(VersionInitateRoutineBegin());
flowScheduler.add(VersionInitateRoutineEachFrame());
flowScheduler.add(VersionInitateRoutineEnd());
const RunLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RunLoopLoopBegin, RunLoopLoopScheduler);
flowScheduler.add(RunLoopLoopScheduler);
flowScheduler.add(RunLoopLoopEnd);
flowScheduler.add(thankyouRoutineBegin());
flowScheduler.add(thankyouRoutineEachFrame());
flowScheduler.add(thankyouRoutineEnd());
flowScheduler.add(End_ITIRoutineBegin());
flowScheduler.add(End_ITIRoutineEachFrame());
flowScheduler.add(End_ITIRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Other_SLA_96_BUILDER.csv', 'path': 'Other_SLA_96_BUILDER.csv'},
    {'name': 'SLA_Prac_BUILDER.csv', 'path': 'SLA_Prac_BUILDER.csv'},
    {'name': 'Friend_SLA_96_BUILDER.csv', 'path': 'Friend_SLA_96_BUILDER.csv'},
    {'name': 'Self_SLA_96_BUILDER.csv', 'path': 'Self_SLA_96_BUILDER.csv'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var Instructions1Clock;
var instructions_text1;
var Instructions_keys1;
var Instructions2Clock;
var Instructions_text2;
var Instructions_keys2;
var InstructionsClock;
var Instructions_text4;
var Instructions_keys4;
var ExampleClock;
var Example_topbox;
var Example_bottombox;
var Example_100;
var Example_toptext;
var Example_bottomtext;
var Example_100text;
var Example_instext1;
var Example_instext2;
var Example_instext3;
var Example_cue;
var Example_instext4;
var Example_text5;
var Example_text6;
var Example_text7;
var dem_continue;
var Pre_PracticeClock;
var Pre_Practice_text;
var Pre_Practice_keys;
var PracticeClock;
var Practice_topbox;
var Practice_bottombox;
var Practice_100;
var Practice_toptext;
var Practice_bottomtext;
var Practice_100text;
var Practice_cue;
var Practice_keyboard;
var outcomeMsg;
var Practice_CrossClock;
var Practice_Fix;
var Practice_OutcomeClock;
var Outcome_Text;
var Self_StartClock;
var Self_Start_Text;
var Self_Start_keys;
var Self_TaskClock;
var Self_topbox;
var Self_bottombox;
var Self_100;
var Self_toptext;
var Self_bottomtext;
var Self_100text;
var Self_cue;
var Self_keyboard;
var Self_outcomeMsg;
var Self_ISIClock;
var trial_durations;
var trial_counter;
var ISI_self;
var Self_OutcomeClock;
var Self_Outcome_Text;
var Self_ITIClock;
var ITI_self;
var timingClock;
var SelfblockClock;
var Self_BlockText;
var Self_blockkeyboard;
var Self_ratingscaleClock;
var Self_slider_button_text;
var Self_SliderText;
var Self_slider;
var key_resp;
var VersionInitateClock;
var friendstart;
var otherstart;
var Friend_StartClock;
var friendsname;
var friendMsg;
var Friend_Start_Text;
var Friend_Start_keys;
var Friend_TaskClock;
var Friend_topbox;
var Friend_bottombox;
var Friend_100;
var Friend_toptext;
var Friend_bottomtext;
var Friend_100text;
var Friend_cue;
var Friend_keyboard;
var Friend_outcomeMsg;
var Friend_ISIClock;
var ISI_friend;
var Friend_OutcomeClock;
var Friend_Outcome_Text;
var Friend_ITIClock;
var ITI_friend;
var FriendblockClock;
var Friend_BlockText;
var Friend_blockkeyboard;
var Friend_ratingscaleClock;
var friendsliderMsg;
var Friend_Scale_Text;
var Friend_slider;
var Friend_slider_button_text;
var Other_StartClock;
var othername;
var otherMsg;
var Other_Start_Text;
var Other_Start_keys;
var Other_TaskClock;
var Other_topbox;
var Other_bottombox;
var Other_100;
var Other_toptext;
var Other_bottomtext;
var Other_100text;
var Other_cue;
var Other_keyboard;
var Other_outcomeMsg;
var Other_ISIClock;
var ISI_other;
var Other_OutcomeClock;
var Outcome_Text_;
var Other_ITIClock;
var ITI_other;
var OtherblockClock;
var Other_BlockText;
var Other_blockkeyboard;
var Other_ratingscaleClock;
var Other_Scale_Text;
var Other_slider_button_text;
var Other_slider;
var othersliderMsg;
var key_resp_2;
var V2_2Clock;
var thankyouClock;
var thankyou_text;
var thankyou_key;
var End_ITIClock;
var ITI_end;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instructions1"
  Instructions1Clock = new util.Clock();
  instructions_text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_text1',
    text: intromsg1,
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instructions_keys1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions2"
  Instructions2Clock = new util.Clock();
  Instructions_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions_text2',
    text: intromsg2,
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instructions_keys2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  Instructions_text4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions_text4',
    text: intromsg3,
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.029,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instructions_keys4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Example"
  ExampleClock = new util.Clock();
  Example_topbox = new visual.Rect ({
    win: psychoJS.window, name: 'Example_topbox', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [(- 0.5), 0.2],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  Example_bottombox = new visual.Rect ({
    win: psychoJS.window, name: 'Example_bottombox', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [(- 0.5), (- 0.2)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Example_100 = new visual.Rect ({
    win: psychoJS.window, name: 'Example_100', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [0.5, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  Example_toptext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_toptext',
    text: extoptext,
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Example_bottomtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_bottomtext',
    text: exbottomtext,
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  Example_100text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_100text',
    text: excertain,
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Example_instext1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_instext1',
    text: 'For each trial, you will be making a choice between a 50/50 gamble or a 100% guaranteed amount, given the amounts displayed.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  Example_instext2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_instext2',
    text: exampletext1,
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0.4], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -7.0 
  });
  
  Example_instext3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_instext3',
    text: exampletext2,
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.4], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -8.0 
  });
  
  Example_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_cue',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -9.0 
  });
  
  Example_instext4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_instext4',
    text: 'You will be cued to indicate \nyour answer with a "?" in the center\nYou will have 2 seconds to respond.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -10.0 
  });
  
  Example_text5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_text5',
    text: 'When cued:\n\nPress the ‘1’ key to choose the gamble on the left.\n\nPress the ‘2’ key to choose the guaranteed option on the right.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.017,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -11.0 
  });
  
  Example_text6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_text6',
    text: 'After you make your choice, there will be a very short delay and then you will be shown the outcome of your choice. \n\nIf you accepted the gamble, you will see whether you won or lost the associated amount.\n\nIf you chose the guaranteed amount, you will see confirmation of your choice with the associated amount. \n\nIf you fail to respond within 2 seconds, a “#” will be displayed instead, indicating that no response was recorded— so please be sure to respond quickly!\n\nFollowing this, you will see a short fixation and then the next trial will begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -12.0 
  });
  
  Example_text7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_text7',
    text: 'Press ‘1’ to continue to the experiment\nPress ‘2’ to watch this demonstration again',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -13.0 
  });
  
  dem_continue = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Practice"
  Pre_PracticeClock = new util.Clock();
  Pre_Practice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pre_Practice_text',
    text: 'Let’s start with some practice trials so you get used to the timing of the trials and have a chance to practice responding. \n\nPress ‘space’ to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Pre_Practice_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Practice"
  PracticeClock = new util.Clock();
  Practice_topbox = new visual.Rect ({
    win: psychoJS.window, name: 'Practice_topbox', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [(- 0.5), 0.2],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  Practice_bottombox = new visual.Rect ({
    win: psychoJS.window, name: 'Practice_bottombox', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [(- 0.5), (- 0.2)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Practice_100 = new visual.Rect ({
    win: psychoJS.window, name: 'Practice_100', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [0.5, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  Practice_toptext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Practice_toptext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Practice_bottomtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Practice_bottomtext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  Practice_100text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Practice_100text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Practice_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'Practice_cue',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -6.0 
  });
  
  Practice_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  outcomeMsg = " ";
  
  // Initialize components for Routine "Practice_Cross"
  Practice_CrossClock = new util.Clock();
  Practice_Fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'Practice_Fix',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Practice_Outcome"
  Practice_OutcomeClock = new util.Clock();
  Outcome_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Outcome_Text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Practice_Cross"
  Practice_CrossClock = new util.Clock();
  Practice_Fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'Practice_Fix',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Self_Start"
  Self_StartClock = new util.Clock();
  Self_Start_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Self_Start_Text',
    text: selfstarttext,
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Self_Start_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Self_Task"
  Self_TaskClock = new util.Clock();
  Self_topbox = new visual.Rect ({
    win: psychoJS.window, name: 'Self_topbox', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [(- 0.5), 0.2],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Self_bottombox = new visual.Rect ({
    win: psychoJS.window, name: 'Self_bottombox', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [(- 0.5), (- 0.2)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  Self_100 = new visual.Rect ({
    win: psychoJS.window, name: 'Self_100', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [0.5, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  Self_toptext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Self_toptext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  Self_bottomtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Self_bottomtext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Self_100text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Self_100text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  Self_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'Self_cue',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -7.0 
  });
  
  Self_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Self_outcomeMsg = "#";
  
  // Initialize components for Routine "Self_ISI"
  Self_ISIClock = new util.Clock();
  trial_durations = 0;
  trial_counter = 0;
  
  ISI_self = new visual.TextStim({
    win: psychoJS.window,
    name: 'ISI_self',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Self_Outcome"
  Self_OutcomeClock = new util.Clock();
  Self_Outcome_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Self_Outcome_Text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Self_ITI"
  Self_ITIClock = new util.Clock();
  ITI_self = new visual.TextStim({
    win: psychoJS.window,
    name: 'ITI_self',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "timing"
  timingClock = new util.Clock();
  // Initialize components for Routine "Selfblock"
  SelfblockClock = new util.Clock();
  Self_BlockText = new visual.TextStim({
    win: psychoJS.window,
    name: 'Self_BlockText',
    text: 'Good job!\n\nPress the space bar once you’re ready to continue to the rest of the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Self_blockkeyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Self_ratingscale"
  Self_ratingscaleClock = new util.Clock();
  Self_slider_button_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Self_slider_button_text',
    text: 'Press the spacebar to submit',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Self_SliderText = new visual.TextStim({
    win: psychoJS.window,
    name: 'Self_SliderText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Self_slider = new visual.Slider({
    win: psychoJS.window, name: 'Self_slider',
    size: [1.0, 0.06], pos: [0, (- 0.06)], units: 'height',
    labels: [(- 2), (- 1), 0, 1, 2], ticks: [(- 2), (- 1), 0, 1, 2],
    granularity: 0, style: ['RATING'],
    color: new util.Color('white'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "VersionInitate"
  VersionInitateClock = new util.Clock();
  friendstart = 0;
  otherstart = 0;
  
  // Initialize components for Routine "Friend_Start"
  Friend_StartClock = new util.Clock();
  friendsname = expInfo["friend"];
  friendMsg = `For the next part of the task, suppose that your friend ${friendsname} is in desperate need of money to pay off his/her credit card bills.
  
  
  In the following task, you will be making choices for ${friendsname}. You will have $24 to use in this task.
  
  You will have the opportunity to add to this amount based on your decisions. The outcomes of each of your decisions will affect your friend, ${friendsname}.
  
  
  Press ‘space’ to continue.`
  ;
  
  Friend_Start_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Friend_Start_Text',
    text: friendMsg,
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Friend_Start_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Friend_Task"
  Friend_TaskClock = new util.Clock();
  Friend_topbox = new visual.Rect ({
    win: psychoJS.window, name: 'Friend_topbox', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [(- 0.5), 0.2],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  Friend_bottombox = new visual.Rect ({
    win: psychoJS.window, name: 'Friend_bottombox', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [(- 0.5), (- 0.2)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Friend_100 = new visual.Rect ({
    win: psychoJS.window, name: 'Friend_100', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [0.5, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  Friend_toptext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Friend_toptext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Friend_bottomtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Friend_bottomtext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  Friend_100text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Friend_100text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Friend_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'Friend_cue',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -6.0 
  });
  
  Friend_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Friend_outcomeMsg = "#";
  
  // Initialize components for Routine "Friend_ISI"
  Friend_ISIClock = new util.Clock();
  ISI_friend = new visual.TextStim({
    win: psychoJS.window,
    name: 'ISI_friend',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Friend_Outcome"
  Friend_OutcomeClock = new util.Clock();
  Friend_Outcome_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Friend_Outcome_Text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Friend_ITI"
  Friend_ITIClock = new util.Clock();
  ITI_friend = new visual.TextStim({
    win: psychoJS.window,
    name: 'ITI_friend',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Friendblock"
  FriendblockClock = new util.Clock();
  Friend_BlockText = new visual.TextStim({
    win: psychoJS.window,
    name: 'Friend_BlockText',
    text: 'Good job!\n\nPress the space bar once you’re ready to continue to the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Friend_blockkeyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Friend_ratingscale"
  Friend_ratingscaleClock = new util.Clock();
  friendsliderMsg = `How did you feel while making choices for ${friendsname}?`;
  
  Friend_Scale_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Friend_Scale_Text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Friend_slider = new visual.Slider({
    win: psychoJS.window, name: 'Friend_slider',
    size: [1.0, 0.06], pos: [0, (- 0.06)], units: 'height',
    labels: [(- 2), (- 1), 0, 1, 2], ticks: [(- 2), (- 1), 0, 1, 2],
    granularity: 0, style: ['RATING', 'TRIANGLE_MARKER'],
    color: new util.Color('white'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  Friend_slider_button_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Friend_slider_button_text',
    text: 'Press the spacebar to submit',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Other_Start"
  Other_StartClock = new util.Clock();
  othername = expInfo["other"];
  otherMsg = `For the next part of the task, suppose that ${othername} is in desperate need of money to pay off his/her credit card bills.
  
  
  In the following task, you will be making choices for ${othername}.
  
  
  You will have $24 to use in this task.
  
  You will have the opportunity to add to this amount based on your decisions. The outcomes of each of your decisions will affect your friend, ${othername}. Press ‘space’ to continue.`
  ;
  
  Other_Start_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Other_Start_Text',
    text: 'For the third and final part of the task, suppose that you meet a stranger who is in desperate need of money to pay off his/her credit card bills. \n\nIn the following task, you will be making choices for this stranger. \n\nYou will have \\$24 to use in this task. \n\nYou will have the opportunity to add to this amount based on your decisions.\n\nThe outcomes of each of your decisions will affect this stranger. \n\n\nPress ‘space’ to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Other_Start_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Other_Task"
  Other_TaskClock = new util.Clock();
  Other_topbox = new visual.Rect ({
    win: psychoJS.window, name: 'Other_topbox', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [(- 0.5), 0.2],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  Other_bottombox = new visual.Rect ({
    win: psychoJS.window, name: 'Other_bottombox', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [(- 0.5), (- 0.2)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Other_100 = new visual.Rect ({
    win: psychoJS.window, name: 'Other_100', 
    width: [0.5, 0.3][0], height: [0.5, 0.3][1],
    ori: 0, pos: [0.5, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  Other_toptext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Other_toptext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Other_bottomtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Other_bottomtext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  Other_100text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Other_100text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Other_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'Other_cue',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -6.0 
  });
  
  Other_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Other_outcomeMsg = " ";
  
  // Initialize components for Routine "Other_ISI"
  Other_ISIClock = new util.Clock();
  ISI_other = new visual.TextStim({
    win: psychoJS.window,
    name: 'ISI_other',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Other_Outcome"
  Other_OutcomeClock = new util.Clock();
  Outcome_Text_ = new visual.TextStim({
    win: psychoJS.window,
    name: 'Outcome_Text_',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Other_ITI"
  Other_ITIClock = new util.Clock();
  ITI_other = new visual.TextStim({
    win: psychoJS.window,
    name: 'ITI_other',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Otherblock"
  OtherblockClock = new util.Clock();
  Other_BlockText = new visual.TextStim({
    win: psychoJS.window,
    name: 'Other_BlockText',
    text: 'Good job!\n\nPress the space bar once you’re ready to continue to the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Other_blockkeyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Other_ratingscale"
  Other_ratingscaleClock = new util.Clock();
  Other_Scale_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Other_Scale_Text',
    text: 'How did you feel while making choices for a stranger?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Other_slider_button_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Other_slider_button_text',
    text: 'Press the spacebar to submit',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Other_slider = new visual.Slider({
    win: psychoJS.window, name: 'Other_slider',
    size: [1.0, 0.06], pos: [0, (- 0.06)], units: 'height',
    labels: [(- 2), (- 1), 0, 1, 2], ticks: [(- 2), (- 1), 0, 1, 2],
    granularity: 0, style: ['RATING'],
    color: new util.Color('white'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  othersliderMsg = `How did you feel while making choices for ${othername}?`;
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "V2_2"
  V2_2Clock = new util.Clock();
  // Initialize components for Routine "thankyou"
  thankyouClock = new util.Clock();
  thankyou_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thankyou_text',
    text: 'Thank you for participating!\n\nPress ‘space’ to end the task',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  thankyou_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End_ITI"
  End_ITIClock = new util.Clock();
  ITI_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'ITI_end',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _Instructions_keys1_allKeys;
var startexp_clock;
var Instructions1Components;
function Instructions1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions1'-------
    t = 0;
    Instructions1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instructions_keys1.keys = undefined;
    Instructions_keys1.rt = undefined;
    _Instructions_keys1_allKeys = [];
    startexp_clock = globalClock.getTime();
    
    // keep track of which components have finished
    Instructions1Components = [];
    Instructions1Components.push(instructions_text1);
    Instructions1Components.push(Instructions_keys1);
    
    Instructions1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions1'-------
    // get current time
    t = Instructions1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_text1* updates
    if (t >= 0.0 && instructions_text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_text1.tStart = t;  // (not accounting for frame time here)
      instructions_text1.frameNStart = frameN;  // exact frame index
      
      instructions_text1.setAutoDraw(true);
    }

    
    // *Instructions_keys1* updates
    if (t >= 0.0 && Instructions_keys1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_keys1.tStart = t;  // (not accounting for frame time here)
      Instructions_keys1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instructions_keys1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instructions_keys1.start(); }); // start on screen flip
    }

    if (Instructions_keys1.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instructions_keys1.getKeys({keyList: ['space'], waitRelease: false});
      _Instructions_keys1_allKeys = _Instructions_keys1_allKeys.concat(theseKeys);
      if (_Instructions_keys1_allKeys.length > 0) {
        Instructions_keys1.keys = _Instructions_keys1_allKeys[_Instructions_keys1_allKeys.length - 1].name;  // just the last key pressed
        Instructions_keys1.rt = _Instructions_keys1_allKeys[_Instructions_keys1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions1'-------
    Instructions1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    Instructions_keys1.stop();
    // the Routine "Instructions1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instructions_keys2_allKeys;
var Instructions2Components;
function Instructions2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions2'-------
    t = 0;
    Instructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instructions_keys2.keys = undefined;
    Instructions_keys2.rt = undefined;
    _Instructions_keys2_allKeys = [];
    // keep track of which components have finished
    Instructions2Components = [];
    Instructions2Components.push(Instructions_text2);
    Instructions2Components.push(Instructions_keys2);
    
    Instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions2'-------
    // get current time
    t = Instructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instructions_text2* updates
    if (t >= 0.0 && Instructions_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_text2.tStart = t;  // (not accounting for frame time here)
      Instructions_text2.frameNStart = frameN;  // exact frame index
      
      Instructions_text2.setAutoDraw(true);
    }

    
    // *Instructions_keys2* updates
    if (t >= 0.0 && Instructions_keys2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_keys2.tStart = t;  // (not accounting for frame time here)
      Instructions_keys2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instructions_keys2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instructions_keys2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instructions_keys2.clearEvents(); });
    }

    if (Instructions_keys2.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instructions_keys2.getKeys({keyList: ['space'], waitRelease: false});
      _Instructions_keys2_allKeys = _Instructions_keys2_allKeys.concat(theseKeys);
      if (_Instructions_keys2_allKeys.length > 0) {
        Instructions_keys2.keys = _Instructions_keys2_allKeys[_Instructions_keys2_allKeys.length - 1].name;  // just the last key pressed
        Instructions_keys2.rt = _Instructions_keys2_allKeys[_Instructions_keys2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions2'-------
    Instructions2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions_keys2.keys', Instructions_keys2.keys);
    if (typeof Instructions_keys2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instructions_keys2.rt', Instructions_keys2.rt);
        routineTimer.reset();
        }
    
    Instructions_keys2.stop();
    // the Routine "Instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instructions_keys4_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instructions_keys4.keys = undefined;
    Instructions_keys4.rt = undefined;
    _Instructions_keys4_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(Instructions_text4);
    InstructionsComponents.push(Instructions_keys4);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions'-------
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instructions_text4* updates
    if (t >= 0.0 && Instructions_text4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_text4.tStart = t;  // (not accounting for frame time here)
      Instructions_text4.frameNStart = frameN;  // exact frame index
      
      Instructions_text4.setAutoDraw(true);
    }

    
    // *Instructions_keys4* updates
    if (t >= 0.0 && Instructions_keys4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_keys4.tStart = t;  // (not accounting for frame time here)
      Instructions_keys4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instructions_keys4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instructions_keys4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instructions_keys4.clearEvents(); });
    }

    if (Instructions_keys4.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instructions_keys4.getKeys({keyList: ['space'], waitRelease: false});
      _Instructions_keys4_allKeys = _Instructions_keys4_allKeys.concat(theseKeys);
      if (_Instructions_keys4_allKeys.length > 0) {
        Instructions_keys4.keys = _Instructions_keys4_allKeys[_Instructions_keys4_allKeys.length - 1].name;  // just the last key pressed
        Instructions_keys4.rt = _Instructions_keys4_allKeys[_Instructions_keys4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions'-------
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    Instructions_keys4.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var RepeatExampleLoop;
var currentLoop;
function RepeatExampleLoopLoopBegin(RepeatExampleLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  RepeatExampleLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 99, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RepeatExampleLoop'
  });
  psychoJS.experiment.addLoop(RepeatExampleLoop); // add the loop to the experiment
  currentLoop = RepeatExampleLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  RepeatExampleLoop.forEach(function() {
    const snapshot = RepeatExampleLoop.getSnapshot();

    RepeatExampleLoopLoopScheduler.add(importConditions(snapshot));
    RepeatExampleLoopLoopScheduler.add(ExampleRoutineBegin(snapshot));
    RepeatExampleLoopLoopScheduler.add(ExampleRoutineEachFrame(snapshot));
    RepeatExampleLoopLoopScheduler.add(ExampleRoutineEnd(snapshot));
    RepeatExampleLoopLoopScheduler.add(endLoopIteration(RepeatExampleLoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function RepeatExampleLoopLoopEnd() {
  psychoJS.experiment.removeLoop(RepeatExampleLoop);

  return Scheduler.Event.NEXT;
}


var Practice_trials;
function Practice_trialsLoopBegin(Practice_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  Practice_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'SLA_Prac_BUILDER.csv',
    seed: undefined, name: 'Practice_trials'
  });
  psychoJS.experiment.addLoop(Practice_trials); // add the loop to the experiment
  currentLoop = Practice_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  Practice_trials.forEach(function() {
    const snapshot = Practice_trials.getSnapshot();

    Practice_trialsLoopScheduler.add(importConditions(snapshot));
    Practice_trialsLoopScheduler.add(PracticeRoutineBegin(snapshot));
    Practice_trialsLoopScheduler.add(PracticeRoutineEachFrame(snapshot));
    Practice_trialsLoopScheduler.add(PracticeRoutineEnd(snapshot));
    Practice_trialsLoopScheduler.add(Practice_CrossRoutineBegin(snapshot));
    Practice_trialsLoopScheduler.add(Practice_CrossRoutineEachFrame(snapshot));
    Practice_trialsLoopScheduler.add(Practice_CrossRoutineEnd(snapshot));
    Practice_trialsLoopScheduler.add(Practice_OutcomeRoutineBegin(snapshot));
    Practice_trialsLoopScheduler.add(Practice_OutcomeRoutineEachFrame(snapshot));
    Practice_trialsLoopScheduler.add(Practice_OutcomeRoutineEnd(snapshot));
    Practice_trialsLoopScheduler.add(Practice_CrossRoutineBegin(snapshot));
    Practice_trialsLoopScheduler.add(Practice_CrossRoutineEachFrame(snapshot));
    Practice_trialsLoopScheduler.add(Practice_CrossRoutineEnd(snapshot));
    Practice_trialsLoopScheduler.add(endLoopIteration(Practice_trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function Practice_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(Practice_trials);

  return Scheduler.Event.NEXT;
}


var Self_TaskLoop;
function Self_TaskLoopLoopBegin(Self_TaskLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  Self_TaskLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Self_SLA_96_BUILDER.csv',
    seed: undefined, name: 'Self_TaskLoop'
  });
  psychoJS.experiment.addLoop(Self_TaskLoop); // add the loop to the experiment
  currentLoop = Self_TaskLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  Self_TaskLoop.forEach(function() {
    const snapshot = Self_TaskLoop.getSnapshot();

    Self_TaskLoopLoopScheduler.add(importConditions(snapshot));
    Self_TaskLoopLoopScheduler.add(Self_TaskRoutineBegin(snapshot));
    Self_TaskLoopLoopScheduler.add(Self_TaskRoutineEachFrame(snapshot));
    Self_TaskLoopLoopScheduler.add(Self_TaskRoutineEnd(snapshot));
    Self_TaskLoopLoopScheduler.add(Self_ISIRoutineBegin(snapshot));
    Self_TaskLoopLoopScheduler.add(Self_ISIRoutineEachFrame(snapshot));
    Self_TaskLoopLoopScheduler.add(Self_ISIRoutineEnd(snapshot));
    Self_TaskLoopLoopScheduler.add(Self_OutcomeRoutineBegin(snapshot));
    Self_TaskLoopLoopScheduler.add(Self_OutcomeRoutineEachFrame(snapshot));
    Self_TaskLoopLoopScheduler.add(Self_OutcomeRoutineEnd(snapshot));
    Self_TaskLoopLoopScheduler.add(Self_ITIRoutineBegin(snapshot));
    Self_TaskLoopLoopScheduler.add(Self_ITIRoutineEachFrame(snapshot));
    Self_TaskLoopLoopScheduler.add(Self_ITIRoutineEnd(snapshot));
    Self_TaskLoopLoopScheduler.add(timingRoutineBegin(snapshot));
    Self_TaskLoopLoopScheduler.add(timingRoutineEachFrame(snapshot));
    Self_TaskLoopLoopScheduler.add(timingRoutineEnd(snapshot));
    Self_TaskLoopLoopScheduler.add(SelfblockRoutineBegin(snapshot));
    Self_TaskLoopLoopScheduler.add(SelfblockRoutineEachFrame(snapshot));
    Self_TaskLoopLoopScheduler.add(SelfblockRoutineEnd(snapshot));
    Self_TaskLoopLoopScheduler.add(endLoopIteration(Self_TaskLoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function Self_TaskLoopLoopEnd() {
  psychoJS.experiment.removeLoop(Self_TaskLoop);

  return Scheduler.Event.NEXT;
}


var RunLoop;
function RunLoopLoopBegin(RunLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  RunLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: int(expInfo['version']), method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RunLoop'
  });
  psychoJS.experiment.addLoop(RunLoop); // add the loop to the experiment
  currentLoop = RunLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  RunLoop.forEach(function() {
    const snapshot = RunLoop.getSnapshot();

    RunLoopLoopScheduler.add(importConditions(snapshot));
    const FriendLoopLoopScheduler = new Scheduler(psychoJS);
    RunLoopLoopScheduler.add(FriendLoopLoopBegin, FriendLoopLoopScheduler);
    RunLoopLoopScheduler.add(FriendLoopLoopScheduler);
    RunLoopLoopScheduler.add(FriendLoopLoopEnd);
    const OtherLoopLoopScheduler = new Scheduler(psychoJS);
    RunLoopLoopScheduler.add(OtherLoopLoopBegin, OtherLoopLoopScheduler);
    RunLoopLoopScheduler.add(OtherLoopLoopScheduler);
    RunLoopLoopScheduler.add(OtherLoopLoopEnd);
    RunLoopLoopScheduler.add(V2_2RoutineBegin(snapshot));
    RunLoopLoopScheduler.add(V2_2RoutineEachFrame(snapshot));
    RunLoopLoopScheduler.add(V2_2RoutineEnd(snapshot));
    RunLoopLoopScheduler.add(endLoopIteration(RunLoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var FriendLoop;
function FriendLoopLoopBegin(FriendLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  FriendLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: friendstart, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'FriendLoop'
  });
  psychoJS.experiment.addLoop(FriendLoop); // add the loop to the experiment
  currentLoop = FriendLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  FriendLoop.forEach(function() {
    const snapshot = FriendLoop.getSnapshot();

    FriendLoopLoopScheduler.add(importConditions(snapshot));
    FriendLoopLoopScheduler.add(Friend_StartRoutineBegin(snapshot));
    FriendLoopLoopScheduler.add(Friend_StartRoutineEachFrame(snapshot));
    FriendLoopLoopScheduler.add(Friend_StartRoutineEnd(snapshot));
    const Friend_TaskLoopLoopScheduler = new Scheduler(psychoJS);
    FriendLoopLoopScheduler.add(Friend_TaskLoopLoopBegin, Friend_TaskLoopLoopScheduler);
    FriendLoopLoopScheduler.add(Friend_TaskLoopLoopScheduler);
    FriendLoopLoopScheduler.add(Friend_TaskLoopLoopEnd);
    FriendLoopLoopScheduler.add(Friend_ratingscaleRoutineBegin(snapshot));
    FriendLoopLoopScheduler.add(Friend_ratingscaleRoutineEachFrame(snapshot));
    FriendLoopLoopScheduler.add(Friend_ratingscaleRoutineEnd(snapshot));
    FriendLoopLoopScheduler.add(endLoopIteration(FriendLoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var Friend_TaskLoop;
function Friend_TaskLoopLoopBegin(Friend_TaskLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  Friend_TaskLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Friend_SLA_96_BUILDER.csv',
    seed: undefined, name: 'Friend_TaskLoop'
  });
  psychoJS.experiment.addLoop(Friend_TaskLoop); // add the loop to the experiment
  currentLoop = Friend_TaskLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  Friend_TaskLoop.forEach(function() {
    const snapshot = Friend_TaskLoop.getSnapshot();

    Friend_TaskLoopLoopScheduler.add(importConditions(snapshot));
    Friend_TaskLoopLoopScheduler.add(Friend_TaskRoutineBegin(snapshot));
    Friend_TaskLoopLoopScheduler.add(Friend_TaskRoutineEachFrame(snapshot));
    Friend_TaskLoopLoopScheduler.add(Friend_TaskRoutineEnd(snapshot));
    Friend_TaskLoopLoopScheduler.add(Friend_ISIRoutineBegin(snapshot));
    Friend_TaskLoopLoopScheduler.add(Friend_ISIRoutineEachFrame(snapshot));
    Friend_TaskLoopLoopScheduler.add(Friend_ISIRoutineEnd(snapshot));
    Friend_TaskLoopLoopScheduler.add(Friend_OutcomeRoutineBegin(snapshot));
    Friend_TaskLoopLoopScheduler.add(Friend_OutcomeRoutineEachFrame(snapshot));
    Friend_TaskLoopLoopScheduler.add(Friend_OutcomeRoutineEnd(snapshot));
    Friend_TaskLoopLoopScheduler.add(Friend_ITIRoutineBegin(snapshot));
    Friend_TaskLoopLoopScheduler.add(Friend_ITIRoutineEachFrame(snapshot));
    Friend_TaskLoopLoopScheduler.add(Friend_ITIRoutineEnd(snapshot));
    Friend_TaskLoopLoopScheduler.add(FriendblockRoutineBegin(snapshot));
    Friend_TaskLoopLoopScheduler.add(FriendblockRoutineEachFrame(snapshot));
    Friend_TaskLoopLoopScheduler.add(FriendblockRoutineEnd(snapshot));
    Friend_TaskLoopLoopScheduler.add(endLoopIteration(Friend_TaskLoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function Friend_TaskLoopLoopEnd() {
  psychoJS.experiment.removeLoop(Friend_TaskLoop);

  return Scheduler.Event.NEXT;
}


function FriendLoopLoopEnd() {
  psychoJS.experiment.removeLoop(FriendLoop);

  return Scheduler.Event.NEXT;
}


var OtherLoop;
function OtherLoopLoopBegin(OtherLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  OtherLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: otherstart, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'OtherLoop'
  });
  psychoJS.experiment.addLoop(OtherLoop); // add the loop to the experiment
  currentLoop = OtherLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  OtherLoop.forEach(function() {
    const snapshot = OtherLoop.getSnapshot();

    OtherLoopLoopScheduler.add(importConditions(snapshot));
    OtherLoopLoopScheduler.add(Other_StartRoutineBegin(snapshot));
    OtherLoopLoopScheduler.add(Other_StartRoutineEachFrame(snapshot));
    OtherLoopLoopScheduler.add(Other_StartRoutineEnd(snapshot));
    const Other_TaskLoopLoopScheduler = new Scheduler(psychoJS);
    OtherLoopLoopScheduler.add(Other_TaskLoopLoopBegin, Other_TaskLoopLoopScheduler);
    OtherLoopLoopScheduler.add(Other_TaskLoopLoopScheduler);
    OtherLoopLoopScheduler.add(Other_TaskLoopLoopEnd);
    OtherLoopLoopScheduler.add(Other_ratingscaleRoutineBegin(snapshot));
    OtherLoopLoopScheduler.add(Other_ratingscaleRoutineEachFrame(snapshot));
    OtherLoopLoopScheduler.add(Other_ratingscaleRoutineEnd(snapshot));
    OtherLoopLoopScheduler.add(endLoopIteration(OtherLoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var Other_TaskLoop;
function Other_TaskLoopLoopBegin(Other_TaskLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  Other_TaskLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Other_SLA_96_BUILDER.csv',
    seed: undefined, name: 'Other_TaskLoop'
  });
  psychoJS.experiment.addLoop(Other_TaskLoop); // add the loop to the experiment
  currentLoop = Other_TaskLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  Other_TaskLoop.forEach(function() {
    const snapshot = Other_TaskLoop.getSnapshot();

    Other_TaskLoopLoopScheduler.add(importConditions(snapshot));
    Other_TaskLoopLoopScheduler.add(Other_TaskRoutineBegin(snapshot));
    Other_TaskLoopLoopScheduler.add(Other_TaskRoutineEachFrame(snapshot));
    Other_TaskLoopLoopScheduler.add(Other_TaskRoutineEnd(snapshot));
    Other_TaskLoopLoopScheduler.add(Other_ISIRoutineBegin(snapshot));
    Other_TaskLoopLoopScheduler.add(Other_ISIRoutineEachFrame(snapshot));
    Other_TaskLoopLoopScheduler.add(Other_ISIRoutineEnd(snapshot));
    Other_TaskLoopLoopScheduler.add(Other_OutcomeRoutineBegin(snapshot));
    Other_TaskLoopLoopScheduler.add(Other_OutcomeRoutineEachFrame(snapshot));
    Other_TaskLoopLoopScheduler.add(Other_OutcomeRoutineEnd(snapshot));
    Other_TaskLoopLoopScheduler.add(Other_ITIRoutineBegin(snapshot));
    Other_TaskLoopLoopScheduler.add(Other_ITIRoutineEachFrame(snapshot));
    Other_TaskLoopLoopScheduler.add(Other_ITIRoutineEnd(snapshot));
    Other_TaskLoopLoopScheduler.add(OtherblockRoutineBegin(snapshot));
    Other_TaskLoopLoopScheduler.add(OtherblockRoutineEachFrame(snapshot));
    Other_TaskLoopLoopScheduler.add(OtherblockRoutineEnd(snapshot));
    Other_TaskLoopLoopScheduler.add(endLoopIteration(Other_TaskLoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function Other_TaskLoopLoopEnd() {
  psychoJS.experiment.removeLoop(Other_TaskLoop);

  return Scheduler.Event.NEXT;
}


function OtherLoopLoopEnd() {
  psychoJS.experiment.removeLoop(OtherLoop);

  return Scheduler.Event.NEXT;
}


function RunLoopLoopEnd() {
  psychoJS.experiment.removeLoop(RunLoop);

  return Scheduler.Event.NEXT;
}


var _dem_continue_allKeys;
var ExampleComponents;
function ExampleRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Example'-------
    t = 0;
    ExampleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    dem_continue.keys = undefined;
    dem_continue.rt = undefined;
    _dem_continue_allKeys = [];
    // keep track of which components have finished
    ExampleComponents = [];
    ExampleComponents.push(Example_topbox);
    ExampleComponents.push(Example_bottombox);
    ExampleComponents.push(Example_100);
    ExampleComponents.push(Example_toptext);
    ExampleComponents.push(Example_bottomtext);
    ExampleComponents.push(Example_100text);
    ExampleComponents.push(Example_instext1);
    ExampleComponents.push(Example_instext2);
    ExampleComponents.push(Example_instext3);
    ExampleComponents.push(Example_cue);
    ExampleComponents.push(Example_instext4);
    ExampleComponents.push(Example_text5);
    ExampleComponents.push(Example_text6);
    ExampleComponents.push(Example_text7);
    ExampleComponents.push(dem_continue);
    
    ExampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function ExampleRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Example'-------
    // get current time
    t = ExampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Example_topbox* updates
    if (t >= 0.0 && Example_topbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_topbox.tStart = t;  // (not accounting for frame time here)
      Example_topbox.frameNStart = frameN;  // exact frame index
      
      Example_topbox.setAutoDraw(true);
    }

    frameRemains = 0.0 + 35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Example_topbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Example_topbox.setAutoDraw(false);
    }
    
    // *Example_bottombox* updates
    if (t >= 0.0 && Example_bottombox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_bottombox.tStart = t;  // (not accounting for frame time here)
      Example_bottombox.frameNStart = frameN;  // exact frame index
      
      Example_bottombox.setAutoDraw(true);
    }

    frameRemains = 0.0 + 35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Example_bottombox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Example_bottombox.setAutoDraw(false);
    }
    
    // *Example_100* updates
    if (t >= 0.0 && Example_100.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_100.tStart = t;  // (not accounting for frame time here)
      Example_100.frameNStart = frameN;  // exact frame index
      
      Example_100.setAutoDraw(true);
    }

    frameRemains = 0.0 + 35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Example_100.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Example_100.setAutoDraw(false);
    }
    
    // *Example_toptext* updates
    if (t >= 0.0 && Example_toptext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_toptext.tStart = t;  // (not accounting for frame time here)
      Example_toptext.frameNStart = frameN;  // exact frame index
      
      Example_toptext.setAutoDraw(true);
    }

    frameRemains = 0.0 + 35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Example_toptext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Example_toptext.setAutoDraw(false);
    }
    
    // *Example_bottomtext* updates
    if (t >= 0.0 && Example_bottomtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_bottomtext.tStart = t;  // (not accounting for frame time here)
      Example_bottomtext.frameNStart = frameN;  // exact frame index
      
      Example_bottomtext.setAutoDraw(true);
    }

    frameRemains = 0.0 + 35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Example_bottomtext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Example_bottomtext.setAutoDraw(false);
    }
    
    // *Example_100text* updates
    if (t >= 0.0 && Example_100text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_100text.tStart = t;  // (not accounting for frame time here)
      Example_100text.frameNStart = frameN;  // exact frame index
      
      Example_100text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Example_100text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Example_100text.setAutoDraw(false);
    }
    
    // *Example_instext1* updates
    if (t >= 0 && Example_instext1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_instext1.tStart = t;  // (not accounting for frame time here)
      Example_instext1.frameNStart = frameN;  // exact frame index
      
      Example_instext1.setAutoDraw(true);
    }

    frameRemains = 0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Example_instext1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Example_instext1.setAutoDraw(false);
    }
    
    // *Example_instext2* updates
    if (t >= 5 && Example_instext2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_instext2.tStart = t;  // (not accounting for frame time here)
      Example_instext2.frameNStart = frameN;  // exact frame index
      
      Example_instext2.setAutoDraw(true);
    }

    frameRemains = 5 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Example_instext2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Example_instext2.setAutoDraw(false);
    }
    
    // *Example_instext3* updates
    if (t >= 15 && Example_instext3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_instext3.tStart = t;  // (not accounting for frame time here)
      Example_instext3.frameNStart = frameN;  // exact frame index
      
      Example_instext3.setAutoDraw(true);
    }

    frameRemains = 15 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Example_instext3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Example_instext3.setAutoDraw(false);
    }
    
    // *Example_cue* updates
    if (t >= 25 && Example_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_cue.tStart = t;  // (not accounting for frame time here)
      Example_cue.frameNStart = frameN;  // exact frame index
      
      Example_cue.setAutoDraw(true);
    }

    frameRemains = 25 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Example_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Example_cue.setAutoDraw(false);
    }
    
    // *Example_instext4* updates
    if (t >= 25 && Example_instext4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_instext4.tStart = t;  // (not accounting for frame time here)
      Example_instext4.frameNStart = frameN;  // exact frame index
      
      Example_instext4.setAutoDraw(true);
    }

    frameRemains = 25 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Example_instext4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Example_instext4.setAutoDraw(false);
    }
    
    // *Example_text5* updates
    if (t >= 25 && Example_text5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_text5.tStart = t;  // (not accounting for frame time here)
      Example_text5.frameNStart = frameN;  // exact frame index
      
      Example_text5.setAutoDraw(true);
    }

    frameRemains = 25 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Example_text5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Example_text5.setAutoDraw(false);
    }
    
    // *Example_text6* updates
    if (t >= 35 && Example_text6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_text6.tStart = t;  // (not accounting for frame time here)
      Example_text6.frameNStart = frameN;  // exact frame index
      
      Example_text6.setAutoDraw(true);
    }

    
    // *Example_text7* updates
    if (t >= 45 && Example_text7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_text7.tStart = t;  // (not accounting for frame time here)
      Example_text7.frameNStart = frameN;  // exact frame index
      
      Example_text7.setAutoDraw(true);
    }

    
    // *dem_continue* updates
    if (t >= 45 && dem_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dem_continue.tStart = t;  // (not accounting for frame time here)
      dem_continue.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { dem_continue.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { dem_continue.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { dem_continue.clearEvents(); });
    }

    if (dem_continue.status === PsychoJS.Status.STARTED) {
      let theseKeys = dem_continue.getKeys({keyList: ['1', '2'], waitRelease: false});
      _dem_continue_allKeys = _dem_continue_allKeys.concat(theseKeys);
      if (_dem_continue_allKeys.length > 0) {
        dem_continue.keys = _dem_continue_allKeys[_dem_continue_allKeys.length - 1].name;  // just the last key pressed
        dem_continue.rt = _dem_continue_allKeys[_dem_continue_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if ((dem_continue.keys === "2")) {
        RepeatExampleLoop.finished = false;
    } else {
        RepeatExampleLoop.finished = true;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ExampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ExampleRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Example'-------
    ExampleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('dem_continue.keys', dem_continue.keys);
    if (typeof dem_continue.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('dem_continue.rt', dem_continue.rt);
        routineTimer.reset();
        }
    
    dem_continue.stop();
    // the Routine "Example" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Pre_Practice_keys_allKeys;
var Pre_PracticeComponents;
function Pre_PracticeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Pre_Practice'-------
    t = 0;
    Pre_PracticeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Pre_Practice_keys.keys = undefined;
    Pre_Practice_keys.rt = undefined;
    _Pre_Practice_keys_allKeys = [];
    // keep track of which components have finished
    Pre_PracticeComponents = [];
    Pre_PracticeComponents.push(Pre_Practice_text);
    Pre_PracticeComponents.push(Pre_Practice_keys);
    
    Pre_PracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Pre_PracticeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Pre_Practice'-------
    // get current time
    t = Pre_PracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Pre_Practice_text* updates
    if (t >= 0.0 && Pre_Practice_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pre_Practice_text.tStart = t;  // (not accounting for frame time here)
      Pre_Practice_text.frameNStart = frameN;  // exact frame index
      
      Pre_Practice_text.setAutoDraw(true);
    }

    
    // *Pre_Practice_keys* updates
    if (t >= 0.0 && Pre_Practice_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pre_Practice_keys.tStart = t;  // (not accounting for frame time here)
      Pre_Practice_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Pre_Practice_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Pre_Practice_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Pre_Practice_keys.clearEvents(); });
    }

    if (Pre_Practice_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = Pre_Practice_keys.getKeys({keyList: ['space'], waitRelease: false});
      _Pre_Practice_keys_allKeys = _Pre_Practice_keys_allKeys.concat(theseKeys);
      if (_Pre_Practice_keys_allKeys.length > 0) {
        Pre_Practice_keys.keys = _Pre_Practice_keys_allKeys[_Pre_Practice_keys_allKeys.length - 1].name;  // just the last key pressed
        Pre_Practice_keys.rt = _Pre_Practice_keys_allKeys[_Pre_Practice_keys_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Pre_PracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pre_PracticeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Pre_Practice'-------
    Pre_PracticeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    Pre_Practice_keys.stop();
    // the Routine "Pre_Practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Practice_keyboard_allKeys;
var PracticeComponents;
function PracticeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Practice'-------
    t = 0;
    PracticeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    Practice_toptext.setText(amount_1);
    Practice_bottomtext.setText(amount_2);
    Practice_100text.setText(certain);
    Practice_keyboard.keys = undefined;
    Practice_keyboard.rt = undefined;
    _Practice_keyboard_allKeys = [];
    // keep track of which components have finished
    PracticeComponents = [];
    PracticeComponents.push(Practice_topbox);
    PracticeComponents.push(Practice_bottombox);
    PracticeComponents.push(Practice_100);
    PracticeComponents.push(Practice_toptext);
    PracticeComponents.push(Practice_bottomtext);
    PracticeComponents.push(Practice_100text);
    PracticeComponents.push(Practice_cue);
    PracticeComponents.push(Practice_keyboard);
    
    PracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PracticeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Practice'-------
    // get current time
    t = PracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Practice_topbox* updates
    if (t >= 0.0 && Practice_topbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Practice_topbox.tStart = t;  // (not accounting for frame time here)
      Practice_topbox.frameNStart = frameN;  // exact frame index
      
      Practice_topbox.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Practice_topbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Practice_topbox.setAutoDraw(false);
    }
    
    // *Practice_bottombox* updates
    if (t >= 0.0 && Practice_bottombox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Practice_bottombox.tStart = t;  // (not accounting for frame time here)
      Practice_bottombox.frameNStart = frameN;  // exact frame index
      
      Practice_bottombox.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Practice_bottombox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Practice_bottombox.setAutoDraw(false);
    }
    
    // *Practice_100* updates
    if (t >= 0.0 && Practice_100.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Practice_100.tStart = t;  // (not accounting for frame time here)
      Practice_100.frameNStart = frameN;  // exact frame index
      
      Practice_100.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Practice_100.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Practice_100.setAutoDraw(false);
    }
    
    // *Practice_toptext* updates
    if (t >= 0.0 && Practice_toptext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Practice_toptext.tStart = t;  // (not accounting for frame time here)
      Practice_toptext.frameNStart = frameN;  // exact frame index
      
      Practice_toptext.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Practice_toptext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Practice_toptext.setAutoDraw(false);
    }
    
    // *Practice_bottomtext* updates
    if (t >= 0.0 && Practice_bottomtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Practice_bottomtext.tStart = t;  // (not accounting for frame time here)
      Practice_bottomtext.frameNStart = frameN;  // exact frame index
      
      Practice_bottomtext.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Practice_bottomtext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Practice_bottomtext.setAutoDraw(false);
    }
    
    // *Practice_100text* updates
    if (t >= 0.0 && Practice_100text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Practice_100text.tStart = t;  // (not accounting for frame time here)
      Practice_100text.frameNStart = frameN;  // exact frame index
      
      Practice_100text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Practice_100text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Practice_100text.setAutoDraw(false);
    }
    
    // *Practice_cue* updates
    if (t >= 2 && Practice_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Practice_cue.tStart = t;  // (not accounting for frame time here)
      Practice_cue.frameNStart = frameN;  // exact frame index
      
      Practice_cue.setAutoDraw(true);
    }

    frameRemains = 2 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Practice_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Practice_cue.setAutoDraw(false);
    }
    
    // *Practice_keyboard* updates
    if (t >= 2 && Practice_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Practice_keyboard.tStart = t;  // (not accounting for frame time here)
      Practice_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Practice_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Practice_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Practice_keyboard.clearEvents(); });
    }

    frameRemains = 2 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Practice_keyboard.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Practice_keyboard.status = PsychoJS.Status.FINISHED;
  }

    if (Practice_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = Practice_keyboard.getKeys({keyList: ['1', '2'], waitRelease: false});
      _Practice_keyboard_allKeys = _Practice_keyboard_allKeys.concat(theseKeys);
      if (_Practice_keyboard_allKeys.length > 0) {
        Practice_keyboard.keys = _Practice_keyboard_allKeys[_Practice_keyboard_allKeys.length - 1].name;  // just the last key pressed
        Practice_keyboard.rt = _Practice_keyboard_allKeys[_Practice_keyboard_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if ((Practice_keyboard.keys === "1")) {
        outcomeMsg = `You chose the gamble and ${gamble_outcome} ${gamble_amount}`;
    } else {
        if ((Practice_keyboard.keys === "2")) {
            outcomeMsg = `You chose the certain amount of ${certain}`;
        } else {
            outcomeMsg = "#";
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PracticeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Practice'-------
    PracticeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Practice_keyboard.keys', Practice_keyboard.keys);
    if (typeof Practice_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Practice_keyboard.rt', Practice_keyboard.rt);
        routineTimer.reset();
        }
    
    Practice_keyboard.stop();
    return Scheduler.Event.NEXT;
  };
}


var Practice_CrossComponents;
function Practice_CrossRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Practice_Cross'-------
    t = 0;
    Practice_CrossClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    Practice_CrossComponents = [];
    Practice_CrossComponents.push(Practice_Fix);
    
    Practice_CrossComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Practice_CrossRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Practice_Cross'-------
    // get current time
    t = Practice_CrossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Practice_Fix* updates
    if (t >= 0.0 && Practice_Fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Practice_Fix.tStart = t;  // (not accounting for frame time here)
      Practice_Fix.frameNStart = frameN;  // exact frame index
      
      Practice_Fix.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Practice_Fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Practice_Fix.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Practice_CrossComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Practice_CrossRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Practice_Cross'-------
    Practice_CrossComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var Practice_OutcomeComponents;
function Practice_OutcomeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Practice_Outcome'-------
    t = 0;
    Practice_OutcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    Outcome_Text.setText(outcomeMsg);
    // keep track of which components have finished
    Practice_OutcomeComponents = [];
    Practice_OutcomeComponents.push(Outcome_Text);
    
    Practice_OutcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Practice_OutcomeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Practice_Outcome'-------
    // get current time
    t = Practice_OutcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Outcome_Text* updates
    if (t >= 0.0 && Outcome_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Outcome_Text.tStart = t;  // (not accounting for frame time here)
      Outcome_Text.frameNStart = frameN;  // exact frame index
      
      Outcome_Text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Outcome_Text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Outcome_Text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Practice_OutcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Practice_OutcomeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Practice_Outcome'-------
    Practice_OutcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _Self_Start_keys_allKeys;
var Self_StartComponents;
function Self_StartRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Self_Start'-------
    t = 0;
    Self_StartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Self_Start_keys.keys = undefined;
    Self_Start_keys.rt = undefined;
    _Self_Start_keys_allKeys = [];
    // keep track of which components have finished
    Self_StartComponents = [];
    Self_StartComponents.push(Self_Start_Text);
    Self_StartComponents.push(Self_Start_keys);
    
    Self_StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Self_StartRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Self_Start'-------
    // get current time
    t = Self_StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Self_Start_Text* updates
    if (t >= 0.0 && Self_Start_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_Start_Text.tStart = t;  // (not accounting for frame time here)
      Self_Start_Text.frameNStart = frameN;  // exact frame index
      
      Self_Start_Text.setAutoDraw(true);
    }

    
    // *Self_Start_keys* updates
    if (t >= 0.0 && Self_Start_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_Start_keys.tStart = t;  // (not accounting for frame time here)
      Self_Start_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Self_Start_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Self_Start_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Self_Start_keys.clearEvents(); });
    }

    if (Self_Start_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = Self_Start_keys.getKeys({keyList: ['space'], waitRelease: false});
      _Self_Start_keys_allKeys = _Self_Start_keys_allKeys.concat(theseKeys);
      if (_Self_Start_keys_allKeys.length > 0) {
        Self_Start_keys.keys = _Self_Start_keys_allKeys[_Self_Start_keys_allKeys.length - 1].name;  // just the last key pressed
        Self_Start_keys.rt = _Self_Start_keys_allKeys[_Self_Start_keys_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Self_StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Self_StartRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Self_Start'-------
    Self_StartComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Self_Start_keys.keys', Self_Start_keys.keys);
    if (typeof Self_Start_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Self_Start_keys.rt', Self_Start_keys.rt);
        routineTimer.reset();
        }
    
    Self_Start_keys.stop();
    // the Routine "Self_Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Self_keyboard_allKeys;
var Self_TaskComponents;
function Self_TaskRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Self_Task'-------
    t = 0;
    Self_TaskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    Self_toptext.setText(risky_gain);
    Self_bottomtext.setText(risky_loss);
    Self_100text.setText(alt_certain);
    Self_keyboard.keys = undefined;
    Self_keyboard.rt = undefined;
    _Self_keyboard_allKeys = [];
    /* Syntax Error: Fix Python code */
    // keep track of which components have finished
    Self_TaskComponents = [];
    Self_TaskComponents.push(Self_topbox);
    Self_TaskComponents.push(Self_bottombox);
    Self_TaskComponents.push(Self_100);
    Self_TaskComponents.push(Self_toptext);
    Self_TaskComponents.push(Self_bottomtext);
    Self_TaskComponents.push(Self_100text);
    Self_TaskComponents.push(Self_cue);
    Self_TaskComponents.push(Self_keyboard);
    
    Self_TaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var trial_start;
var rt_clock;
function Self_TaskRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Self_Task'-------
    // get current time
    t = Self_TaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    trial_start = globalClock.getTime();
    
    
    // *Self_topbox* updates
    if (t >= 0.0 && Self_topbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_topbox.tStart = t;  // (not accounting for frame time here)
      Self_topbox.frameNStart = frameN;  // exact frame index
      
      Self_topbox.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Self_topbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Self_topbox.setAutoDraw(false);
    }
    
    // *Self_bottombox* updates
    if (t >= 0.0 && Self_bottombox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_bottombox.tStart = t;  // (not accounting for frame time here)
      Self_bottombox.frameNStart = frameN;  // exact frame index
      
      Self_bottombox.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Self_bottombox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Self_bottombox.setAutoDraw(false);
    }
    
    // *Self_100* updates
    if (t >= 0.0 && Self_100.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_100.tStart = t;  // (not accounting for frame time here)
      Self_100.frameNStart = frameN;  // exact frame index
      
      Self_100.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Self_100.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Self_100.setAutoDraw(false);
    }
    
    // *Self_toptext* updates
    if (t >= 0.0 && Self_toptext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_toptext.tStart = t;  // (not accounting for frame time here)
      Self_toptext.frameNStart = frameN;  // exact frame index
      
      Self_toptext.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Self_toptext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Self_toptext.setAutoDraw(false);
    }
    
    // *Self_bottomtext* updates
    if (t >= 0.0 && Self_bottomtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_bottomtext.tStart = t;  // (not accounting for frame time here)
      Self_bottomtext.frameNStart = frameN;  // exact frame index
      
      Self_bottomtext.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Self_bottomtext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Self_bottomtext.setAutoDraw(false);
    }
    
    // *Self_100text* updates
    if (t >= 0.0 && Self_100text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_100text.tStart = t;  // (not accounting for frame time here)
      Self_100text.frameNStart = frameN;  // exact frame index
      
      Self_100text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Self_100text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Self_100text.setAutoDraw(false);
    }
    
    // *Self_cue* updates
    if (t >= 2 && Self_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_cue.tStart = t;  // (not accounting for frame time here)
      Self_cue.frameNStart = frameN;  // exact frame index
      
      Self_cue.setAutoDraw(true);
    }

    frameRemains = 2 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Self_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Self_cue.setAutoDraw(false);
    }
    
    // *Self_keyboard* updates
    if (t >= 2 && Self_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_keyboard.tStart = t;  // (not accounting for frame time here)
      Self_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Self_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Self_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Self_keyboard.clearEvents(); });
    }

    frameRemains = 2 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Self_keyboard.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Self_keyboard.status = PsychoJS.Status.FINISHED;
  }

    if (Self_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = Self_keyboard.getKeys({keyList: ['1', '2'], waitRelease: false});
      _Self_keyboard_allKeys = _Self_keyboard_allKeys.concat(theseKeys);
      if (_Self_keyboard_allKeys.length > 0) {
        Self_keyboard.keys = _Self_keyboard_allKeys[0].name;  // just the first key pressed
        Self_keyboard.rt = _Self_keyboard_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if ((Self_keyboard.keys === "1")) {
        rt_clock = globalClock.getTime();
        Self_outcomeMsg = `You chose the gamble and ${task_gamble_outcome} ${task_gamble_amount}`;
    } else {
        if ((Self_keyboard.keys === "2")) {
            rt_clock = globalClock.getTime();
            Self_outcomeMsg = `You chose the certain amount of ${alt_certain}`;
        } else {
            rt_clock = globalClock.getTime();
            Self_outcomeMsg = "#";
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Self_TaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Self_TaskRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Self_Task'-------
    Self_TaskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Self_keyboard.keys', Self_keyboard.keys);
    if (typeof Self_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Self_keyboard.rt', Self_keyboard.rt);
        routineTimer.reset();
        }
    
    Self_keyboard.stop();
    Self_TaskLoop.addData("rt_clock", rt_clock);
    Self_TaskLoop.addData("startexp_clock", startexp_clock);
    Self_TaskLoop.addData("trial_start", trial_start);
    
    return Scheduler.Event.NEXT;
  };
}


var _pj;
var trial_duration;
var Self_ISIComponents;
function Self_ISIRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Self_ISI'-------
    t = 0;
    Self_ISIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6(Self_keyboard.keys, ["", [], null])) {
        trial_duration = ISI_s;
    } else {
        if (((Self_keyboard.keys === "1") || "2")) {
            reaction_time = Number.parseFloat(Self_keyboard.rt);
            trial_duration = ((2 - reaction_time) + ISI_s);
        }
    }
    
    ISI_self.setText('+');
    // keep track of which components have finished
    Self_ISIComponents = [];
    Self_ISIComponents.push(ISI_self);
    
    Self_ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Self_ISIRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Self_ISI'-------
    // get current time
    t = Self_ISIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ISI_self* updates
    if (t >= 0.0 && ISI_self.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ISI_self.tStart = t;  // (not accounting for frame time here)
      ISI_self.frameNStart = frameN;  // exact frame index
      
      ISI_self.setAutoDraw(true);
    }

    frameRemains = 0.0 + ISI_s - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ISI_self.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ISI_self.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Self_ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Self_ISIRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Self_ISI'-------
    Self_ISIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    /* Syntax Error: Fix Python code */
    // the Routine "Self_ISI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Self_OutcomeComponents;
function Self_OutcomeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Self_Outcome'-------
    t = 0;
    Self_OutcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    Self_Outcome_Text.setText(Self_outcomeMsg);
    // keep track of which components have finished
    Self_OutcomeComponents = [];
    Self_OutcomeComponents.push(Self_Outcome_Text);
    
    Self_OutcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Self_OutcomeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Self_Outcome'-------
    // get current time
    t = Self_OutcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Self_Outcome_Text* updates
    if (t >= 0.0 && Self_Outcome_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_Outcome_Text.tStart = t;  // (not accounting for frame time here)
      Self_Outcome_Text.frameNStart = frameN;  // exact frame index
      
      Self_Outcome_Text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Self_Outcome_Text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Self_Outcome_Text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Self_OutcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Self_OutcomeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Self_Outcome'-------
    Self_OutcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var Self_ITIComponents;
function Self_ITIRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Self_ITI'-------
    t = 0;
    Self_ITIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ITI_self.setText('+');
    // keep track of which components have finished
    Self_ITIComponents = [];
    Self_ITIComponents.push(ITI_self);
    
    Self_ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Self_ITIRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Self_ITI'-------
    // get current time
    t = Self_ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ITI_self* updates
    if (t >= 0.0 && ITI_self.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ITI_self.tStart = t;  // (not accounting for frame time here)
      ITI_self.frameNStart = frameN;  // exact frame index
      
      ITI_self.setAutoDraw(true);
    }

    frameRemains = 0.0 + ITI_s - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ITI_self.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ITI_self.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Self_ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Self_ITIRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Self_ITI'-------
    Self_ITIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Self_ITI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var expected;
var actual;
var difference_ISI;
var timingComponents;
function timingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'timing'-------
    t = 0;
    timingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    expected = ((2 - Self_keyboard.rt) + ISI_s);
    actual = (Self_Outcome_Text.tStartRefresh - ISI_self.tStartRefresh);
    difference_ISI = (expected - actual);
    Self_TaskLoop.addData("actual_ISIdur", actual);
    Self_TaskLoop.addData("expected_ISIdur", expected);
    Self_TaskLoop.addData("difference_ISI", difference_ISI);
    
    // keep track of which components have finished
    timingComponents = [];
    
    timingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function timingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'timing'-------
    // get current time
    t = timingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    timingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function timingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'timing'-------
    timingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "timing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Self_blockkeyboard_allKeys;
var SelfblockComponents;
function SelfblockRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Selfblock'-------
    t = 0;
    SelfblockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Self_blockkeyboard.keys = undefined;
    Self_blockkeyboard.rt = undefined;
    _Self_blockkeyboard_allKeys = [];
    // keep track of which components have finished
    SelfblockComponents = [];
    SelfblockComponents.push(Self_BlockText);
    SelfblockComponents.push(Self_blockkeyboard);
    
    SelfblockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function SelfblockRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Selfblock'-------
    // get current time
    t = SelfblockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! _pj.in_es6(Self_TaskLoop.thisN, [31, 63]))) {
        continueRoutine = false;
    } else {
        Self_TaskLoop.finished = false;
    }
    
    
    // *Self_BlockText* updates
    if (t >= 0 && Self_BlockText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_BlockText.tStart = t;  // (not accounting for frame time here)
      Self_BlockText.frameNStart = frameN;  // exact frame index
      
      Self_BlockText.setAutoDraw(true);
    }

    
    // *Self_blockkeyboard* updates
    if (t >= 0 && Self_blockkeyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_blockkeyboard.tStart = t;  // (not accounting for frame time here)
      Self_blockkeyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Self_blockkeyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Self_blockkeyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Self_blockkeyboard.clearEvents(); });
    }

    if (Self_blockkeyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = Self_blockkeyboard.getKeys({keyList: ['space'], waitRelease: false});
      _Self_blockkeyboard_allKeys = _Self_blockkeyboard_allKeys.concat(theseKeys);
      if (_Self_blockkeyboard_allKeys.length > 0) {
        Self_blockkeyboard.keys = _Self_blockkeyboard_allKeys[0].name;  // just the first key pressed
        Self_blockkeyboard.rt = _Self_blockkeyboard_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SelfblockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SelfblockRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Selfblock'-------
    SelfblockComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Self_blockkeyboard.keys', Self_blockkeyboard.keys);
    if (typeof Self_blockkeyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Self_blockkeyboard.rt', Self_blockkeyboard.rt);
        routineTimer.reset();
        }
    
    Self_blockkeyboard.stop();
    // the Routine "Selfblock" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var Self_ratingscaleComponents;
function Self_ratingscaleRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Self_ratingscale'-------
    t = 0;
    Self_ratingscaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    Self_SliderText.setText('How did you feel when making choices for yourself?');
    Self_slider.reset()
    /* Syntax Error: Fix Python code */
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    Self_ratingscaleComponents = [];
    Self_ratingscaleComponents.push(Self_slider_button_text);
    Self_ratingscaleComponents.push(Self_SliderText);
    Self_ratingscaleComponents.push(Self_slider);
    Self_ratingscaleComponents.push(key_resp);
    
    Self_ratingscaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Self_ratingscaleRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Self_ratingscale'-------
    // get current time
    t = Self_ratingscaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Self_slider_button_text* updates
    if (t >= 0.0 && Self_slider_button_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_slider_button_text.tStart = t;  // (not accounting for frame time here)
      Self_slider_button_text.frameNStart = frameN;  // exact frame index
      
      Self_slider_button_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Self_slider_button_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Self_slider_button_text.setAutoDraw(false);
    }
    
    // *Self_SliderText* updates
    if (t >= 0.0 && Self_SliderText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_SliderText.tStart = t;  // (not accounting for frame time here)
      Self_SliderText.frameNStart = frameN;  // exact frame index
      
      Self_SliderText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Self_SliderText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Self_SliderText.setAutoDraw(false);
    }
    
    // *Self_slider* updates
    if (t >= 0.0 && Self_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Self_slider.tStart = t;  // (not accounting for frame time here)
      Self_slider.frameNStart = frameN;  // exact frame index
      
      Self_slider.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Self_slider.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Self_slider.setAutoDraw(false);
    }
    /* Syntax Error: Fix Python code */
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    frameRemains = 0.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Self_ratingscaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Self_ratingscaleRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Self_ratingscale'-------
    Self_ratingscaleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Self_slider.response', Self_slider.getRating());
    psychoJS.experiment.addData('Self_slider.rt', Self_slider.getRT());
    psychoJS.experiment.addData('Self_slider.history', Self_slider.getHistory());
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    return Scheduler.Event.NEXT;
  };
}


var VersionInitateComponents;
function VersionInitateRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'VersionInitate'-------
    t = 0;
    VersionInitateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((Number.parseInt(expInfo["version"]) === 1)) {
        friendstart = 1;
        otherstart = 1;
    } else {
        if ((Number.parseInt(expInfo["version"]) === 2)) {
            friendstart = 0;
            otherstart = 1;
        }
    }
    
    // keep track of which components have finished
    VersionInitateComponents = [];
    
    VersionInitateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function VersionInitateRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'VersionInitate'-------
    // get current time
    t = VersionInitateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    VersionInitateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function VersionInitateRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'VersionInitate'-------
    VersionInitateComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "VersionInitate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Friend_Start_keys_allKeys;
var Friend_StartComponents;
function Friend_StartRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Friend_Start'-------
    t = 0;
    Friend_StartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Friend_Start_keys.keys = undefined;
    Friend_Start_keys.rt = undefined;
    _Friend_Start_keys_allKeys = [];
    // keep track of which components have finished
    Friend_StartComponents = [];
    Friend_StartComponents.push(Friend_Start_Text);
    Friend_StartComponents.push(Friend_Start_keys);
    
    Friend_StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Friend_StartRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Friend_Start'-------
    // get current time
    t = Friend_StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Friend_Start_Text* updates
    if (t >= 0.0 && Friend_Start_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_Start_Text.tStart = t;  // (not accounting for frame time here)
      Friend_Start_Text.frameNStart = frameN;  // exact frame index
      
      Friend_Start_Text.setAutoDraw(true);
    }

    
    // *Friend_Start_keys* updates
    if (t >= 0.0 && Friend_Start_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_Start_keys.tStart = t;  // (not accounting for frame time here)
      Friend_Start_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Friend_Start_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Friend_Start_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Friend_Start_keys.clearEvents(); });
    }

    if (Friend_Start_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = Friend_Start_keys.getKeys({keyList: ['space'], waitRelease: false});
      _Friend_Start_keys_allKeys = _Friend_Start_keys_allKeys.concat(theseKeys);
      if (_Friend_Start_keys_allKeys.length > 0) {
        Friend_Start_keys.keys = _Friend_Start_keys_allKeys[_Friend_Start_keys_allKeys.length - 1].name;  // just the last key pressed
        Friend_Start_keys.rt = _Friend_Start_keys_allKeys[_Friend_Start_keys_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Friend_StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Friend_StartRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Friend_Start'-------
    Friend_StartComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Friend_Start_keys.keys', Friend_Start_keys.keys);
    if (typeof Friend_Start_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Friend_Start_keys.rt', Friend_Start_keys.rt);
        routineTimer.reset();
        }
    
    Friend_Start_keys.stop();
    // the Routine "Friend_Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Friend_keyboard_allKeys;
var Friend_TaskComponents;
function Friend_TaskRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Friend_Task'-------
    t = 0;
    Friend_TaskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    Friend_toptext.setText(risky_gain);
    Friend_bottomtext.setText(risky_loss);
    Friend_100text.setText(alt_certain);
    Friend_keyboard.keys = undefined;
    Friend_keyboard.rt = undefined;
    _Friend_keyboard_allKeys = [];
    // keep track of which components have finished
    Friend_TaskComponents = [];
    Friend_TaskComponents.push(Friend_topbox);
    Friend_TaskComponents.push(Friend_bottombox);
    Friend_TaskComponents.push(Friend_100);
    Friend_TaskComponents.push(Friend_toptext);
    Friend_TaskComponents.push(Friend_bottomtext);
    Friend_TaskComponents.push(Friend_100text);
    Friend_TaskComponents.push(Friend_cue);
    Friend_TaskComponents.push(Friend_keyboard);
    
    Friend_TaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Friend_TaskRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Friend_Task'-------
    // get current time
    t = Friend_TaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Friend_topbox* updates
    if (t >= 0.0 && Friend_topbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_topbox.tStart = t;  // (not accounting for frame time here)
      Friend_topbox.frameNStart = frameN;  // exact frame index
      
      Friend_topbox.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Friend_topbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Friend_topbox.setAutoDraw(false);
    }
    
    // *Friend_bottombox* updates
    if (t >= 0.0 && Friend_bottombox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_bottombox.tStart = t;  // (not accounting for frame time here)
      Friend_bottombox.frameNStart = frameN;  // exact frame index
      
      Friend_bottombox.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Friend_bottombox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Friend_bottombox.setAutoDraw(false);
    }
    
    // *Friend_100* updates
    if (t >= 0.0 && Friend_100.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_100.tStart = t;  // (not accounting for frame time here)
      Friend_100.frameNStart = frameN;  // exact frame index
      
      Friend_100.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Friend_100.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Friend_100.setAutoDraw(false);
    }
    
    // *Friend_toptext* updates
    if (t >= 0.0 && Friend_toptext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_toptext.tStart = t;  // (not accounting for frame time here)
      Friend_toptext.frameNStart = frameN;  // exact frame index
      
      Friend_toptext.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Friend_toptext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Friend_toptext.setAutoDraw(false);
    }
    
    // *Friend_bottomtext* updates
    if (t >= 0.0 && Friend_bottomtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_bottomtext.tStart = t;  // (not accounting for frame time here)
      Friend_bottomtext.frameNStart = frameN;  // exact frame index
      
      Friend_bottomtext.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Friend_bottomtext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Friend_bottomtext.setAutoDraw(false);
    }
    
    // *Friend_100text* updates
    if (t >= 0.0 && Friend_100text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_100text.tStart = t;  // (not accounting for frame time here)
      Friend_100text.frameNStart = frameN;  // exact frame index
      
      Friend_100text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Friend_100text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Friend_100text.setAutoDraw(false);
    }
    
    // *Friend_cue* updates
    if (t >= 0.5 && Friend_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_cue.tStart = t;  // (not accounting for frame time here)
      Friend_cue.frameNStart = frameN;  // exact frame index
      
      Friend_cue.setAutoDraw(true);
    }

    frameRemains = 0.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Friend_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Friend_cue.setAutoDraw(false);
    }
    
    // *Friend_keyboard* updates
    if (t >= 0.5 && Friend_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_keyboard.tStart = t;  // (not accounting for frame time here)
      Friend_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Friend_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Friend_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Friend_keyboard.clearEvents(); });
    }

    frameRemains = 0.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Friend_keyboard.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Friend_keyboard.status = PsychoJS.Status.FINISHED;
  }

    if (Friend_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = Friend_keyboard.getKeys({keyList: ['1', '2'], waitRelease: false});
      _Friend_keyboard_allKeys = _Friend_keyboard_allKeys.concat(theseKeys);
      if (_Friend_keyboard_allKeys.length > 0) {
        Friend_keyboard.keys = _Friend_keyboard_allKeys[0].name;  // just the first key pressed
        Friend_keyboard.rt = _Friend_keyboard_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if ((Friend_keyboard.keys === "1")) {
        Friend_outcomeMsg = `You chose the gamble and ${task_gamble_outcome} ${task_gamble_amount}`;
    } else {
        if ((Friend_keyboard.keys === "2")) {
            Friend_outcomeMsg = `You chose the certain amount of ${alt_certain}`;
        } else {
            Friend_outcomeMsg = "#";
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Friend_TaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Friend_TaskRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Friend_Task'-------
    Friend_TaskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Friend_keyboard.keys', Friend_keyboard.keys);
    if (typeof Friend_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Friend_keyboard.rt', Friend_keyboard.rt);
        routineTimer.reset();
        }
    
    Friend_keyboard.stop();
    return Scheduler.Event.NEXT;
  };
}


var Friend_ISIComponents;
function Friend_ISIRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Friend_ISI'-------
    t = 0;
    Friend_ISIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    Friend_ISIComponents = [];
    Friend_ISIComponents.push(ISI_friend);
    
    Friend_ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Friend_ISIRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Friend_ISI'-------
    // get current time
    t = Friend_ISIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ISI_friend* updates
    if (t >= 0.0 && ISI_friend.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ISI_friend.tStart = t;  // (not accounting for frame time here)
      ISI_friend.frameNStart = frameN;  // exact frame index
      
      ISI_friend.setAutoDraw(true);
    }

    frameRemains = 0.0 + ((2 - Friend_keyboard.rt) + ISI_f) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ISI_friend.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ISI_friend.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Friend_ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Friend_ISIRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Friend_ISI'-------
    Friend_ISIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Friend_ISI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Friend_OutcomeComponents;
function Friend_OutcomeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Friend_Outcome'-------
    t = 0;
    Friend_OutcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    Friend_Outcome_Text.setText(Friend_outcomeMsg);
    // keep track of which components have finished
    Friend_OutcomeComponents = [];
    Friend_OutcomeComponents.push(Friend_Outcome_Text);
    
    Friend_OutcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Friend_OutcomeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Friend_Outcome'-------
    // get current time
    t = Friend_OutcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Friend_Outcome_Text* updates
    if (t >= 0.0 && Friend_Outcome_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_Outcome_Text.tStart = t;  // (not accounting for frame time here)
      Friend_Outcome_Text.frameNStart = frameN;  // exact frame index
      
      Friend_Outcome_Text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Friend_Outcome_Text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Friend_Outcome_Text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Friend_OutcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Friend_OutcomeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Friend_Outcome'-------
    Friend_OutcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var Friend_ITIComponents;
function Friend_ITIRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Friend_ITI'-------
    t = 0;
    Friend_ITIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ITI_friend.setText('+');
    // keep track of which components have finished
    Friend_ITIComponents = [];
    Friend_ITIComponents.push(ITI_friend);
    
    Friend_ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Friend_ITIRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Friend_ITI'-------
    // get current time
    t = Friend_ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ITI_friend* updates
    if (t >= 0.0 && ITI_friend.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ITI_friend.tStart = t;  // (not accounting for frame time here)
      ITI_friend.frameNStart = frameN;  // exact frame index
      
      ITI_friend.setAutoDraw(true);
    }

    frameRemains = 0.0 + ITI_f - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ITI_friend.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ITI_friend.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Friend_ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Friend_ITIRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Friend_ITI'-------
    Friend_ITIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Friend_ITI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Friend_blockkeyboard_allKeys;
var FriendblockComponents;
function FriendblockRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Friendblock'-------
    t = 0;
    FriendblockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Friend_blockkeyboard.keys = undefined;
    Friend_blockkeyboard.rt = undefined;
    _Friend_blockkeyboard_allKeys = [];
    // keep track of which components have finished
    FriendblockComponents = [];
    FriendblockComponents.push(Friend_BlockText);
    FriendblockComponents.push(Friend_blockkeyboard);
    
    FriendblockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FriendblockRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Friendblock'-------
    // get current time
    t = FriendblockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! _pj.in_es6(Friend_TaskLoop.thisN, [29, 59]))) {
        continueRoutine = false;
    } else {
        Friend_TaskLoop.finished = false;
    }
    
    
    // *Friend_BlockText* updates
    if (t >= 0 && Friend_BlockText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_BlockText.tStart = t;  // (not accounting for frame time here)
      Friend_BlockText.frameNStart = frameN;  // exact frame index
      
      Friend_BlockText.setAutoDraw(true);
    }

    
    // *Friend_blockkeyboard* updates
    if (t >= 0 && Friend_blockkeyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_blockkeyboard.tStart = t;  // (not accounting for frame time here)
      Friend_blockkeyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Friend_blockkeyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Friend_blockkeyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Friend_blockkeyboard.clearEvents(); });
    }

    if (Friend_blockkeyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = Friend_blockkeyboard.getKeys({keyList: ['space'], waitRelease: false});
      _Friend_blockkeyboard_allKeys = _Friend_blockkeyboard_allKeys.concat(theseKeys);
      if (_Friend_blockkeyboard_allKeys.length > 0) {
        Friend_blockkeyboard.keys = _Friend_blockkeyboard_allKeys[0].name;  // just the first key pressed
        Friend_blockkeyboard.rt = _Friend_blockkeyboard_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FriendblockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FriendblockRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Friendblock'-------
    FriendblockComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Friend_blockkeyboard.keys', Friend_blockkeyboard.keys);
    if (typeof Friend_blockkeyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Friend_blockkeyboard.rt', Friend_blockkeyboard.rt);
        routineTimer.reset();
        }
    
    Friend_blockkeyboard.stop();
    // the Routine "Friendblock" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Friend_ratingscaleComponents;
function Friend_ratingscaleRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Friend_ratingscale'-------
    t = 0;
    Friend_ratingscaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    Friend_Scale_Text.setText(friendsliderMsg);
    Friend_slider.reset()
    Friend_slider.markerPos = (- 2);
    Friend_slider.rating = (- 2);
    
    // keep track of which components have finished
    Friend_ratingscaleComponents = [];
    Friend_ratingscaleComponents.push(Friend_Scale_Text);
    Friend_ratingscaleComponents.push(Friend_slider);
    Friend_ratingscaleComponents.push(Friend_slider_button_text);
    
    Friend_ratingscaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var Friend_ratingvalue;
function Friend_ratingscaleRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Friend_ratingscale'-------
    // get current time
    t = Friend_ratingscaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Friend_Scale_Text* updates
    if (t >= 0.0 && Friend_Scale_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_Scale_Text.tStart = t;  // (not accounting for frame time here)
      Friend_Scale_Text.frameNStart = frameN;  // exact frame index
      
      Friend_Scale_Text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Friend_Scale_Text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Friend_Scale_Text.setAutoDraw(false);
    }
    
    // *Friend_slider* updates
    if (t >= 0.0 && Friend_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_slider.tStart = t;  // (not accounting for frame time here)
      Friend_slider.frameNStart = frameN;  // exact frame index
      
      Friend_slider.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Friend_slider.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Friend_slider.setAutoDraw(false);
    }
    Friend_slider.getMouseResponses();
    Friend_ratingvalue = Friend_slider.getRating();
    if ((Friend_slider.getRating() && (Friend_slider.markerPos !== null))) {
        Friend_ratingvalue = Friend_slider.getRating();
        if ((Friend_ratingvalue < (- 1.5))) {
            Friend_slider.markerPos = (- 2);
            Friend_slider.rating = (- 2);
        } else {
            if (((Friend_ratingvalue > (- 1.5)) && (Friend_ratingvalue < (- 0.5)))) {
                Friend_slider.markerPos = (- 1);
                Friend_slider.rating = (- 1);
            } else {
                if (((Friend_ratingvalue > (- 0.5)) && (Friend_ratingvalue < 0.5))) {
                    Friend_slider.markerPos = 0;
                    Friend_slider.rating = 0;
                } else {
                    if (((Friend_ratingvalue > 0.5) && (Friend_ratingvalue < 1.5))) {
                        Friend_slider.markerPos = 1;
                        Friend_slider.rating = 1;
                    } else {
                        if (((Friend_ratingvalue > 1.5) && (Friend_ratingvalue <= 2))) {
                            Friend_slider.markerPos = 2;
                            Friend_slider.rating = 2;
                        }
                    }
                }
            }
        }
    }
    
    
    // *Friend_slider_button_text* updates
    if (t >= 0.0 && Friend_slider_button_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Friend_slider_button_text.tStart = t;  // (not accounting for frame time here)
      Friend_slider_button_text.frameNStart = frameN;  // exact frame index
      
      Friend_slider_button_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Friend_slider_button_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Friend_slider_button_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Friend_ratingscaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Friend_ratingscaleRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Friend_ratingscale'-------
    Friend_ratingscaleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Friend_slider.response', Friend_slider.getRating());
    psychoJS.experiment.addData('Friend_slider.rt', Friend_slider.getRT());
    psychoJS.experiment.addData('Friend_slider.history', Friend_slider.getHistory());
    return Scheduler.Event.NEXT;
  };
}


var _Other_Start_keys_allKeys;
var Other_StartComponents;
function Other_StartRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Other_Start'-------
    t = 0;
    Other_StartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Other_Start_keys.keys = undefined;
    Other_Start_keys.rt = undefined;
    _Other_Start_keys_allKeys = [];
    // keep track of which components have finished
    Other_StartComponents = [];
    Other_StartComponents.push(Other_Start_Text);
    Other_StartComponents.push(Other_Start_keys);
    
    Other_StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Other_StartRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Other_Start'-------
    // get current time
    t = Other_StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Other_Start_Text* updates
    if (t >= 0.0 && Other_Start_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_Start_Text.tStart = t;  // (not accounting for frame time here)
      Other_Start_Text.frameNStart = frameN;  // exact frame index
      
      Other_Start_Text.setAutoDraw(true);
    }

    
    // *Other_Start_keys* updates
    if (t >= 0.0 && Other_Start_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_Start_keys.tStart = t;  // (not accounting for frame time here)
      Other_Start_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Other_Start_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Other_Start_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Other_Start_keys.clearEvents(); });
    }

    if (Other_Start_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = Other_Start_keys.getKeys({keyList: ['space'], waitRelease: false});
      _Other_Start_keys_allKeys = _Other_Start_keys_allKeys.concat(theseKeys);
      if (_Other_Start_keys_allKeys.length > 0) {
        Other_Start_keys.keys = _Other_Start_keys_allKeys[_Other_Start_keys_allKeys.length - 1].name;  // just the last key pressed
        Other_Start_keys.rt = _Other_Start_keys_allKeys[_Other_Start_keys_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Other_StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Other_StartRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Other_Start'-------
    Other_StartComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Other_Start_keys.keys', Other_Start_keys.keys);
    if (typeof Other_Start_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Other_Start_keys.rt', Other_Start_keys.rt);
        routineTimer.reset();
        }
    
    Other_Start_keys.stop();
    // the Routine "Other_Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Other_keyboard_allKeys;
var Other_TaskComponents;
function Other_TaskRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Other_Task'-------
    t = 0;
    Other_TaskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    Other_toptext.setText(risky_gain);
    Other_bottomtext.setText(risky_loss);
    Other_100text.setText(alt_certain);
    Other_keyboard.keys = undefined;
    Other_keyboard.rt = undefined;
    _Other_keyboard_allKeys = [];
    // keep track of which components have finished
    Other_TaskComponents = [];
    Other_TaskComponents.push(Other_topbox);
    Other_TaskComponents.push(Other_bottombox);
    Other_TaskComponents.push(Other_100);
    Other_TaskComponents.push(Other_toptext);
    Other_TaskComponents.push(Other_bottomtext);
    Other_TaskComponents.push(Other_100text);
    Other_TaskComponents.push(Other_cue);
    Other_TaskComponents.push(Other_keyboard);
    
    Other_TaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Other_TaskRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Other_Task'-------
    // get current time
    t = Other_TaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Other_topbox* updates
    if (t >= 0.0 && Other_topbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_topbox.tStart = t;  // (not accounting for frame time here)
      Other_topbox.frameNStart = frameN;  // exact frame index
      
      Other_topbox.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Other_topbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Other_topbox.setAutoDraw(false);
    }
    
    // *Other_bottombox* updates
    if (t >= 0.0 && Other_bottombox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_bottombox.tStart = t;  // (not accounting for frame time here)
      Other_bottombox.frameNStart = frameN;  // exact frame index
      
      Other_bottombox.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Other_bottombox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Other_bottombox.setAutoDraw(false);
    }
    
    // *Other_100* updates
    if (t >= 0.0 && Other_100.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_100.tStart = t;  // (not accounting for frame time here)
      Other_100.frameNStart = frameN;  // exact frame index
      
      Other_100.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Other_100.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Other_100.setAutoDraw(false);
    }
    
    // *Other_toptext* updates
    if (t >= 0.0 && Other_toptext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_toptext.tStart = t;  // (not accounting for frame time here)
      Other_toptext.frameNStart = frameN;  // exact frame index
      
      Other_toptext.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Other_toptext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Other_toptext.setAutoDraw(false);
    }
    
    // *Other_bottomtext* updates
    if (t >= 0.0 && Other_bottomtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_bottomtext.tStart = t;  // (not accounting for frame time here)
      Other_bottomtext.frameNStart = frameN;  // exact frame index
      
      Other_bottomtext.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Other_bottomtext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Other_bottomtext.setAutoDraw(false);
    }
    
    // *Other_100text* updates
    if (t >= 0.0 && Other_100text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_100text.tStart = t;  // (not accounting for frame time here)
      Other_100text.frameNStart = frameN;  // exact frame index
      
      Other_100text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Other_100text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Other_100text.setAutoDraw(false);
    }
    
    // *Other_cue* updates
    if (t >= 0.5 && Other_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_cue.tStart = t;  // (not accounting for frame time here)
      Other_cue.frameNStart = frameN;  // exact frame index
      
      Other_cue.setAutoDraw(true);
    }

    frameRemains = 0.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Other_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Other_cue.setAutoDraw(false);
    }
    
    // *Other_keyboard* updates
    if (t >= 0.5 && Other_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_keyboard.tStart = t;  // (not accounting for frame time here)
      Other_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Other_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Other_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Other_keyboard.clearEvents(); });
    }

    frameRemains = 0.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Other_keyboard.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Other_keyboard.status = PsychoJS.Status.FINISHED;
  }

    if (Other_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = Other_keyboard.getKeys({keyList: ['1', '2'], waitRelease: false});
      _Other_keyboard_allKeys = _Other_keyboard_allKeys.concat(theseKeys);
      if (_Other_keyboard_allKeys.length > 0) {
        Other_keyboard.keys = _Other_keyboard_allKeys[0].name;  // just the first key pressed
        Other_keyboard.rt = _Other_keyboard_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if ((Other_keyboard.keys === "1")) {
        Other_outcomeMsg = `You chose the gamble and ${task_gamble_outcome} ${task_gamble_amount}`;
    } else {
        if ((Other_keyboard.keys === "2")) {
            Other_outcomeMsg = `You chose the certain amount of ${alt_certain}`;
        } else {
            Other_outcomeMsg = "#";
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Other_TaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Other_TaskRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Other_Task'-------
    Other_TaskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Other_keyboard.keys', Other_keyboard.keys);
    if (typeof Other_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Other_keyboard.rt', Other_keyboard.rt);
        routineTimer.reset();
        }
    
    Other_keyboard.stop();
    return Scheduler.Event.NEXT;
  };
}


var Other_ISIComponents;
function Other_ISIRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Other_ISI'-------
    t = 0;
    Other_ISIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ISI_other.setText('+');
    // keep track of which components have finished
    Other_ISIComponents = [];
    Other_ISIComponents.push(ISI_other);
    
    Other_ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Other_ISIRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Other_ISI'-------
    // get current time
    t = Other_ISIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ISI_other* updates
    if (t >= 0.0 && ISI_other.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ISI_other.tStart = t;  // (not accounting for frame time here)
      ISI_other.frameNStart = frameN;  // exact frame index
      
      ISI_other.setAutoDraw(true);
    }

    frameRemains = 0.0 + ((2 - Other_keyboard.rt) + ISI_o) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ISI_other.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ISI_other.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Other_ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Other_ISIRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Other_ISI'-------
    Other_ISIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Other_ISI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Other_OutcomeComponents;
function Other_OutcomeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Other_Outcome'-------
    t = 0;
    Other_OutcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    Outcome_Text_.setText(Other_outcomeMsg);
    // keep track of which components have finished
    Other_OutcomeComponents = [];
    Other_OutcomeComponents.push(Outcome_Text_);
    
    Other_OutcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Other_OutcomeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Other_Outcome'-------
    // get current time
    t = Other_OutcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Outcome_Text_* updates
    if (t >= 0.0 && Outcome_Text_.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Outcome_Text_.tStart = t;  // (not accounting for frame time here)
      Outcome_Text_.frameNStart = frameN;  // exact frame index
      
      Outcome_Text_.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Outcome_Text_.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Outcome_Text_.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Other_OutcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Other_OutcomeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Other_Outcome'-------
    Other_OutcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var Other_ITIComponents;
function Other_ITIRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Other_ITI'-------
    t = 0;
    Other_ITIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ITI_other.setText('+');
    // keep track of which components have finished
    Other_ITIComponents = [];
    Other_ITIComponents.push(ITI_other);
    
    Other_ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Other_ITIRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Other_ITI'-------
    // get current time
    t = Other_ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ITI_other* updates
    if (t >= 0.0 && ITI_other.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ITI_other.tStart = t;  // (not accounting for frame time here)
      ITI_other.frameNStart = frameN;  // exact frame index
      
      ITI_other.setAutoDraw(true);
    }

    frameRemains = 0.0 + ITI_o - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ITI_other.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ITI_other.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Other_ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Other_ITIRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Other_ITI'-------
    Other_ITIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Other_ITI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Other_blockkeyboard_allKeys;
var OtherblockComponents;
function OtherblockRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Otherblock'-------
    t = 0;
    OtherblockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Other_blockkeyboard.keys = undefined;
    Other_blockkeyboard.rt = undefined;
    _Other_blockkeyboard_allKeys = [];
    // keep track of which components have finished
    OtherblockComponents = [];
    OtherblockComponents.push(Other_BlockText);
    OtherblockComponents.push(Other_blockkeyboard);
    
    OtherblockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function OtherblockRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Otherblock'-------
    // get current time
    t = OtherblockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! _pj.in_es6(Other_TaskLoop.thisN, [29, 59]))) {
        continueRoutine = false;
    } else {
        Other_TaskLoop.finished = false;
    }
    
    
    // *Other_BlockText* updates
    if (t >= 0 && Other_BlockText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_BlockText.tStart = t;  // (not accounting for frame time here)
      Other_BlockText.frameNStart = frameN;  // exact frame index
      
      Other_BlockText.setAutoDraw(true);
    }

    
    // *Other_blockkeyboard* updates
    if (t >= 0 && Other_blockkeyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_blockkeyboard.tStart = t;  // (not accounting for frame time here)
      Other_blockkeyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Other_blockkeyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Other_blockkeyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Other_blockkeyboard.clearEvents(); });
    }

    if (Other_blockkeyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = Other_blockkeyboard.getKeys({keyList: ['space'], waitRelease: false});
      _Other_blockkeyboard_allKeys = _Other_blockkeyboard_allKeys.concat(theseKeys);
      if (_Other_blockkeyboard_allKeys.length > 0) {
        Other_blockkeyboard.keys = _Other_blockkeyboard_allKeys[0].name;  // just the first key pressed
        Other_blockkeyboard.rt = _Other_blockkeyboard_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    OtherblockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function OtherblockRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Otherblock'-------
    OtherblockComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Other_blockkeyboard.keys', Other_blockkeyboard.keys);
    if (typeof Other_blockkeyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Other_blockkeyboard.rt', Other_blockkeyboard.rt);
        routineTimer.reset();
        }
    
    Other_blockkeyboard.stop();
    // the Routine "Otherblock" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var Other_ratingscaleComponents;
function Other_ratingscaleRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Other_ratingscale'-------
    t = 0;
    Other_ratingscaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    Other_slider.reset()
    /* Syntax Error: Fix Python code */
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    Other_ratingscaleComponents = [];
    Other_ratingscaleComponents.push(Other_Scale_Text);
    Other_ratingscaleComponents.push(Other_slider_button_text);
    Other_ratingscaleComponents.push(Other_slider);
    Other_ratingscaleComponents.push(key_resp_2);
    
    Other_ratingscaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Other_ratingscaleRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Other_ratingscale'-------
    // get current time
    t = Other_ratingscaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Other_Scale_Text* updates
    if (t >= 0.0 && Other_Scale_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_Scale_Text.tStart = t;  // (not accounting for frame time here)
      Other_Scale_Text.frameNStart = frameN;  // exact frame index
      
      Other_Scale_Text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Other_Scale_Text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Other_Scale_Text.setAutoDraw(false);
    }
    
    // *Other_slider_button_text* updates
    if (t >= 0.0 && Other_slider_button_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_slider_button_text.tStart = t;  // (not accounting for frame time here)
      Other_slider_button_text.frameNStart = frameN;  // exact frame index
      
      Other_slider_button_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Other_slider_button_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Other_slider_button_text.setAutoDraw(false);
    }
    
    // *Other_slider* updates
    if (t >= 0.0 && Other_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Other_slider.tStart = t;  // (not accounting for frame time here)
      Other_slider.frameNStart = frameN;  // exact frame index
      
      Other_slider.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Other_slider.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Other_slider.setAutoDraw(false);
    }
    /* Syntax Error: Fix Python code */
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    frameRemains = 0.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_2.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Other_ratingscaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Other_ratingscaleRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Other_ratingscale'-------
    Other_ratingscaleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Other_slider.response', Other_slider.getRating());
    psychoJS.experiment.addData('Other_slider.rt', Other_slider.getRT());
    psychoJS.experiment.addData('Other_slider.history', Other_slider.getHistory());
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    return Scheduler.Event.NEXT;
  };
}


var V2_2Components;
function V2_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'V2_2'-------
    t = 0;
    V2_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((Number.parseInt(expInfo["version"]) === 2)) {
        friendstart = 1;
        otherstart = 0;
    }
    
    // keep track of which components have finished
    V2_2Components = [];
    
    V2_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function V2_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'V2_2'-------
    // get current time
    t = V2_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    V2_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function V2_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'V2_2'-------
    V2_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "V2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _thankyou_key_allKeys;
var thankyouComponents;
function thankyouRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'thankyou'-------
    t = 0;
    thankyouClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    thankyou_key.keys = undefined;
    thankyou_key.rt = undefined;
    _thankyou_key_allKeys = [];
    // keep track of which components have finished
    thankyouComponents = [];
    thankyouComponents.push(thankyou_text);
    thankyouComponents.push(thankyou_key);
    
    thankyouComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function thankyouRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'thankyou'-------
    // get current time
    t = thankyouClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thankyou_text* updates
    if (t >= 0.0 && thankyou_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thankyou_text.tStart = t;  // (not accounting for frame time here)
      thankyou_text.frameNStart = frameN;  // exact frame index
      
      thankyou_text.setAutoDraw(true);
    }

    
    // *thankyou_key* updates
    if (t >= 0.0 && thankyou_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thankyou_key.tStart = t;  // (not accounting for frame time here)
      thankyou_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { thankyou_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { thankyou_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { thankyou_key.clearEvents(); });
    }

    if (thankyou_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = thankyou_key.getKeys({keyList: ['space'], waitRelease: false});
      _thankyou_key_allKeys = _thankyou_key_allKeys.concat(theseKeys);
      if (_thankyou_key_allKeys.length > 0) {
        thankyou_key.keys = _thankyou_key_allKeys[_thankyou_key_allKeys.length - 1].name;  // just the last key pressed
        thankyou_key.rt = _thankyou_key_allKeys[_thankyou_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    thankyouComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thankyouRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'thankyou'-------
    thankyouComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('thankyou_key.keys', thankyou_key.keys);
    if (typeof thankyou_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('thankyou_key.rt', thankyou_key.rt);
        routineTimer.reset();
        }
    
    thankyou_key.stop();
    // the Routine "thankyou" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var End_ITIComponents;
function End_ITIRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'End_ITI'-------
    t = 0;
    End_ITIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    /* Syntax Error: Fix Python code */
    ITI_end.setText('+');
    // keep track of which components have finished
    End_ITIComponents = [];
    End_ITIComponents.push(ITI_end);
    
    End_ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function End_ITIRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'End_ITI'-------
    // get current time
    t = End_ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ITI_end* updates
    if (t >= 0.0 && ITI_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ITI_end.tStart = t;  // (not accounting for frame time here)
      ITI_end.frameNStart = frameN;  // exact frame index
      
      ITI_end.setAutoDraw(true);
    }

    frameRemains = 0.0 + remainder - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ITI_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ITI_end.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    End_ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function End_ITIRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'End_ITI'-------
    End_ITIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "End_ITI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
