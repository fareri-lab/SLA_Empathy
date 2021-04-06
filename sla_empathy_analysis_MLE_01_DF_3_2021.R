# SLA Model-Based Analysis
#
# Script to import and analyze Social Loss Aversion (SLA) data from collaboration with Dominic Fareri.
# PSH 3/31/2017

rm(list = ls());
library(lme4);

##FOR EMPATHY DATA
#Subject: subj id
#Partner: 0 = self, 1 = stranger, -1 = friend
#SNS: 0 = self, 1 = social
#Sub 158 exclude from analyses because of excess number of missed trials.


plotPTdata <- function(gains,losses,certain,choices,titletxt){
  color = array(dim=length(choices));
  color[choices==1] = 'green';
  color[choices==0] = 'red';
  goInd = certain > 0;
  mvInd = certain == 0;
  par(mfrow=c(1,2))
  plot(gains[mvInd],losses[mvInd],col=color[mvInd],main=titletxt)
  plot(gains[goInd],certain[goInd],col=color[goInd],main=titletxt)
}


#wd = '~/Documents/Dropbox/Libraries/R_lib/SLA/';
setwd(getwd());

# d = read.csv('SLA_forPete.csv');
d = read.csv('SLA_forPete_updated5_2018_duplicateRemoved.csv');
d = d[is.finite(d$RT),]; # Dropping trials without RTs

# d$Partner[d$Partner==3] = 2; # fixing a data entry error

nS = length(unique(d$Subject));
subjID = unique(d$Subject);
nCond = length(unique(d$Condition)); #need to change this to Condition (self, friend, stranger)
subjPartner = matrix(nrow = nS,ncol = 1);
for (s in 1:nS){
  subjPartner[s] = unique(d$Condition[d$Subject==s])
}


nTtoofast = array(data=NA,dim=c(nS,nCond));
for(s in 1:nS){
  for(cnd in 1:nCond){
    nTtoofast[s,cnd] = sum(d$RT[d$Subject==s & d$Condition==(cnd-1)]<200); # see gamble for 2s; then question mark. NBD.
  }
}


nParams = 3; # rho, lambda, mu

est_independent = array(data = NA, dim = c(nParams*2+4,nS,nCond));
# varnames = c('rho','lambda','mu','R.se','L.se','M.se','nLL','lrt','lrtp','pctpred')
# est_independent <- as.data.frame(est_independent)
# colnames(est_independent) = varnames
convergence = array(data = NA, dim = c(nS,nCond));

niter = 500;

starttime = Sys.time();

eps = .Machine$double.eps;
source('negLLprospect.R')
library('matrixStats')

for(s in 1:nS){
  for(cnd in 1:nCond){
    
    tmpd = d[d$Subject==s & d$Condition==cnd-1,];
    
    tmpd = tmpd[tmpd$RT>0,];
    
    plotPTdata(tmpd$Amount1,tmpd$Amount2,tmpd$Certain,tmpd$Response,sprintf('subject %d; condition %d',s,cnd));
    
    allpars = array(0,c(nParams,niter));
    allnlls = array(0,c(1,niter));
    allhess = array(0,c(nParams,nParams,niter));
    
    for(n in 1:niter){
      # THIS CAN BE SENSITIVE TO STARTING VALUES; NEED TO ITERATE OVER THIS
      set.seed(Sys.time());
      rinit = runif(1,0.3,1.3);
      linit = runif(1,0.3,3);
      minit = runif(1,0.3,3);
      
      output <- optim(c(rinit,linit,minit),negLLprospect,
                      gains=tmpd$Amount1,losses=tmpd$Amount2,certains=tmpd$Certain,choices=tmpd$Response,
                      method="L-BFGS-B",lower=c(.01,.01,.01),upper=c(2,5,15),hessian=TRUE,control = list(reltol = 1e-10));
      
      allpars[,n] <- output$par;
      allnlls[n] = output$value;
      allhess[,,n] = output$hessian;
    }
    
    ind = allnlls==min(allnlls)
    ind = min(which(ind==TRUE))
    
    se = sqrt(diag(solve(allhess[,,ind])));
    # est_independent = array(data = NA, dim = c(nParams*2+4,nS,nCond));
    
    convergence[s,cnd] = output$convergence;
    
    est_independent[1:3,s,cnd] = allpars[1:3,ind];
    est_independent[4:6,s,cnd] = se[1:3];
    est_independent[7,s,cnd] = allnlls[ind];
    
    predC = 0.5 * tmpd$Amount1^est_independent[1,s,cnd] - 
      0.5 * (est_independent[2,s,cnd] * (-tmpd$Amount2)^est_independent[1,s,cnd]) >
      tmpd$Certain^est_independent[1,s,cnd];
    est_independent[8,s,cnd] = mean(as.numeric(predC==as.logical(tmpd$Response)));
    
    nullnll = negLLprospect(c(0,0,0),tmpd$Amount1,tmpd$Amount2,tmpd$Certain,tmpd$Response);
    est_independent[9,s,cnd] = -2*(est_independent[7,s,cnd] - nullnll);
    est_independent[10,s,cnd] = 1-pchisq(est_independent[9,s,cnd],df=3);
    
    remove(tmpd,se,nullnll,predC,ind);
  }
  cat("\ndone with",subjID[s])
}

# show(results)
show(Sys.time()-starttime)

### GLMs ###

###lines below are unnecessary because Empathy data are already coded appropriately.
###d$SNS represents social (1) or self (0)
###d$Condition represents self (0), stranger (1), friend (-1)


#d2 <- d;
#d2$PartnerF <- as.factor(d2$Partner); # 0 when SELF; 1 when OTHER, 2 when BOTH
#d2$ConditionF <- as.factor(d2$Condition);
#d2$selfother <- as.numeric(d2$Partner > 0); # 1 when someone else is involved, 0 when it's just you
#d2$ConditionexclSelf <- as.factor((d2$Condition+1)*d2$selfother); # 0 when SELF; 1 when stranger is involved, 2 when friend is involved

#d2$PartnerRecode <- d2$Partner; 
#d2$PartnerRecode[d2$PartnerRecode == 2] <- -1; # 0 when SELF; 1 when OTHER, -1 when BOTH
#d2$ConditionRecode <- (d2$Condition+1)*d2$selfother;
#d2$ConditionRecode[d2$ConditionRecode==2] <- -1; # 0 when SELF; 1 when stranger, -1 when friend

fit1 = glmer(Response ~ 1 + Amount1 + Amount2 + Certain + (0 + Amount1 + Amount2 + Certain | Subject),data=d,family='binomial')
summary(fit1)

# Fitting w/ FFX of 'condition' and 'partner' is complicated. 
# Partner is whether choices are for self, other, or both. Everyone experiences all 3.
# Condition is about who the other is. People are in one or the other condition.

fit3 = glmer(Response ~ 1 + Amount1 + Amount2 + Certain + SNS + ConditionRecode + 
               (0 + Amount1 + Amount2 + Certain | Subject),data=d,family='binomial',
             control = glmerControl(optCtrl=list(maxfun=100000)));
summary(fit3)

# Strong effect of self/other (more conservative); no significant condition effect
# (stranger/friend). Strong Partner effect (other/both). Significant interaction btwn
# Condition and Partner? 
# 
# Can also do PartnerRecode as an RFX term. Eliminates interaction.



### DO BAYESIAN ESTIMATION ###

library(rstan)
library(parallel)
# set_cppo('debug') # make debugging easier
# set_cppo('fast') # for best running speed

#d3 <- d[is.finite(d$Response),] # Subset out only the trials w/ responses

#d3$selfother <- as.numeric(d3$Partner > 0); # 1 when someone else is involved, 0 when it's just you

#d3$PartnerRecode <- d3$Partner; 
#d3$PartnerRecode[d3$PartnerRecode == 2] <- -1; # 0 when SELF; 1 when OTHER, -1 when BOTH
#d3$ConditionRecode <- (d3$Condition+1)*d3$selfother;
#d3$ConditionRecode[d3$ConditionRecode==2] <- -1; # 0 when SELF; 1 when stranger, -1 when friend


dataList <- list(
  choices = d$Response ,
  gam1 = d$Amount1 ,
  gam2 = d$Amount2 ,
  cert = d$Certain ,
  ind = d$Subject ,
  selfother = d$SNS ,
  #partdiff = d$PartnerRecode , 
  conddiff = d$Condition, 
  nsubj = length(unique(d$Subject)) , 
  N = length(d$Response)
)


stanmodel = 'sla_01_basic.stan'

nChains = 4
fitSteps = 5000 # Stan will save half this many x nChains per parameter
pars = c('meanLambda','meanRho','meanMu',
         'sdLambda','sdRho','sdMu',
         'rselfother','lselfother','mselfother',
         'rconddiff','lconddiff','mconddiff',
         'l','r','m'); # Not including all the rtmp, ltmp, and mtmp "parameters"

#'rpartdiff','lpartdiff','mpartdiff',


##### Fit the Model #####

starttime = proc.time()[3];

# seed <- 123; # for a reproducible fit
seed <- runif(1,1,1e6); # Stan wants a random integer from 1 to max supportable

fit0 <- stan(file = stanmodel, data = dataList, 
             iter = 1, chains = 1, pars=pars) #, init=init1)

fit0time = proc.time()[3];
print(noquote(sprintf('Compilation time = %.1f seconds',(fit0time-starttime))))

##### Parallel Model Fit #####

# seed <- 123; # for a reproducible fit

seed <- runif(1,1,1e6); # Stan wants a random integer from 1 to max supportable

sflist1 <- 
  mclapply(1:nChains, mc.cores = nChains, 
           function(i) stan(fit = fit0, seed=seed, data = dataList,
                            iter = fitSteps, chains = 1, chain_id = i,
                            pars = pars))

fittime = proc.time()[3];
print(noquote(sprintf('Sampling time = %.1f minutes.',(fittime-fit0time)/60)))

sflistFinal = list();
k = 1;
for (i in 1:nChains){
  if (any(dim(sflist1[[i]]) > 0)) {
    sflistFinal[[k]] <- sflist1[[i]]
    k = k + 1;
  }
  else {print(noquote(sprintf('WARNING: Chain %d did not include any samples.',i)))}
}

save(stanmodel,sflistFinal,
     file=sprintf('slaEmpathy_01_basic_%s.Rdata',format(Sys.Date(), format="%Y%m%d")))

fit1 <- sflist2stanfit(sflistFinal)

sSamples <- extract(fit1)
q95 <- c(0.025,0.975);q90 <- c(0.05,0.95);q85 <- c(0.075,0.925);q80 <- c(0.1,0.9);q75 <- c(0.125,0.875);q70 <- c(0.15,0.85)

print(fit1)
# plot(fit1)

par(mfrow=c(1,1))

# Traceplot & hist code
traceplot(fit1,"meanLambda")
hist(exp(sSamples$meanLambda))

