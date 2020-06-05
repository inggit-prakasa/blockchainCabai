var batchNo;
window.addEventListener('load', function() {
    batchNo = $("#batchNo").val();

    if (batchNo != "" || batchNo != null || batchNo != undefined) {

        getCultivationData(globMainContract, batchNo, function(result) {
            var parentSection = $("#cultivationSection");
            var activityName = "PerformCultivation";
            var built = buildCultivationBlock(result);

            populateSection(parentSection, built, activityName, batchNo)
        });

        getProdusenData(globMainContract, batchNo, function(result) {

            var parentSection = $("#produsenSection");
            var activityName = "DoneProdusen";
            var built = buildProdusenBlock(result);

            populateSection(parentSection, built, activityName, batchNo);
        });

        getPengepulData(globMainContract, batchNo, function(result) {

            var parentSection = $("#pengepulSection");
            var activityName = "DonePengepul";
            var built = buildPengepulBlock(result);

            populateSection(parentSection, built, activityName, batchNo);
        });

        getPedagangGrosirData(globMainContract, batchNo, function(result) {

            var parentSection = $("#pedagangGrosirSection");
            var activityName = "DonePedagangGrosir";
            var built = buildPedagangGrosirBlock(result);

            populateSection(parentSection, built, activityName, batchNo);
        });

        getPedagangEceranData(globMainContract, batchNo, function(result) {

            var parentSection = $("#pedagangEceranSection");
            var activityName = "DonePedagangEceran";
            var built = buildPedagangEceranBlock(result);

            populateSection(parentSection, built, activityName, batchNo);
        });

    }

});

function populateSection(parentSection, built, activityName, batchNo) {
    if (built.isDataAvail == true) {
        getActivityTimestamp(activityName, batchNo, function(resultData) {

            if (resultData.dataTime) {
                var phoneNoSec = '';
                if (resultData.contactNo != '-') {
                    phoneNoSec = `<i class="fa fa-phone"></i> ` + resultData.contactNo + `<br/>`;
                }

                var userAddress = resultData.user;
                if ($(window).width() <= 565) {
                    userAddress = userAddress.substring(0, 15) + '...';
                }

                var refLink = 'https://rinkeby.etherscan.io/tx/' + resultData.transactionHash;
                var html = `<span class="text-info"><i class='fa fa-user'> </i>
                        ` + resultData.name + ` (` + userAddress + `) <br/>
                        ` + phoneNoSec + `
                    </span>
                    <i class='fa fa-clock-o'> </i> ` + resultData.dataTime.toLocaleString() + `
                    <a href='` + refLink + `' target='_blank'><i class='fa fa-external-link text-danger'></i></a>
                   `;
                $(parentSection).find(".activityDateTime").html(html);
                $(parentSection).find(".timeline-body .activityData").append('<img src="assets/images/verified.jpg" alt="user-img" style="width:80px;height:80px" class="img-circle pull-right">');
            }

            if (resultData.transactionHash) {
                var url = 'https://rinkeby.etherscan.io/tx/' + resultData.transactionHash;
                var qrCode = 'https://chart.googleapis.com/chart?cht=qr&chld=H|1&chs=400x400&chl=' + url;
                var qrCodeSec = `<a href="` + qrCode + `" title="` + resultData.transactionHash + `" class="qr-code-magnify pull-right" data-effect="mfp-zoom-in">
                          <img src="` + qrCode + `" class="img-responsive" style="width:70px; height:70px; margin-top:-75px;"/>
                        </a>`;

                $(parentSection).find(".activityQrCode").html(qrCodeSec);
            }
        });

        var tmpTimelineBadge = $(parentSection).prev(".timeline-badge");


        $(tmpTimelineBadge).removeClass("danger").addClass("success");
        $(tmpTimelineBadge).find("i").removeClass().addClass("fa fa-check");
    }


    $(parentSection).find(".activityData").html(built.html);
}

function getActivityTimestamp(activityName, batchNo, callback) {
    globMainContract.getPastEvents(activityName, {
        fromBlock: 0,
        filter: { batchNo: batchNo }
    }, function(error, eventData) {
        try {
            web3.eth.getBlock(eventData[0].blockNumber, function(error, blockData) {
                var resultData = {};
                var date = blockData.timestamp;
                /* Convert Seconds to Miliseconds */
                date = new Date(date * 1000);
                // $("#cultivationDateTime").html("<i class='fa fa-clock-o'> </i> " + date.toLocaleString());

                resultData.dataTime = date;
                resultData.transactionHash = eventData[0].transactionHash;

                var userAddress = eventData[0].returnValues.user;
                getUserDetails(globUserContract, userAddress, function(result) {
                    if (userAddress == globAdminAddress) {
                        resultData.name = 'Admin';
                        resultData.contactNo = '-';
                    } else {
                        resultData.name = result.name;
                        resultData.contactNo = result.contactNo;
                    }

                    resultData.user = userAddress;

                    callback(resultData);
                });
            })
        } catch (e) {
            callback(false);
        }
    });
}

function buildCultivationBlock(result) {
    var cultivationData = {};
    var sentraProduksi = result.sentraProduksi;
    var jenisCabai = result.jenisCabai;

    if (sentraProduksi != '' && jenisCabai != '') {
        cultivationData.html = `<tr>
                                    <td><b>Sentra Produksi:</b></td>
                                    <td>` + sentraProduksi + ` <i class="fa fa-check-circle verified_info"></i></td>
                                </tr>
                                <tr>
                                    <td><b>Jenis Cabai:</b></td>
                                    <td>` + jenisCabai + ` <i class="fa fa-check-circle verified_info"></i></td>
                                </tr>`;

        cultivationData.isDataAvail = true;
    } else {
        cultivationData.html = ` <tr>
                                    <td colspan="2"><p>Informasi Tidak Tersedia</p></td>
                            </tr>`;

        cultivationData.isDataAvail = false;
    }

    return cultivationData;
}

function buildProdusenBlock(result) {
    var produsenData = {};
    var namaProdusen = result.namaProdusen;
    var tanggalPanen = result.tanggalPanen;
    var jumlahJual = result.jumlahJual;
    var hargaJual = result.hargaJual;
    var tanggalJual = result.tanggalJual;
    var tujuanPengiriman = result.tujuanPengiriman;

    if (namaProdusen != '' && tanggalPanen != '' && jumlahJual != '' && hargaJual != '' && tanggalJual != '' && tujuanPengiriman != '') {
        var tanggalPanen = new Date(result.tanggalPanen * 1000).toLocaleString();
        var tanggalJual = new Date(result.tanggalJual * 1000).toLocaleString();
        produsenData.html = `<tr>
                                    <td><b>Nama Produsen:</b></td>
                                    <td>` + namaProdusen + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Tanggal Panen:</b></td>
                                    <td>` + tanggalPanen + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Jumlah Cabai yang Dijual:</b></td>
                                    <td>` + jumlahJual + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Harga Jual Per Kilogram :</b></td>
                                    <td>` + hargaJual + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Tanggal Penjualan :</b></td>
                                    <td>` + tanggalJual + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Alamat Pengiriman Cabai:</b></td>
                                    <td>` + tujuanPengiriman + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>`;
        produsenData.isDataAvail = true;
    } else {
        produsenData.html = `<tr>
                                  <td colspan="2"><p>Informasi Tidak Tersedia</p></td>
                            </tr>`;
        produsenData.isDataAvail = false;
    }

    return produsenData;
}

function buildPengepulBlock(result) {
    var pengepulData = {};
    var namaPengepul = result.namaPengepul;
    var diterimaCabai = result.diterimaCabai;
    var jumlahJual = result.jumlahJual;
    var hargaJual = result.hargaJual;
    var tanggalJual = result.tanggalJual;
    var tujuanPengiriman = result.tujuanPengiriman;

    if (namaPengepul != '' && diterimaCabai != '' && jumlahJual != '' && hargaJual != '' && tanggalJual != '' && tujuanPengiriman != '') {
        var diterimaCabai = new Date(result.diterimaCabai * 1000).toLocaleString();
        var tanggalJual = new Date(result.tanggalJual * 1000).toLocaleString();
        pengepulData.html = `<tr>
                              <td><b>Nama Pengepul:</b></td>
                              <td>` + namaPengepul + ` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>
                            <tr>
                              <td><b>Tanggal Panen:</b></td>
                              <td>` + diterimaCabai + ` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>
                            <tr>
                              <td><b>Jumlah Cabai yang Dijual:</b></td>
                              <td>` + jumlahJual + ` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>
                            <tr>
                              <td><b>Harga Jual Per Kilogram :</b></td>
                              <td>` + hargaJual + ` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>
                            <tr>
                              <td><b>Tanggal Penjualan :</b></td>
                              <td>` + tanggalJual + ` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>
                            <tr>
                              <td><b>Alamat Pengiriman Cabai:</b></td>
                              <td>` + tujuanPengiriman + ` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>`;
        pengepulData.isDataAvail = true;
    } else {
        pengepulData.html = `<tr>
                                        <td colspan="2"><p>Informasi Tidak Tersedia</p></td>
                                </tr>`;
        pengepulData.isDataAvail = false;
    }

    return pengepulData;
}

function buildPedagangGrosirBlock(result) {
    var pedagangGrosirData = {};
    var namaPedagangGrosir = result.namaPedagangGrosir;
    var diterimaCabai = result.diterimaCabai;
    var jumlahJual = result.jumlahJual;
    var hargaJual = result.hargaJual;
    var tanggalJual = result.tanggalJual;
    var tujuanPengiriman = result.tujuanPengiriman;

    if (namaPedagangGrosir != '' && diterimaCabai != '' && jumlahJual != '' && hargaJual != '' && tanggalJual != '' && tujuanPengiriman != '') {
        var diterimaCabai = new Date(result.diterimaCabai * 1000).toLocaleString();
        var tanggalJual = new Date(result.tanggalJual * 1000).toLocaleString();
        pedagangGrosirData.html = `<tr>
                                    <td><b>Nama Pedagang Grosir:</b></td>
                                    <td>` + namaPedagangGrosir + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Tanggal Panen:</b></td>
                                    <td>` + diterimaCabai + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Jumlah Cabai yang Dijual:</b></td>
                                    <td>` + jumlahJual + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Harga Jual Per Kilogram :</b></td>
                                    <td>` + hargaJual + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Tanggal Penjualan :</b></td>
                                    <td>` + tanggalJual + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Alamat Pengiriman Cabai:</b></td>
                                    <td>` + tujuanPengiriman + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>`;
        pedagangGrosirData.isDataAvail = true;
    } else {
        pedagangGrosirData.html = `<tr>
                                      <td colspan="2"><p>Informasi Tidak Tersedia</p></td>
                              </tr>`;
        pedagangGrosirData.isDataAvail = false;
    }

    return pedagangGrosirData;
}

function buildPedagangEceranBlock(result) {
    var pedagangEceranData = {};
    var namaPedagangEceran = result.namaPedagangEceran;
    var diterimaCabai = result.diterimaCabai;
    var jumlahJual = result.jumlahJual;
    var hargaJual = result.hargaJual;

    if (namaPedagangEceran != '' && diterimaCabai != '' && jumlahJual != '' && hargaJual != '') {
        var diterimaCabai = new Date(result.diterimaCabai * 1000).toLocaleString();
        pedagangEceranData.html = `<tr>
                                    <td><b>Nama Pedagang Eceran:</b></td>
                                    <td>` + namaPedagangEceran + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Tanggal Panen:</b></td>
                                    <td>` + diterimaCabai + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Jumlah Cabai yang Dijual:</b></td>
                                    <td>` + jumlahJual + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Harga Jual Per Kilogram :</b></td>
                                    <td>` + hargaJual + ` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>`;
        pedagangEceranData.isDataAvail = true;
    } else {
        pedagangEceranData.html = `<tr>
	                                    <td colspan="2"><p>Informasi Tidak Tersedia</p></td>
	                            </tr>`;
        pedagangEceranData.isDataAvail = false;
    }

    return pedagangEceranData;
}