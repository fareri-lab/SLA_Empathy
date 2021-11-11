#### SLA_imaging ####

# Melanie Ruiz
# 10/2021


### specs ###
# add task description here

### timing ###
# add timing info here

#import modules

from psychopy import visual, core, event, gui, data, sound, logging
import os
import sys
import csv
import datetime
import random

#maindir = os.getcwd()

#parameters
DEBUG = False

frame_rate=1
initial_fixation_dur = 4
final_fixation_dur = 10
instruct_dur=3
outcome_dur=1
trial_dur = 4
decision_dur=2

responseKeys=('1','2','z')

#get subjID
if DEBUG:
    subj_id='test_2' #change with specific test number/as needed
    friend_id='pal'
    other_id='stranger'
    version='1'
    run = int(version)
    screen='n'

else:
    subjDlg=gui.Dlg(title="Empathy Task")
    subjDlg.addField('Participant: ') #0
    subjDlg.addField('Enter Friend Name: ') #1
    subjDlg.addField('Enter Partner Name: ') #NOTE: PARTNER IS THE CONFEDERATE/STRANGER #2
    subjDlg.addField('Version:') #3
    subjDlg.addField('Full Screen? (Enter lowercase: y or n):') #4
    subjDlg.show()


# exit_screen.draw()
# win.flip()
# event.waitKeys()

    if gui.OK:
            subj_id=subjDlg.data[0]
            friend_id=subjDlg.data[1]
            other_id=subjDlg.data[2]
            version=subjDlg.data[3]
            screen=subjDlg.data[4]
            if (not subj_id == False):
                if (not version):
                    run = 1
                elif len(version) == 1: #if user enters an ONLY run - run only the specified run
                    run = int(version);
                    print('Running Run %d' %int(version))
                else:
                    print('Something went wrong. Here are your options: \n1) Run all runs: Leave the Select Run field empty. \n2) Run a single run: Enter run number (1-5) in Select Run Field. Please try again.')
            else:
                print('Please enter subject ID. Consult the particiant folder for the correct ID')
                sys.exit()
    else:
        sys.exit()
    #         if (subj_id == False):
    #             print ('Please enter subject ID. Consult the particiant folder for the correct ID')
    #             sys.exit()
    # else:
    #     sys.exit()

run_data = {
    'Participant ID': subj_id,
    'Date': str(datetime.datetime.now()),
    'Description': 'SLA Emp Task'
    }
useFullScreen= ''
#window setup
if screen == 'y':
    useFullScreen=True
    useDualScreen=1
if screen == 'n':
    useFullScreen=False
    useDualScreen=0
if (screen != 'y') and (screen != 'n'):
    print ('Please specify how you want to present this task. Please enter y (yes) or n (no).')

win = visual.Window([800,600], monitor="testMonitor", units="deg", fullscr=useFullScreen, allowGUI=False, screen=useDualScreen) #set screen to 1 for dual monitor

#define stimulus
fixation = visual.TextStim(win, text="+", height=2)
ready_screen = visual.TextStim(win, text="Please wait for this round of the game to begin. \n\nRemember to keep your head still!", height=1.5)
#waiting = visual.TextStim(win, text="Waiting...", height=1.5)

#decision screen
shareStim =  visual.TextStim(win, pos=(0,1.5), height=1)

cue = visual.TextStim(win, pos=(0,1.5), height=1, text= '?')
#pictureStim =  visual.ImageStim(win, pos=(0,8.0), size=(6.65,6.65))
top_text = visual.TextStim(win, pos=[-10,5], height=1)
bottom_text = visual.TextStim(win, pos=[-10, -5], height=1)
certain_text = visual.TextStim(win, pos=(10,0), height=1)
outcomeMsg = visual.TextStim(win, pos = (0,1), wrapWidth=20, height = 1.2)
block_msg = visual.TextStim(win, text='', pos = (0,1), wrapWidth=20, height = 1.2)
# outcome screen
outcome_stim = visual.TextStim(win, text='')

outcome_map = {
    1: 'You chose the gamble and %s %s',
    2: 'You chose the certain amount of %s',
    999: '#'
    }

# instruction screen #
instruct_screen = visual.TextStim(win, text='In this experiment, you are going to make a series of monetary decisions. \n\nYou will have $24 to start with in this experiment.\n\n  You will have the opportunity to add to this amount based on your decisions.  Press the spacebar to continue.', pos = (0,1), wrapWidth=20, height = 1.2)
instruct_screen2 = visual.TextStim(win, text='On all trials of the experiment, you will be deciding between: \n\n(1) a  50% monetary gamble\n\n OR:\n\n(2) an 100% (i.e. guaranteed) monetary option.\n\n\nOn most trials, you will be presented with a choice between a 50% chance of winning or losing money and a 100% chance of gaining nothing ($0). \n\n\nOn some trials, the choice will be between a 50% chance of gaining money or gaining $0 and a 100% chance of gaining a different monetary amount.  \n\n\nPress the space bar to continue.', pos = (0,1), wrapWidth=20, height = 0.7)
instruct_screen3 = visual.TextStim(win, text='You will be making three sets of choices throughout the course of the experiment, with a different allotment of $24 each time.  \n\n Some of your choices will affect only you, others will affect someone else.\n\n You will press the ‘1’ key to choose the gamble or the ‘2’ key to choose the guaranteed option, given the amounts shown. \n\n\n Please press the spacebar to watch a short demonstration of what each trial will look like.', pos = (0,1), wrapWidth=20, height = 1.2)

#exit
exit_screen = visual.TextStim(win, text='Thanks for playing! Please wait for instructions from the researcher.', pos = (0,1), wrapWidth=20, height = 1.2)

#logging
expdir = os.getcwd()
subjdir = '%s/logs/%s' % (expdir, subj_id)
if not os.path.exists(subjdir):
    os.makedirs(subjdir)
log_file = os.path.join(subjdir,'sub-{}_SLAempathy_raw.csv')

#timing
globalClock = core.Clock()
timer = core.Clock()

#read in stimuli
trial_data_self = [r for r in csv.DictReader(open('/Users/dfareri/Dropbox/Dominic/Github/fareri-lab/SLA_empathy/psychopy/Self_SLA_96.csv','rU', encoding="utf-8"))]
trial_data_friend  = [r for r in csv.DictReader(open('/Users/dfareri/Dropbox/Dominic/Github/fareri-lab/SLA_empathy/psychopy/Friend_SLA_96.csv','rU', encoding="utf-8"))]
trial_data_other  = [r for r in csv.DictReader(open('/Users/dfareri/Dropbox/Dominic/Github/fareri-lab/SLA_empathy/psychopy/Other_SLA_96.csv','rU', encoding="utf-8"))]

#set up trial handlers
trials_run_self = data.TrialHandler(trial_data_self[:], 1, method="sequential") #change to [] for full run
trials_run_friend = data.TrialHandler(trial_data_friend[:], 1, method="sequential") #change to [] for full run
trials_run_other = data.TrialHandler(trial_data_other[:], 1, method="sequential")

stim_map = {
  '2': other_id,
  '1': friend_id,
  '0': 'You',
  }

#### TASK ####

#reset globalClock for beginning of task
globalClock.reset()

#present instructions
curTime=globalClock.getTime()
startTime=curTime
if not DEBUG:
    instruct_screen.draw()
    win.flip()
    event.waitKeys(keyList=('space'))

    instruct_screen2.draw()
    win.flip()
    event.waitKeys(keyList=('space'))

    instruct_screen3.draw()
    win.flip()
    event.waitKeys(keyList=('space'))

# main task loop
def do_run(trials):
    resp = []
    fileName=log_file.format(subj_id)
    #wait for trigger from scanner (= key press)

    ready_screen.draw()
    win.flip()
    event.waitKeys(keyList=('space')) ##fmri signal

    globalClock.reset()
    studyStart = globalClock.getTime()

    # Initial Fixation screen
    fixation.draw()
    win.flip()
    core.wait(initial_fixation_dur)

    for trial in trials:

        # add trial logic
        # i.e. show stimuli
        # get resp
        # add data to 'trial'

        condition_label = stim_map[trial['Partner']]
        shareStim.setText(condition_label)
        gain_amount = trial['risky_gain']
        respcTop = '%s' % gain_amount
        top_text.setText(respcTop)
        loss_amount = trial['risky_loss']
        respcBottom = '%s' % loss_amount
        bottom_text.setText(respcBottom)
        certain_amount = trial['alt_certain']
        respc100 = '%s' % certain_amount
        certain_text.setText(respc100)
        gamble_outcome = trial['task_gamble_outcome']
        gamble_amount = trial['task_gamble_amount']

        #decision phase
        timer.reset()

        event.clearEvents()

        resp = []

        resp_val=None
        resp_onset=None

        #answer=0
        trial_onset=globalClock.getTime()
        ISI_pad = []

        # while timer.getTime() < .5:
        #     shareStim.draw()
        #     win.flip()

        while timer.getTime() < decision_dur:
            shareStim.draw()
            top_text.draw()
            bottom_text.draw()
            certain_text.draw()
            win.flip()

        while timer.getTime() < trial_dur-2:
            shareStim.draw()
            cue.draw()
            top_text.draw()
            bottom_text.draw()
            certain_text.draw()
            win.flip()


            #if answer == 0:
        resp = event.getKeys(keyList = responseKeys)

        if len(resp) > 0:
            if resp[0] == 'z':
                os.chdir(subjdir)
                trials.saveAsWideText(fileName)
                os.chdir(expdir)
                win.close()
                core.quit()
            resp_val = int(resp[0])
            resp_onset = globalClock.getTime()
            rt = resp_onset - trial_onset
            ISI_pad = decision_dur-rt
            #answer = 1
            if resp_val == 1:
                top_text.setColor('red')
                bottom_text.setColor('red')
                response = gamble_outcome
                outcomeMsg.setText(outcome_map[1] % (gamble_outcome,gamble_amount))

                gamble_outcome = trial['task_gamble_amount']


            elif resp_val == 2:
                certain_text.setColor('red')
                response = trial['alt_certain']
                outcomeMsg.setText(outcome_map[2] % (certain_amount))
            shareStim.draw()
            top_text.draw()
            bottom_text.draw()
            certain_text.draw()
            cue.draw()
            win.flip()
            core.wait(.5)
            # break

        else:
            resp_val = 999
            outcomeMsg.setText(outcome_map[999])
            response = 999
            resp_onset = globalClock.getTime()
            #highlow = 999
            rt = 0
            ISI_pad = 0

            # break

        trials.addData('onset', trial_onset)
        trials.addData('bpress', resp_val)
        trials.addData('resp', response)
        trials.addData('resp_onset', resp_onset)
        #trials.addData('highlow', highlow)
        trials.addData('rt', rt)
        trials.addData('ISIpad', ISI_pad)

        #reset rating number and amount
        top_text.setColor('#FFFFFF')
        bottom_text.setColor('#FFFFFF')
        certain_text.setColor('#FFFFFF')
        top_text.setText()
        bottom_text.setText()
    
        #break
        #ISI
        #logging.log(level=logging.DATA, msg='ISI') #send fixation log event
        ISI_onset=globalClock.getTime()
        trials.addData('ISI_onset', ISI_onset)
        timer.reset()
        # isi_for_trial = float(trial['ISI_s'])
        given_ISI = float(trial['ISI_s'])
        isi_for_trial = float(2-rt+given_ISI)
    
        fixation.draw()
        win.flip()
        core.wait(isi_for_trial) # + wait_dur) - globalClock.getTime()) ##test #(2-reaction_time)+(ISI_s)
        ISI_offset = globalClock.getTime()
        trials.addData('ISI_offset', ISI_offset)

        # #outcome phase
        # if len(resp) > 0:
        outcome_onset = globalClock.getTime()
        trials.addData('outcome_onset', outcome_onset)
        timer.reset()
        outcomeMsg.draw()
        win.flip()
        core.wait(2)
        outcome_offset = globalClock.getTime()
        
        trials.addData('outcome_offset', outcome_offset)
        trials.addData('duration', outcome_offset-trial_onset)


        #ITI
        #logging.log(level=logging.DATA, msg='ITI') #send fixation log event
        timer.reset()
        iti_for_trial = float(trial['ITI_s'])
        iti_dur = iti_for_trial
        ITI_onset = globalClock.getTime()

        fixation.draw()
        win.flip()
        # core.wait(.5)
        core.wait(iti_for_trial)
        ITI_offset = globalClock.getTime()
        trials.addData('ITI_onset', ITI_onset)
        trials.addData('ITI_offset', ITI_offset)

#if trial['Trial_num'] == 31 or 63:
        #block_msg.draw()
        #win.flip()





    # Final Fixation screen after trials completed
    fixation.draw()
    win.flip()
    core.wait(1)
    print(globalClock.getTime())

    os.chdir(subjdir)
    trials.saveAsWideText(fileName)
    os.chdir(expdir)

if len (version)==1:
    if run == 1:
        do_run(trials_run_self)
    # elif run == 2:
    #     do_run(1, trials_run2)
    # elif run == 3:
    #
    #     do_run(2, trials_run3)
    # elif run == 4:
    #     do_run(3, trials_run4)
    # elif run == 5:
    #     do_run(4, trials_run5)
    #elif run == 6:
    #    do_run(5, trials_run6)
    else: 'Run index is not permissible.'
else:
    for run, trials in enumerate([trials_run_self]):
        do_run(run, trials)

# Exit
exit_screen.draw()
win.flip()
event.waitKeys()
