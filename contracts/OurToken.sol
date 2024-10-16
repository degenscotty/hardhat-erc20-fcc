// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OurToken is ERC20 {
    uint256 private immutable i_initialSupply;

    constructor(uint256 initialSupply) ERC20("OurToken", "OT") {
        i_initialSupply = initialSupply;
        _mint(msg.sender, initialSupply);
    }

    function getInitialSupply() public view returns (uint256) {
        return i_initialSupply;
    }
}
