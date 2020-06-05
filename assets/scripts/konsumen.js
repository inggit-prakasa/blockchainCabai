$(window).on('coinbaseReady',function(){
    getCultivationEvents(globMainContract);
});


function getCultivationEvents(contractRef) {
    contractRef.getPastEvents('PerformCultivation', {
        fromBlock: 0
    }).then(function (events) 
    {
    	$("#totalBatch").html(events.length);
        
        var finalEvents = [];
        $.each(events,function(index,elem)
        {
            var tmpData = {};
            tmpData.batchNo = elem.returnValues.batchNo;
            tmpData.transactionHash = elem.transactionHash;
            getBatchStatus(contractRef, tmpData.batchNo).then(result => {
                tmpData.status = result;

                finalEvents.push(tmpData);
            });
        });

        setTimeout(function()
        {
        	if(finalEvents.length > 0){
	            var table = buildCultivationTable(finalEvents);
	            $("#konsumenCultivationTable").find("tbody").html(table);
	            $('.qr-code-magnify').magnificPopup({
				    type:'image',
				    mainClass: 'mfp-zoom-in'
				});
	        }    

            counterInit();
        },1000); 

    }).catch(error => {
        console.log(error)
    });
}

function buildCultivationTable(finalEvents) {
    var table = "";

    for (var tmpDataIndex in finalEvents) {
        var elem = finalEvents[tmpDataIndex];

        var batchNo = elem.batchNo;
        var transactionHash = elem.transactionHash;
        var tr = "";
        var url = 'https://rinkeby.etherscan.io/tx/' + transactionHash;
        var qrCode = 'https://chart.googleapis.com/chart?cht=qr&chld=H|1&chs=400x400&chl=' + url;

        var commBatchTd = `<td>` + batchNo + ` <a href="` + url + `" class="text-danger" target="_blank"><i class="metismenu-icon pe-7s-next-2"></i></a></td>`;
        var commQrTd = `<td><a href="` + qrCode + `" title="` + transactionHash + `" class="qr-code-magnify" data-effect="mfp-zoom-in">
				        	<img src="` + qrCode + `" class="img-responsive" style="width:30px; height:30px;">
				        </a>
				    </td>`;
        var commActionTd = `<td><a href="tampilDetail.php?batchNo=` + batchNo + `&txn=` + transactionHash + `" target="_blank" class="mb-2 mr-2 badge badge-primary" data-toggle="tooltip" title="View">View</a> </td>`;

        if (elem.status == "PRODUSEN") {
            tr = `<tr>
            		` + commBatchTd + commQrTd + `
                    <td><span class="mb-2 mr-2 badge badge-pill badge-secondary font-weight-100">Processing</span></td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-danger font-weight-100">Not Available</span> </td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-danger font-weight-100">Not Available</span> </td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-danger font-weight-100">Not Available</span> </td>
                    ` + commActionTd + `
                </tr>`;
        } else if (elem.status == "PENGEPUL") {
            tr = `<tr>
                    ` + commBatchTd + commQrTd + `
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span></td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-secondary font-weight-100">Processing</span> </td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-danger font-weight-100">Not Available</span> </td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-danger font-weight-100">Not Available</span> </td>
                    ` + commActionTd + `
                </tr>`;
        } else if (elem.status == "PEDAGANG_GROSIR") {
            tr = `<tr>
                    ` + commBatchTd + commQrTd + `
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span></td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span> </td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-secondary font-weight-100">Processing</span> </td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-danger font-weight-100">Not Available</span> </td>
                    ` + commActionTd + `
                </tr>`;
        } else if (elem.status == "PEDAGANG_ECERAN") {
            tr = `<tr>
                    ` + commBatchTd + commQrTd + `
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span></td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span> </td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span> </td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-secondary font-weight-100">Processing</span> </td>
                    ` + commActionTd + `
                </tr>`;
        } else if (elem.status == "DONE") {
            tr = `<tr>
                    ` + commBatchTd + commQrTd + `
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span></td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span> </td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span> </td>
                    <td><span class="mb-2 mr-2 badge badge-pill badge-success font-weight-100">Completed</span> </td>
                    ` + commActionTd + `
                </tr>`;
        }

        table += tr;
    }

    return table;
}

function getBatchStatus(contractRef, batchNo)
{
    return contractRef.methods.getNextAction(batchNo)
        .call();
       
}



