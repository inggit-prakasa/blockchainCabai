const globIcoAddress = {
    'CabaiMain': "0x03ebecf3391faa4c09ed1cec5c59f3d0f1967ea5",
    'CabaiUser': "0xbe004ff84e0c8bfabdd103d90753b3dfd4f668fb",
    'Storage': "0x81dcda4d5182785093d321e3535b5ec87db58acd"
};

const globAdminAddress = "0xd75307a2d4ca9c0d22448ba06dc03707a0043465";
const globKonsumenAddress = "0xd75307a2d4ca9c0d22448ba06dc03707a0043465";
var globMainContract = false;
var globUserContract = false;
var globCoinbase = false;
var globUserData = [];

window.addEventListener('load', function() {
    $("#AddressContractPenyimpanan").html(globIcoAddress.Storage);
    $("#AddressSCMCabai").html(globIcoAddress.CabaiMain);
    $("#AddressUserContract").html(globIcoAddress.CabaiUser);

    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    getCurrentAccountAddress((address) => {
        /*  To Restrict User in Admin Section */
        var currentPath = window.location.pathname;
        var tmpStack = currentPath.split("/");
        var currentPanel = tmpStack.pop();

        if (currentPanel == "admin.php") {
            if (address != globAdminAddress) {
                window.location = "login.php";
            }
        }
    });

    initContract();

    updateLoginAccountStatus();
});

function initContract() {

    // Koneksi Abi Cabai dengan Addressnya SCM cabai(ChiliSuplpyChainAbi, Address SCM Cabai)
    globMainContract = new web3.eth.Contract(CabaiSupplyChainAbi, globIcoAddress.CabaiMain);
    $(window).trigger("mainContractReady");

    // Koneksi antara user Abi dengan Address cabai User (SupplyChainUserAbi,Address User Contract)
    globUserContract = new web3.eth.Contract(SupplyChainUserAbi, globIcoAddress.CabaiUser);
    $(window).trigger("userContractReady");

}

function updateLoginAccountStatus() {

    var currentPath = window.location.pathname;
    var tmpStack = currentPath.split("/");
    var currentPanel = tmpStack.pop();
    // Get Account dari Web3 
    web3.eth.getAccounts(function(err, accounts) {
        if (err) {
            console.log('An error occurred ' + err);
        } else if (accounts.length == 0 && currentPanel != "konsumen.php" && currentPanel != "tampilDetail.php") {
            sweetAlert('Error', 'Please login to MetaMask..!', 'error');
            $("#CurrentAddress").html("0x0000000000000000000000000000000000000000");
        } else {
            initAccountDetails();
        }
    });
}

function initAccountDetails() {
    // Get Address dari Metamask
    getCurrentAccountAddress((address) => {
        globCoinbase = address;
        $("#CurrentAddress").html(globCoinbase);
        $(window).trigger("coinbaseReady");
    });
}

function getCurrentAccountAddress(callback) {
    callback = callback || false;

    web3.eth.getCoinbase()
        .then((_coinbase) => {
            callback(_coinbase);
        })
        .catch((err) => {
            if (callback) {
                callback(0);
            }
        })
}

function getUserDetails(contractRef, userAddress, callback) {
    callback = callback || false;

    contractRef.methods.getUser(userAddress).call()
        .then((result) => {
            callback(result);
        })
        .catch((error) => {
            alert("Error", "Detail User Tidak Ditemukan", "error");
            callback(0);
        });
}

function getCultivationData(contractRef, batchNo, callback) {

    if (batchNo == undefined) {
        callback(0);
        return;
    }

    callback = callback || false;

    contractRef.methods.getBasicDetails(batchNo).call()
        .then((result) => {
            callback(result);
        })
        .catch((error) => {
            sweetAlert("Error", "Detail Kultivasi Tidak Ditemukan", "error");
            callback(0);
        });
}

function getProdusenData(contractRef, batchNo, callback) {

    if (batchNo == undefined) {
        callback(0);
        return;
    }

    callback = callback || false;

    contractRef.methods.getProdusenData(batchNo).call()
        .then((result) => {
            callback(result);
        })
        .catch((error) => {
            sweetAlert("Error", "Detail Transaksi Produsen Tidak Ditemukan", "error");
            callback(0);
        });
}

function getPengepulData(contractRef, batchNo, callback) {

    if (batchNo == undefined) {
        callback(0);
        return;
    }


    callback = callback || false;

    contractRef.methods.getPengepulData(batchNo).call()
        .then((result) => {
            callback(result);
        })
        .catch((error) => {
            sweetAlert("Error", "Detail Transaksi Pengepul Tidak Ditemukan", "error");
            callback(0);
        });
}

function getPedagangGrosirData(contractRef, batchNo, callback) {

    if (batchNo == undefined) {
        callback(0);
        return;
    }

    callback = callback || false;

    contractRef.methods.getPedagangGrosirData(batchNo).call()
        .then((result) => {
            callback(result);
        })
        .catch((error) => {
            sweetAlert("Error", "Detail Transaksi Pedagang Grosir Tidak Ditemukan", "error");
            callback(0);
        });
}

function getPedagangEceranData(contractRef, batchNo, callback) {

    if (batchNo == undefined) {
        callback(0);
        return;
    }


    callback = callback || false;

    contractRef.methods.getPedagangEceranData(batchNo).call()
        .then((result) => {
            callback(result);
        })
        .catch((error) => {
            sweetAlert("Error", "Unable to get Importing Details", "error");
            callback(0);
        });
}

function getUserEvents(contractRef) {
    contractRef.getPastEvents('UserUpdate', {
        fromBlock: 0
    }).then(function(events) {
        $("#tblUser").DataTable().destroy();
        $("#tblUser tbody").html(buildUserDetails(events));
        $("#tblUser").DataTable({
            "displayLength": 3,
            "order": [
                [1, "asc"]
            ]
        });
    }).catch((err) => {
        console.log(err);
    });
}

function buildUserDetails(events) {

    var filteredUser = {};
    var isNewUser = false;

    /*filtering latest updated user record*/
    $(events).each(function(index, event) {

        if (filteredUser[event.returnValues.user] == undefined) {
            filteredUser[event.returnValues.user] = {};
            filteredUser[event.returnValues.user].address = event.address;
            filteredUser[event.returnValues.user].role = event.returnValues.role;
            filteredUser[event.returnValues.user].user = event.returnValues.user;
            filteredUser[event.returnValues.user].name = event.returnValues.name;
            filteredUser[event.returnValues.user].contactNo = event.returnValues.contactNo;
            filteredUser[event.returnValues.user].alamat = event.returnValues.alamat;
            filteredUser[event.returnValues.user].blockNumber = event.blockNumber;
        } else if (filteredUser[event.returnValues.user].blockNumber < event.blockNumber) {
            filteredUser[event.returnValues.user].address = event.address;
            filteredUser[event.returnValues.user].role = event.returnValues.role;
            filteredUser[event.returnValues.user].user = event.returnValues.user;
            filteredUser[event.returnValues.user].name = event.returnValues.name;
            filteredUser[event.returnValues.user].contactNo = event.returnValues.contactNo;
            filteredUser[event.returnValues.user].alamat = event.returnValues.alamat;
            filteredUser[event.returnValues.user].blockNumber = event.blockNumber;
        }
    });

    var builtUser = [];
    for (tmpUser in filteredUser) {
        builtUser.push(filteredUser[tmpUser]);
    }

    $("#totalUsers").html(builtUser.length);
    return buildUserTable(builtUser);
}

function buildUserTable(globUserData) {

    var tbody = "";
    var roleClass = "";

    $(globUserData).each(function(index, data) {

        var role = data.role;

        if (role == 'PRODUSEN') {
            roleClass = "primary";
        } else if (role == 'PENGEPUL') {
            roleClass = "success";
        } else if (role == 'PEDAGANG_GROSIR') {
            roleClass = "info";
        } else if (role == 'PEDAGANG_ECERAN') {
            roleClass = "alternate";
        }

        tbody += `<tr>
                        <td>` + data.user + `</td>
                        <td>` + data.name + `</td>
                        <td>` + data.contactNo + `</td>
                        <td>` + data.alamat + `</td>
                        <td><span class="mb-2 mr-2 badge badge-pill badge-` + roleClass + ` font-weight-100">` + role + `</span></td>
                        <td><a href="javascript:void(0);" class="text-inverse p-r-10" data-toggle="modal" data-target="#userFormModel" data-userAddress="` + data.user + `" onclick="openEditUser(this);" title="Edit">Edit</a> </td>
                  </tr>`;
    });

    return tbody;
}

function handleTransactionResponse(txHash, finalMessage) {
    var txLink = "https://rinkeby.etherscan.io/tx/" + txHash;
    var txLinkHref = "<a target='_blank' href='" + txLink + "'> Click here for Transaction Status </a>";

    sweetAlert("Success", "Check Status Transaksi : " + txLinkHref, "success");

    $("#linkOngoingTransaction").html(txLinkHref);
    $("#divOngoingTransaction").fadeIn();
    /*scroll to top*/
    $('html, body').animate({ scrollTop: 0 }, 'slow', function() {});
}

function handleTransactionReceipt(receipt, finalMessage) {
    $("#linkOngoingTransaction").html("");
    $("#divOngoingTransaction").fadeOut();

    // sweetAlert("Success", "Token Purchase Complete ", "success");
    sweetAlert("Success", finalMessage, "success");
}

function handleGenericError(error_message) {
    if (error_message.includes("MetaMask Tx Signature")) {
        sweetAlert("Error", "Transaction Refused ", "error");
    } else {
        // sweetAlert("Error", "Error Occured, Please Try Again , if problem persist get in touch with us. ", "error");
        sweetAlert("Error", error_message, "error");
    }

}


function changeSwitchery(element, checked) {
    if ((element.is(':checked') && checked == false) || (!element.is(':checked') && checked == true)) {
        element.parent().find('.switchery').trigger('click');
    }
}

function startLoader() {
    $(".preloader").fadeIn();
}

function stopLoader() {
    $(".preloader").fadeOut();
}

/*Set Default inactive*/
$("#userFormClick").click(function() {
    $("#userForm").trigger('reset');
    changeSwitchery($("#isActive"), false);
    $("#userModelTitle").html("Add User");
    $("#imageHash").html('');
    $("#userFormModel").modal();
});

/*Edit User Model Form*/
function openEditUser(ref) {
    var userAddress = $(ref).attr("data-userAddress");
    startLoader();
    getUserDetails(globUserContract, userAddress, function(result) {
        $("#userWalletAddress").val(userAddress);
        $("#userName").val(result.name);
        $("#userContactNo").val(result.contactNo);
        $("#userAlamat").val(result.alamat);
        $("#userProfileHash").val(result.profileHash);
        $('#userRoles').val(result.role).prop('selected', true);

        var profileImageLink = 'https://ipfs.io/ipfs/' + result.profileHash;
        var btnViewImage = '<a href="' + profileImageLink + '" target="_blank" class=" text-danger"><i class="fa fa-eye"></i> View Image</a>';
        $("#imageHash").html(btnViewImage);

        // changeSwitchery($("#isActive"), result.isActive);
        if (result.isActive) {
            $('#isActive').prop('checked', true);;
        }

        $("#userModelTitle").html("Update User");
        stopLoader();
        $("#userFormModel").modal();
    });
}

ipfs = window.IpfsApi('ipfs.infura.io', '5001', { protocol: 'https' })

function handleFileUpload(event) {
    const file = event.target.files[0];

    let reader = new window.FileReader();
    reader.onloadend = function() {
        $("#userFormBtn").prop('disabled', true);
        $("i.fa-spinner").show();
        $("#imageHash").html('Processing......');
        saveToIpfs(reader)
    }

    reader.readAsArrayBuffer(file)
}

function saveToIpfs(reader) {
    let ipfsId;

    const Buffer = window.IpfsApi().Buffer;
    const buffer = Buffer.from(reader.result);

    /*Upload Buffer to IPFS*/
    ipfs.files.add(buffer, (err, result) => {
        if (err) {
            console.error(err)
            return
        }

        var imageHash = result[0].hash;

        var profileImageLink = 'https://ipfs.io/ipfs/' + imageHash;
        var btnViewImage = '<a href="' + profileImageLink + '" target="_blank" class=" text-danger"><i class="fa fa-eye"></i> View Image</a>';

        $("#userProfileHash").val(imageHash);
        $("#imageHash").html(btnViewImage);

        $("#userFormBtn").prop('disabled', false);
        $("i.fa-spinner").hide();
    });
}