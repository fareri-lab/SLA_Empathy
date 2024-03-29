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
import pandas as pd

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

responseKeys=('1','6','z')

#get subjID
if DEBUG:
    subj_id='test_2' #change with specific test number/as needed
    friend_id='your friend'
    other_id='a stranger'
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
                if version == '' or version == ' ':
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
if friend_id == '':
    friend_id= 'your friend'

if other_id == '':
    other_id = 'the person you met today'

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
# shareStim =  visual.TextStim(win, pos=(0,1.5), height=1)

cue = visual.TextStim(win, pos=(0,1.5), height=1, text= '?')
#pictureStim =  visual.ImageStim(win, pos=(0,8.0), size=(6.65,6.65))
top_box = visual.Rect(win=win, name='polygon', width=(9.0,9.0)[0], height=(7.0,7.0)[1], ori=0, pos=(-10,5),lineWidth=5, lineColor=[1,1,1], lineColorSpace='rgb',fillColor=[0,0,0], fillColorSpace='rgb',opacity=1, depth=0.0, interpolate=True)
top_text = visual.TextStim(win, pos=[-10,5], height=1)
bottom_box = visual.Rect(win=win, name='polygon', width=(9.0,9.0)[0], height=(7.0,7.0)[1], ori=0, pos=(-10,-5),lineWidth=5, lineColor=[1,1,1], lineColorSpace='rgb',fillColor=[0,0,0], fillColorSpace='rgb',opacity=1, depth=0.0, interpolate=True)
bottom_text = visual.TextStim(win, pos=[-10, -5], height=1)
certain_box = visual.Rect(win=win, name='polygon', width=(9.0,9.0)[0], height=(7.0,7.0)[1], ori=0, pos=(10,0),lineWidth=5, lineColor=[1,1,1], lineColorSpace='rgb',fillColor=[0,0,0], fillColorSpace='rgb',opacity=1, depth=0.0, interpolate=True)
certain_text = visual.TextStim(win, pos=(10,0), height=1)
outcomeMsg = visual.TextStim(win, pos = (0,1), wrapWidth=20, height = 1.2)
block_msg = visual.TextStim(win, text='Great job! Please wait to proceed.', pos = (0,1), wrapWidth=20, height = 1.2)
# outcome screen
outcome_stim = visual.TextStim(win, text='')

outcome_map = {
    1: 'You chose the gamble and %s %s',
    2: 'You chose the certain amount of %s',
    999: '#'
    }
#     friendsname = expInfo['friend']
# friendMsg = (f'For this part of the task, suppose that your friend {friendsname} is in desperate need of money to pay off his/her credit card bills. \n\n\n In the following task, you will be making choices for {friendsname}. You will have $24 to use in this task. \n\n You will have the opportunity to add to this amount based on your decisions. The outcomes of each of your decisions will affect your friend, {friendsname}. \n\n\n Press ‘space’ to continue.')

# condition_screen = {
#     1: ''
#
# }
# instruction screen #
instruct_screen = visual.TextStim(win, text='In this experiment, you are going to make a series of monetary decisions. \n\nYou will have $24 to start with in this experiment.\n\n  You will have the opportunity to add to this amount based on your decisions.', pos = (0,1), wrapWidth=20, height = 1.2)
instruct_screen2 = visual.TextStim(win, text='On all trials of the experiment, you will be deciding between: \n\n(1) a  50% monetary gamble\n\n OR:\n\n(2) an 100% (i.e. guaranteed) monetary option.',pos = (0,1), wrapWidth=20,height=1.2)
instruct_screen3 = visual.TextStim(win, text = 'On most trials, you will be presented with a choice between a 50% chance of winning or losing money and a 100% chance of gaining nothing ($0). \n\nOn some trials, the choice will be between a 50% chance of gaining money or gaining $0 and a 100% chance of gaining a different monetary amount.\n\n Please indicate on each trial whether you accept the gamble or prefer the guarnteed option.' , pos = (0,1), wrapWidth=25, height = 1.2)
instruct_screen4 = visual.TextStim(win, text='Press with your left index finger to choose the option on the left side of the screen.\n\n Press with your right index finger to choose the option on the right side of the screen.', pos = (0,1),wrapWidth=20, height = 1.2)
#instruct_screen3 = visual.TextStim(win, text='You will be making three sets of choices throughout the course of the experiment, with a different allotment of $24 each time.  \n\n Some of your choices will affect only you, others will affect someone else.\n\n You will press the ‘1’ key to choose the gamble or the ‘2’ key to choose the guaranteed option, given the amounts shown. Press the spacebar to begin', pos = (0,1),wrapWidth=20, height = 1.2)
condition_screen = visual.TextStim(win,pos = (0,1), wrapWidth=20, height = 0.7)


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
'%s/Self.csv' % (os.getcwd())
trial_data_friend  = [r for r in csv.DictReader(open('%s/Friend_SLA_96.csv' % (os.getcwd()),'rU', encoding="utf-8"))]
trial_data_self = [r for r in csv.DictReader(open('%s/Self_SLA_96.csv' % (os.getcwd()),'rU', encoding="utf-8"))]
trial_data_other  = [r for r in csv.DictReader(open('%s/Other_SLA_96.csv' % (os.getcwd()),'rU', encoding="utf-8"))]

#set up trial handlers
trials_run_friend = data.TrialHandler(trial_data_friend[:], 1, method="sequential") #change to [] for full run
trials_run_self = data.TrialHandler(trial_data_self[:], 1, method="sequential") #change to [] for full run
trials_run_other = data.TrialHandler(trial_data_other[:], 1, method="sequential")

stim_map = {
  '2': other_id,
  '1': friend_id,
  '0': 'You',
  }

#### TASK ####

#reset globalClock for beginning of task
globalClock.reset()

drift_list = pd.DataFrame(columns = ['trial_drift','ITI_drift'])
#drift_list['total_drift'] = ''
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

    instruct_screen4.draw()
    win.flip()
    event.waitKeys(keyList=('space'))

# main task loop
def do_run(run,trials):
    resp = []
    fileName=log_file.format(subj_id)

    #wait for trigger from scanner (= key press)

#    ready_screen.draw()
#    win.flip()
#    event.waitKeys(keyList=('space')) ## insert fmri signal

    globalClock.reset()
    studyStart = globalClock.getTime()
    condition_screen.setText('')
    if  trials == trials_run_self:
        # condition_screen.setText('For the next part of the task, you will be making choices for someone else. \n\n\n For the following task, suppose that %s is in desperate need of money to pay off his/her credit card bills. \n\n\n You will have $24 to use in this task. \n\n You will have the opportunity to add to this amount based on your decisions. The outcomes of each of your decisions will affect %s. Press ‘space’ to continue.' % (friend_id, friend_id))
        condition_screen.setText('For the first round of the task, please consider your choices carefully. \n\n\n Remember, you will have $24 to use in this task. \n\n You will have the opportunity to add to this amount based on your decisions, but you could also lose some of your money. Please wait for the task to begin and remember to keep your head still.')
        condition_screen.draw()
        win.flip()
        event.waitKeys(keyList=('space'))
        ready_screen.draw()
        win.flip()
        event.waitKeys(keyList=('5'))

    elif trials == trials_run_friend:
        condition_screen.setText('For the next round of the task, you will be making choices for %s. \n\n\n You still have $24 to use in the experiment, but this time, the outcomes affect only %s, and not you. Please wait for the next round to begin.' % (friend_id, friend_id))
        condition_screen.draw()
        win.flip()
        event.waitKeys(keyList=('space'))
        ready_screen.draw()
        win.flip()
        event.waitKeys(keyList=('5'))

    elif trials == trials_run_other:
        condition_screen.setText('For the next round of the task, you will be making choices for %s. \n\n\n You still have $24 to use in the experiment, but this time, the outcomes affect only %s, and not you. Please wait for the next round to begin.' % (other_id, other_id,))
        condition_screen.draw()
        win.flip()
        event.waitKeys(keyList=('space'))
        ready_screen.draw()
        win.flip()
        event.waitKeys(keyList=('5'))

    # Initial Fixation screen
    fixation.draw()
    win.flip()
    core.wait(initial_fixation_dur)



    for trial in trials:

        # add trial logic
        # i.e. show stimuli
        # get resp
        # add data to 'trial'

        # condition_label = stim_map[trial['Partner']]
        # shareStim.setText(condition_label)
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

        # while timer.getTime() < .5:
        #     shareStim.draw()
        #     win.flip()

        while timer.getTime() < decision_dur:
            # shareStim.draw()
            top_box.draw()
            top_text.draw()
            bottom_box.draw()
            bottom_text.draw()
            certain_box.draw()
            certain_text.draw()
            win.flip()

            resp != event.getKeys(keyList = responseKeys)

        cue_onset = globalClock.getTime()

        while timer.getTime() < trial_dur:
            # shareStim.draw()
            cue.draw()
            top_box.draw()
            top_text.draw()
            bottom_box.draw()
            bottom_text.draw()
            certain_box.draw()
            certain_text.draw()
            win.flip()
            stim_duration = cue_onset - trial_onset
            resp = event.getKeys(keyList = responseKeys)

            if len(resp) > 0:
                if resp[0] == 'z':
                    os.chdir(subjdir)
                    trials.saveAsWideText(fileName)
                    os.chdir(expdir)
                    win.close()
                    core.quit()
                resp_val = int(resp[0])

                #answer = 1
                # if resp_val == 5:
                #
                #     continue

                if resp_val == 6:
                    top_text.setColor('darkorange')
                    bottom_text.setColor('darkorange')
                    #response = gamble_outcome
                    outcomeMsg.setText(outcome_map[1] % (gamble_outcome,gamble_amount))
                    gamble_outcome = trial['task_gamble_amount']

                elif resp_val == 1:
                    certain_text.setColor('darkorange')
                    #response = trial['alt_certain']
                    outcomeMsg.setText(outcome_map[2] % (certain_amount))

               # shareStim.draw()
                top_box.draw()
                top_text.draw()
                bottom_box.draw()
                bottom_text.draw()
                certain_box.draw()
                certain_text.draw()
                cue.draw()
                win.flip()
                resp_onset = globalClock.getTime()
                rt = resp_onset - cue_onset
                core.wait(.1)
                break
            else:
                resp_val = 999
                outcomeMsg.setText(outcome_map[999])
                #response = 999
                resp_onset = globalClock.getTime()
                rt = resp_onset - cue_onset
                #highlow = 999
                #rt = 0
                core.wait(.1)

                # break

        trials.addData('trial_onset', trial_onset)
        trials.addData('bpress', resp_val)
        trials.addData('cue_onset', cue_onset)
        #trials.addData('resp', response)
        trials.addData('resp_onset', resp_onset)
        trials.addData('stim_duration',stim_duration)
        stim_duration_drift = stim_duration - 2
        trials.addData('stim_dur_drift',stim_duration_drift)
        trials.addData('rt', rt)

        #reset rating number and amount
        top_text.setColor('#FFFFFF')
        bottom_text.setColor('#FFFFFF')
        certain_text.setColor('#FFFFFF')
        top_text.setText()
        bottom_text.setText()
        certain_text.setText()

        #break
        #ISI
        #logging.log(level=logging.DATA, msg='ISI') #send fixation log event
        timer.reset()
        # isi_for_trial = float(trial['ISI_s'])

        #next two lines account for rt of decision and adds to the ISI
        given_ISI = float(trial['ISI'])
        isi_for_trial = float(given_ISI+(2-rt+0.1))

        ISI_onset=globalClock.getTime()
        cue_duration = ISI_onset - cue_onset
        cue_duration_drift = cue_duration - 2
        trials.addData('ISI_onset', ISI_onset)
        trials.addData('cue_duration',cue_duration)
        trials.addData('cue_dur_drift', cue_duration_drift)

        fixation.draw()
        win.flip()
        core.wait(isi_for_trial) # + wait_dur) - globalClock.getTime()) ##test #(2-reaction_time)+(ISI_s)

        ISI_offset = globalClock.getTime()
        actual_ISI = ISI_offset-ISI_onset
        ISI_drift = actual_ISI-isi_for_trial

        trials.addData('ISI_offset', ISI_offset)
        trials.addData('expected_ISI',isi_for_trial)
        trials.addData('actual_ISI', actual_ISI)
        trials.addData('ISI_drift', ISI_drift)


        #outcome phase
        # if len(resp) > 0:
        timer.reset()
        outcomeMsg.draw()
        win.flip()
        outcome_onset = globalClock.getTime()
        core.wait(1)
        outcome_offset = globalClock.getTime()
        outcome_dur = outcome_offset - outcome_onset
        outcome_drift = outcome_dur - 1

        trials.addData('outcome_onset', outcome_onset)
        trials.addData('outcome_duration', outcome_dur)
        trials.addData('outcome_drift',outcome_drift)
        trials.addData('outcome_offset', outcome_offset)
        trials.addData('trial_duration', outcome_offset-trial_onset)

        drift_list.loc[trial['Trial_num'],'trial_drift'] = float(ISI_drift) + float(cue_duration_drift) + float(stim_duration_drift) + float(outcome_drift)


        #ITI
        #logging.log(level=logging.DATA, msg='ITI') #send fixation log event
        timer.reset()

        if trial['Trial_num'] == '32' or trial['Trial_num'] == '64' or trial['Trial_num'] == '96':
            test_print = 'last trial of block'
            #iti_for_trial = float(final_fixation_dur - (sum(drift_list['trial_drift']))+(sum(drift_list['ITI_drift'])))
            iti_for_trial = float(trial['ITI']) + 4
            print(iti_for_trial)
            print(type(iti_for_trial))
            #try sum of one series plus sum of the other series

            #iti_for_trial = sum(ISI_list['drift'])
            # core.wait(10)
            # this should instead be a long fixation minus the sum of ISI_drift
            # iti_for_trial = final_fixation_dur - (sum(drift_list['trial_drift']) + (sum(drift_list['ITI_drift'])))
            fixation.draw()
            win.flip()
            ITI_onset = globalClock.getTime()
            # core.wait(.5)
            core.wait(iti_for_trial)
            ITI_offset = globalClock.getTime()
            actual_ITI = ITI_offset-ITI_onset
            ITI_drift = actual_ITI-iti_for_trial
            print(ITI_drift)
            print(type(ITI_drift))
            drift_list.loc[trial['Trial_num'],'ITI_drift'] = float(ITI_drift)

        else:
            test_print = 'got here'
            iti_for_trial = float(trial['ITI'])
            fixation.draw()
            win.flip()
            ITI_onset = globalClock.getTime()
            # core.wait(.5)
            core.wait(iti_for_trial)
            ITI_offset = globalClock.getTime()
            actual_ITI = ITI_offset-ITI_onset
            ITI_drift = actual_ITI-iti_for_trial
            print(ITI_drift)
            print(type(ITI_drift))
            drift_list.loc[trial['Trial_num'],'ITI_drift'] = float(ITI_drift)


        trials.addData('ITI_onset', ITI_onset)
        trials.addData('test_print',test_print)
        trials.addData('ITI_offset', ITI_offset)
        trials.addData('expected_ITI', float(iti_for_trial))
        trials.addData('actual_ITI', actual_ITI)
        trials.addData('ITI_drift', float(ITI_drift))

        if trial['Trial_num'] == '32' or trial['Trial_num'] == '64' or trial['Trial_num'] == '96':
            block_msg.draw()
            win.flip()
            # core.wait(10)
            event.waitKeys(keyList=('5'))
        else:
            core.wait(.01)

#        block_msg.draw()
#        win.flip()
#         core.wait(10)
#        event.waitKeys(keyList=('space'))


    # Final Fixation screen after trials completed

    #timer.reset()
    #finalITI_onset = globalClock.getTime()
    #fixation.draw()
    #win.flip()
    #core.wait(sum(drift_list['total_drift'])+0.02)
    #core.wait(sum(ISI_drift))
    #finalITI_offset = globalClock.getTime()
    #print(globalClock.getTime())
    #trials.addData('finalITI_onset', finalITI_onset)
    #trials.addData('finalITI_offset', finalITI_offset)


    os.chdir(subjdir)
    trials.saveAsWideText(fileName)
    os.chdir(expdir)

if len (version)==1:
    if run == 1:
        do_run(0,trials_run_self)
        do_run(0,trials_run_friend)
        do_run(0,trials_run_other)
    elif run == 2:
        do_run(1,trials_run_self)
        do_run(1,trials_run_other)
        do_run(1,trials_run_friend)
        # do_run(1,trials_run_other)
        # do_run(trials_run_friend)
    #     do_run(1, trials_run2)
    # elif run == 3:
    #z
    #     do_run(2, trials_run3)
    # elif run == 4:zz
    #     do_run(3, trials_run4)
    # elif run == 5:
    #     do_run(4, trials_run5)
    #elif run == 6:
    #    do_run(5, trials_run6)
# elif
    else: 'Run index is not permissible.'
else:
    for run, trials in enumerate([trials_run_friend,trials_run_self, trials_run_other]):
        do_run(run, trials)

# Exit
exit_screen.draw()
win.flip()
event.waitKeys()
