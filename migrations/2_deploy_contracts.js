var ChainList = artifacts.require("../contracts/ChainList.sol");

module.exports = function(deployer) {
  deployer.deploy(ChainList);
}
