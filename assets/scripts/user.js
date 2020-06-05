var globCurrentEditingBatchNo = false;
var globCurrentUser = false;

var userForm,
    produsenForm,
    pengepulForm,
    pedagangGrosirForm,
    pedagangEceranForm;

$(document).ready(function() {

    userForm = $("#updateUserForm").parsley();
    produsenForm = $("#produsenForm").parsley();
    pengepulForm = $("#pengepulForm").parsley();
    pedagangGrosirForm = $("#pedagangGrosirForm").parsley();
    pedagangEceranForm = $("#pedagangEceranForm").parsley();

    $('.datepicker-autoclose').datepicker({
        autoclose: true,
        todayHighlight: true,
        format: "dd-mm-yyyy"
    });
});

$(window).on("coinbaseReady", function() {
    getUser(globUserContract, function(data) {

        globCurrentUser = data;

        if (data.isActive == true) {
            if (data.name.trim().length <= 0 &&
                data.contactNo.trim().length <= 0 &&
                data.role.trim().length <= 0) {
                swal("Oops", "Akun Anda Tidak Ditemukan , Silahkan Hubungi Admin (admin@gmail.com) ", "error");
                setTimeout(function() {
                    window.location = "index.php";
                }, 1000);
                return;
            }
        } else {
            swal({
                    title: "Akses Diblokir",
                    text: "Akun Anda Tidak Aktif , Silahkan Hubungi Admin (admin@gmail.com)",
                    type: "error",
                    showCancelButton: false,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                },
                function(isConfirm) {
                    if (isConfirm == true) {
                        window.location = "login.php";
                    }
                });
            return;
        }

        $("#userName").html(data.name);
        $("#userContact").html(data.contactNo);
        $("#userAlamat").html(data.alamat);
        $("#userRole").html(data.role);
    });

    getCultivationEvents(globMainContract);
});

/* --------------- User Section -----------------------*/
function EditUser() {
    getUser(globUserContract, function(data) {

        $("#Updatefullname").val(data.name);
        $("#UpdatecontactNumber").val(data.contactNo);
        $("#Updatealamat").val(data.alamat);
        $("#role").val(data.role);

        // var profileImageLink = 'https://ipfs.io/ipfs/' + data.profileHash;
        // var btnViewImage = '<a href="' + profileImageLink + '" target="_blank" class=" text-danger"><i class="fa fa-eye"></i> View Image</a>';
        // $("#imageHash").html(btnViewImage);

        if (data.isActive) {
            $('#UpdateisActive').prop('checked', true);;
        }
        stopLoader();
    });
}

$("#userFormBtn").on('click', function() {

    console.log("Sabi");

    if (userForm.validate()) {
        var fullname = $("#fullname").val();
        var contactNumber = $("#contactNumber").val();
        var alamat = $("#alamat").val();
        var role = globCurrentUser.role;
        var userStatus = $("#isActive").is(":checked");
        var profileHash = $("#userProfileHash").val();

        var userDetails = {
            fullname: fullname,
            contact: contactNumber,
            alamat: alamat,
            role: role,
            status: userStatus,
            profile: profileHash
        };

        updateUser(globUserContract, userDetails);
    }
});

function userFormButton() {
    if (userForm.validate()) {
        var fullname = $("#Updatefullname").val();
        var contactNumber = $("#UpdatecontactNumber").val();
        var alamat = $("#Updatealamat").val();
        var role = globCurrentUser.role;
        var userStatus = $("#UpdateisActive").is(":checked");
        var profileHash = $("#userProfileHash").val();

        var userDetails = {
            fullname: fullname,
            contact: contactNumber,
            alamat: alamat,
            role: role,
            status: userStatus,
            profile: profileHash
        };

        updateUser(globUserContract, userDetails);
    }
}

function getUser(contractRef, callback) {
    contractRef.methods.getUser(globCoinbase).call(function(error, result) {
        if (error) {
            alert("User tidak ditemukan" + error);
        }
        newUser = result;
        if (callback) {
            callback(newUser);
        }
    });
}

function updateUser(contractRef, data) {
    contractRef.methods.updateUser(data.fullname, data.contact, data.alamat, data.role, data.status, data.profile)
        .send({ from: globCoinbase, to: contractRef.address })
        .on('transactionHash', function(hash) {
            $.magnificPopup.instance.close()
            handleTransactionResponse(hash);
            $("#userFormModel").modal('hide');
        })
        .on('receipt', function(receipt) {
            receiptMessage = "User Profile Updated Succussfully";
            handleTransactionReceipt(receipt, receiptMessage);
            $("#userFormModel").modal('hide');
        })
        .on('error', function(error) {
            handleGenericError(error.message);
            return;
        });
}

/* --------------- Activity Section -----------------------*/

function editActivity(batchNo) {
    startLoader();
    globCurrentEditingBatchNo = batchNo;
}

/* --------------- Produsen Section -----------------------*/


function updateProdusenButton() {

    if (produsenForm.validate()) {
        var tmpDate = $("#tanggalPanenProdusen").val().trim().split("-");
        tmpDate = tmpDate[1] + "/" + tmpDate[0] + "/" + tmpDate[2];

        var tmpDate1 = $("#tanggalJualProdusen").val().trim().split("-");
        tmpDate1 = tmpDate1[1] + "/" + tmpDate1[0] + "/" + tmpDate1[2];

        var data = {
            batchNo: globCurrentEditingBatchNo,
            namaProdusen: $("#namaProdusen").val().trim(),
            tanggalPanen: new Date(tmpDate).getTime() / 1000,
            jumlahJual: parseInt($("#jumlahJualProdusen").val().trim()),
            hargaJual: parseInt($("#hargaJualProdusen").val().trim()),
            tanggalJual: new Date(tmpDate1).getTime() / 1000,
            tujuanPengiriman: $("#tujuanPengirimanProdusen").val().trim(),
        };

        updateProdusen(globMainContract, data);
    }
}

function updateProdusen(contractRef, data) {
    contractRef.methods.updateProdusenData(data.batchNo, data.namaProdusen, data.tanggalPanen, data.jumlahJual, data.hargaJual, data.tanggalJual, data.tujuanPengiriman)
        .send({ from: globCoinbase, to: contractRef.address })
        .on('transactionHash', function(hash) {
            $.magnificPopup.instance.close()
            handleTransactionResponse(hash);
        })
        .on('receipt', function(receipt) {
            receiptMessage = "Transaksi Berhasil Ditambahkan";
            handleTransactionReceipt(receipt, receiptMessage)
        })
        .on('error', function(error) {
            handleGenericError(error.message);
            return;
        });
}

/* --------------- Pengepul Section -----------------------*/

function updatePengepulButton() {
    if (pengepulForm.validate()) {
        var tmpDate = $("#diterimaCabaiPengepul").val().trim().split("-");
        tmpDate = tmpDate[1] + "/" + tmpDate[0] + "/" + tmpDate[2];

        var tmpDate1 = $("#tanggalJualPengepul").val().trim().split("-");
        tmpDate1 = tmpDate1[1] + "/" + tmpDate1[0] + "/" + tmpDate1[2];

        var data = {
            batchNo: globCurrentEditingBatchNo,
            namaPengepul: $("#namaPengepul").val().trim(),
            diterimaCabai: new Date(tmpDate).getTime() / 1000,
            jumlahJual: parseInt($("#jumlahJualPengepul").val().trim()),
            hargaJual: parseInt($("#hargaJualPengepul").val().trim()),
            tanggalJual: new Date(tmpDate1).getTime() / 1000,
            tujuanPengiriman: $("#tujuanPengirimanPengepul").val().trim(),
        };

        updatePengepul(globMainContract, data);
    }
}

function updatePengepul(contractRef, data) {
    contractRef.methods.updatePengepulData(data.batchNo, data.namaPengepul, data.diterimaCabai, data.jumlahJual, data.hargaJual, data.tanggalJual, data.tujuanPengiriman)
        .send({ from: globCoinbase, to: contractRef.address })
        .on('transactionHash', function(hash) {
            $.magnificPopup.instance.close()
            handleTransactionResponse(hash);
        })
        .on('receipt', function(receipt) {
            receiptMessage = "Transaksi Berhasil Ditambahkan";
            handleTransactionReceipt(receipt, receiptMessage)
        })
        .on('error', function(error) {
            handleGenericError(error.message);
            return;
        });
}


/* --------------- Pedagang Grosir Section -----------------------*/

function updatePedagangGrosirButton() {
    if (pedagangGrosirForm.validate()) {
        var tmpDate = $("#diterimaCabaiPedagangGrosir").val().trim().split("-");
        tmpDate = tmpDate[1] + "/" + tmpDate[0] + "/" + tmpDate[2];

        var tmpDate1 = $("#tanggalJualPedagangGrosir").val().trim().split("-");
        tmpDate1 = tmpDate1[1] + "/" + tmpDate1[0] + "/" + tmpDate1[2];


        var data = {
            batchNo: globCurrentEditingBatchNo,
            namaPedagangGrosir: $("#namaPedagangGrosir").val().trim(),
            diterimaCabai: new Date(tmpDate).getTime() / 1000,
            jumlahJual: parseInt($("#jumlahJualPedagangGrosir").val().trim()),
            hargaJual: parseInt($("#hargaJualPedagangGrosir").val().trim()),
            tanggalJual: new Date(tmpDate1).getTime() / 1000,
            tujuanPengiriman: $("#tujuanPengirimanPedagangGrosir").val().trim(),
        };

        updatePedagangGrosir(globMainContract, data);
    }
}

function updatePedagangGrosir(contractRef, data) {
    contractRef.methods.updatePedagangGrosirData(data.batchNo, data.namaPedagangGrosir, data.diterimaCabai, data.jumlahJual, data.hargaJual, data.tanggalJual, data.tujuanPengiriman)
        .send({ from: globCoinbase, to: contractRef.address })
        .on('transactionHash', function(hash) {
            $.magnificPopup.instance.close()
            handleTransactionResponse(hash);
        })
        .on('receipt', function(receipt) {
            receiptMessage = "Transaksi Berhasil Ditambahkan";
            handleTransactionReceipt(receipt, receiptMessage)
        })
        .on('error', function(error) {
            handleGenericError(error.message);
            return;
        });
}

/* --------------- Pedagang Eceran Section -----------------------*/

function updatePedagangEceranButton() {
    if (pedagangEceranForm.validate()) {
        var tmpDate = $("#diterimaCabaiPedagangEceran").val().trim().split("-");
        tmpDate = tmpDate[1] + "/" + tmpDate[0] + "/" + tmpDate[2];

        var data = {
            batchNo: globCurrentEditingBatchNo,
            namaPedagangEceran: $("#namaPedagangEceran").val().trim(),
            diterimaCabai: new Date(tmpDate).getTime() / 1000,
            jumlahJual: parseInt($("#jumlahJualPedagangEceran").val().trim()),
            hargaJual: parseInt($("#hargaJualPedagangEceran").val().trim()),
        };

        updatePedagangEceran(globMainContract, data);
    }
}

function updatePedagangEceran(contractRef, data) {
    contractRef.methods.updatePedagangEceranData(data.batchNo, data.namaPedagangEceran, data.diterimaCabai, data.jumlahJual, data.hargaJual)
        .send({ from: globCoinbase, to: contractRef.address })
        .on('transactionHash', function(hash) {
            $.magnificPopup.instance.close()
            handleTransactionResponse(hash);
        })
        .on('receipt', function(receipt) {
            receiptMessage = "Transaksi Berhasil Ditambahkan";
            handleTransactionReceipt(receipt, receiptMessage)
        })
        .on('error', function(error) {
            handleGenericError(error.message);
            return;
        });
}

function getCultivationEvents(contractRef) {
    contractRef.getPastEvents('PerformCultivation', {
        fromBlock: 0
    }).then(function(events) {
        $("#totalBatch").html(events.length);

        var finalEvents = [];
        $.each(events, function(index, elem) {
            var tmpData = {};
            tmpData.batchNo = elem.returnValues.batchNo;
            tmpData.transactionHash = elem.transactionHash;
            getBatchStatus(contractRef, tmpData.batchNo).then(result => {
                tmpData.status = result;

                finalEvents.push(tmpData);
            });
        });

        setTimeout(function() {
            if (finalEvents.length > 0) {
                var table = buildCultivationTable(finalEvents);
                $("#userCultivationTable").find("tbody").html(table);

                reInitPopupForm();
            }
        }, 1000);

    }).catch(error => {
        console.log(error)
    });
}

function buildCultivationTable(finalEvents) {
    $.magnificPopup.instance.popupsCache = {};

    var table = "";

    for (var tmpDataIndex in finalEvents) {
        var elem = finalEvents[tmpDataIndex];
        var batchNo = elem.batchNo;
        var transactionHash = elem.transactionHash;
        var tr = "";

        if (elem.status == "PRODUSEN") {
            tr = `<tr>
                    <td>` + batchNo + `</td>
                  `;

            if (globCurrentUser.role == "PRODUSEN") {
                tr += `<td>
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#produsenFormModal" onclick="editActivity('` + batchNo + `')">
                                <span class="mb-2 mr-2 badge badge-pill badge-primary font-weight-100">Update</span>
                            </a>
                      </td>`;
            } else {
                tr += `<td><span class="mb-2 mr-2 badge badge-pill badge-secondary font-weight-100">Processing</span> </td>`;
            }


            tr += `<td><span class="mb-2 mr-2 badge badge-pill badge-danger font-weight-100">Not Available</span> </td>
              <td><span class="mb-2 mr-2 badge badge-pill badge-danger font-weight-100">Not Available</span> </td>
              <td><span class="mb-2 mr-2 badge badge-pill badge-danger font-weight-100">Not Available</span> </td>
              <td><a href="tampilDetail.php?batchNo=` + batchNo + `&txn=` + transactionHash + `" target="_blank" class="mb-2 mr-2 badge badge-primary" data-toggle="tooltip" title="View">View</a> </td>
          </tr>`;

        } else if (elem.status == "PENGEPUL") {
            tr = `<tr>
                    <td>` + batchNo + `</td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span></td>
                    `;
            if (globCurrentUser.role == "PENGEPUL") {
                tr += `<td>
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#pengepulFormModal" onclick="editActivity('` + batchNo + `')">
                                <span class="mb-2 mr-2 badge badge-pill badge-primary font-weight-100">Update</span>
                            </a>
                        </td>`;
            } else {
                tr += `<td><span class="mb-2 mr-2 badge badge-pill badge-secondary font-weight-100">Processing</span> </td>`;
            }

            tr += `
                <td><span class="mb-2 mr-2 badge badge-pill badge-danger font-weight-100">Not Available</span> </td>
                <td><span class="mb-2 mr-2 badge badge-pill badge-danger font-weight-100">Not Available</span> </td>
                <td><a href="tampilDetail.php?batchNo=` + batchNo + `&txn=` + transactionHash + `" target="_blank" class="mb-2 mr-2 badge badge-primary" data-toggle="tooltip" title="View">View</a> </td>
            </tr>`;

        } else if (elem.status == "PEDAGANG_GROSIR") {
            tr = `<tr>
                    <td>` + batchNo + `</td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span></td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span> </td>
                  `;

            if (globCurrentUser.role == "PEDAGANG_GROSIR") {
                tr += `<td>
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#pedagangGrosirFormModal" onclick="editActivity('` + batchNo + `')">
                                <span class="mb-2 mr-2 badge badge-pill badge-primary font-weight-100">Update</span>
                            </a>
                        </td>`;
            } else {
                tr += `<td><span class="mb-2 mr-2 badge badge-pill badge-secondary font-weight-100">Processing</span> </td>`;
            }

            tr += `  
                    <td><span class="mb-2 mr-2 badge badge-pill badge-danger font-weight-100">Not Available</span> </td>
                    <td><a href="tampilDetail.php?batchNo=` + batchNo + `&txn=` + transactionHash + `" target="_blank" class="mb-2 mr-2 badge badge-primary" data-toggle="tooltip" title="View">View</a> </td>
                </tr>`;
        } else if (elem.status == "PEDAGANG_ECERAN") {
            tr = `<tr>
                    <td>` + batchNo + `</td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span></td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span> </td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span> </td>
                  `;

            if (globCurrentUser.role == "PEDAGANG_ECERAN") {
                tr += `<td>
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#pedagangEceranFormModal" onclick="editActivity('` + batchNo + `')">
                                <span class="mb-2 mr-2 badge badge-pill badge-primary font-weight-100">Update</span>
                            </a>
                        </td>`;
            } else {
                tr += `<td><span class="mb-2 mr-2 badge badge-pill badge-secondary font-weight-100">Processing</span> </td>`;
            }

            tr += ` <td><a href="tampilDetail.php?batchNo=` + batchNo + `&txn=` + transactionHash + `" target="_blank" class="mb-2 mr-2 badge badge-primary" data-toggle="tooltip" title="View">View</a> </td>
                </tr>`;
        } else if (elem.status == "DONE") {
            tr = `<tr>
                    <td>` + batchNo + `</td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span></td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span> </td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span> </td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span> </td>
                  `;
            tr += `    
            <td><a href="tampilDetail.php?batchNo=` + batchNo + `&txn=` + transactionHash + `" target="_blank" class="mb-2 mr-2 badge badge-primary" data-toggle="tooltip" title="View">View</a> </td>
                </tr>`;
        }

        table += tr;
    }


    return table;

}

function getBatchStatus(contractRef, batchNo) {
    return contractRef.methods.getNextAction(batchNo)
        .call();
}

function reInitPopupForm() {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: true,
        key: 'popup-with-form',
        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            open: function() {
                stopLoader();
            }
        }
    });
}