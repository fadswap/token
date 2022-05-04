module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("Running deploy script for contract FADToken");
  console.log('network id:', await getChainId());

  const fadTokenDeployment = await deploy('FADToken', {
    from: deployer,
    args: [],
  });

  console.log('FADToken deployed to:', fadTokenDeployment.address);

  console.log("Verifying contract");

  await hre.run('verify:verify', {
    address: fadTokenDeployment.address,
  });

  console.log("Contract verified");
};
