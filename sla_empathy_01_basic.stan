data {
  int N; // number of trials total (across participants)
  int nsubj; // # of subjects
  int choices[N]; // the binary choice vector
  real gam1[N]; // the risky gain element
  real gam2[N]; // the risky loss element
  real cert[N]; // the guaranteed/certain alternative
  int ind[N]; // the subject index
  int selfother[N]; // 0 when self, 1 when other
  #int partdiff[N]; // 0 when self, 1 when Other, -1 when Both
  int conddiff[N]; // 0 when self, 1 when Stranger, -1 when Friend
}

parameters {
  real meanLambda; // Mean parameters
  real<lower=0> sdLambda;
  real meanRho;
  real<lower=0> sdRho;
  real meanMu;
  real<lower=0> sdMu;
  real l[nsubj]; // L = loss aversion
  real r[nsubj]; // R = curvature
  real m[nsubj]; // M = softmax
  real rselfother;
  real lselfother;
  real mselfother;
  #real rpartdiff;
  #real lpartdiff;
  #real mpartdiff;
  real rconddiff;
  real lconddiff;
  real mconddiff;
}

transformed parameters {
  real ltmp[N];
  real rtmp[N];
  real mtmp[N];
  
  for(t in 1:N){
    ltmp[t] = exp(l[ind[t]] + selfother[t]*lselfother + conddiff[t]*lconddiff);
    rtmp[t] = exp(r[ind[t]] + selfother[t]*rselfother + conddiff[t]*rconddiff);
    mtmp[t] = exp(m[ind[t]] + selfother[t]*mselfother + conddiff[t]*mconddiff);
  }
}

model {
  real div;
  real p[N];
  real gam1u;
  real gam2u;
  real certu;
  
  // Priors (don't matter a TON)
  meanLambda ~ normal(0,30);
  sdLambda   ~ cauchy(0,2.5);
  meanMu ~ uniform(0,30);
  sdMu   ~ cauchy(0,2.5);
  meanRho ~ normal(0,30);
  sdRho   ~ cauchy(0,2.5);
  rselfother ~ normal(0,30);
  lselfother ~ normal(0,30);
  mselfother ~ normal(0,30);
  #rpartdiff ~ normal(0,30);
  #lpartdiff ~ normal(0,30);
  #mpartdiff ~ normal(0,30);
  rconddiff ~ normal(0,30);
  lconddiff ~ normal(0,30);
  mconddiff ~ normal(0,30);

  // Hierarchy
  l ~ normal(meanLambda,sdLambda);
  m ~ normal(meanMu,sdMu);
  r ~ normal(meanRho,sdRho);
  
  for (t in 1:N) {
    div = 30^rtmp[t];
    
    // Model with M, L, R
    if (gam1[t] < 0)
      gam1u = -0.5 * ltmp[t] * fabs(gam1[t])^rtmp[t];
    else
      gam1u = 0.5 * gam1[t]^rtmp[t];
    
    if (gam2[t] < 0)
      gam2u = -0.5 * ltmp[t] * fabs(gam2[t])^rtmp[t];
    else
      gam2u = 0.5 * gam2[t]^rtmp[t];
    
    if (cert[t] < 0)
      certu = -ltmp[t] * fabs(cert[t])^rtmp[t];
    else
      certu = cert[t]^rtmp[t];
    
    p[t] = inv_logit(mtmp[t] / div * (gam1u + gam2u - certu));
  }
choices ~ bernoulli(p);  
}
