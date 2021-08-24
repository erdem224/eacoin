const EACoin = artifacts.require("EACoin");
const EACoinSale = artifacts.require("EACoinSale");

module.exports = function(deployer) {
  deployer.deploy(EACoin, 1000000).then(function() {

  	var tokenPrice = 1000000000000000;
    return deployer.deploy(EACoinSale, EACoin.address, tokenPrice);
  });
};
