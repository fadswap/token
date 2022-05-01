const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FADToken", function () {
  it("Test basic informations", async function () {
    const Contract = await ethers.getContractFactory("FADToken");
    const obj = await Contract.deploy();
    await obj.deployed();

    expect(await obj.totalSupply()).to.equal("100000000000000000000000000");
    expect(await obj.name()).to.equal("FAD Swap");
    expect(await obj.symbol()).to.equal("$FAD");
    expect(await obj.decimals()).to.equal(18);
  });
});