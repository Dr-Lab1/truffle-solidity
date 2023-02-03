// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract FavoriteNumber {
  
  uint favoriteNumber = 50;

  function getFavoriteNumber() external view returns (uint) {

    return favoriteNumber;

  }

  function setFavoriteNumber(uint _favoriteNumber) external {

    favoriteNumber = _favoriteNumber;

  }

}

