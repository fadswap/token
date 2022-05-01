// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FADToken is Context, ERC20, Ownable {
    constructor() ERC20("FAD Swap", "$FAD") {
        _mint(msg.sender, 100000000 * 10 ** decimals());
    }
}