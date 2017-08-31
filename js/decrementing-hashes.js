/*
* print the below
* #
* ##
* ###
* ####
* #####
*/
function looper(limit = 5, n = 1, s = '#') {
  if (n <= limit)
  {
    console.log(s);
    return looper(limit, n+1, s+'#');
  }
};

looper();
