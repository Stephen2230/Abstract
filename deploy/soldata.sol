//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.7;

contract Test9 {
    string internal Lake_Forest = "Lake Forest";
    string internal New_Mexico = "New Mexico";
    string internal Texas = "Texas";

    function getPvData() external view returns (string memory) {
        return Lake_Forest;
    }

    function getTempData() external view returns (string memory) {
        return New_Mexico;
    }

    function getLuxData() external view returns (string memory) {
        return Texas;
    }

    function updateData(string memory _word) external {
        Lake_Forest = _word;
        New_Mexico = _word;
        Texas = _word;
    }
}
