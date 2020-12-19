const web3 = require('./web3.js');
const router = require('./router.js');

router.get('/addresses/:ethAddress/transactions', async (ctx, next) => {
  const addressParam = Object.values(ctx.params).toString();

  if (web3.isValidEthAddress(addressParam)) {
    ctx.response.status = 202;
    ctx.body = await web3.getTransfersInfo(addressParam);
  } else {
    ctx.response.status = 404;
    ctx.body = 'Wrong Eth Address';
  }
  
  next();
});

module.exports = router;