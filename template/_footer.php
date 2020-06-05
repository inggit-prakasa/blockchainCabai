    <!-- Contract ABI -->
    <script type="text/javascript" src="./assets/scripts/main.js"></script>
    <script type="text/javascript" src="./assets/scripts/abi/CabaiSupplyChainAbi.js"></script>
    <script type="text/javascript" src="./assets/scripts/abi/SupplyChainUserAbi.js"></script>
    <script type="text/javascript" src="./web3/dist/web3.min.js"></script>

    <!-- App -->
    <script src="https://unpkg.com/ipfs-api@9.0.0/dist/index.js" integrity="sha384-5bXRcW9kyxxnSMbOoHzraqa7Z0PQWIao+cgeg327zit1hz5LZCEbIMx/LWKPReuB"
        crossorigin="anonymous"></script>
    <script type="text/javascript" src="./assets/scripts/app.js"></script>
    <script type="text/javascript" src="./assets/scripts/batchDetail.js"></script>

    <!-- Parsley -->
    <script type="text/javascript" src="./parsleyjs/dist/parsley.min.js"></script>
    <script type="text/javascript" src="./parsleyjs/dist/i18n/id.js"></script>

    <!-- admin || user -->
    <?php 
        if(isset($_SERVER['SCRIPT_NAME']) && strpos($_SERVER['SCRIPT_NAME'], "admin.php" ) !== false)
        {
            ?>
                <script type="text/javascript" src="assets/scripts/admin.js"></script>
            <?php
        }
        elseif(isset($_SERVER['SCRIPT_NAME']) && strpos($_SERVER['SCRIPT_NAME'], "userAdmin.php" ) !== false)
        {
            ?>
                <script type="text/javascript" src="assets/scripts/admin.js"></script>
            <?php
        }
        elseif(isset($_SERVER['SCRIPT_NAME']) && strpos($_SERVER['SCRIPT_NAME'], "accountSetting.php" ) !== false)
        {
            ?>
                <script type="text/javascript" src="assets/scripts/user.js"></script>
            <?php
        }
        elseif(isset($_SERVER['SCRIPT_NAME']) && strpos($_SERVER['SCRIPT_NAME'], "user.php") !== false)
        {
            ?>
                <script type="text/javascript" src="assets/scripts/user.js"></script>
            <?php
        }
        elseif(isset($_SERVER['SCRIPT_NAME']) && strpos($_SERVER['SCRIPT_NAME'], "konsumen.php") !== false)
        {
            ?>
                <script type="text/javascript" src="assets/scripts/konsumen.js"></script>
            <?php
        }
    ?>

</body>

</html>
            <!-- Modal Batch -->
            <div id="batchFormModel" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Tambah Transaksi Baru</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <form id="batchForm" onsubmit="return false;">
                            <fieldset style="border:0;">
                                <div class="form-group">
                                    <label class="control-label" for="sentraProduksi">Sentra Produksi <i class="red">*</i></label>
                                    <input type="text" class="form-control" id="sentraProduksi" name="sentraProduksi" placeholder="Alamat Sentra Produksi" data-parsley-required="true">
                                </div> 
                                <div class="form-group">
                                        <label class="control-label" for="jenisCabai">Jenis Cabai <i class="red">*</i></label>
                                        <select class="form-control" id="jenisCabai" name="jenisCabai" data-parsley-required="true">
                                            <option value="">Pilih Jenis Cabai</option>
                                            <option value="Cabai Keriting">Cabai Keriting</option>
                                            <option value="Cabai Besar">Cabai Besar</option>
                                            <option value="Cabai Rawit">Cabai Rawit</option>
                                        </select>    
                                    </div>
                            </fieldset>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" onclick="addCultivationBatch();" class="fcbtn btn btn-primary btn-outline btn-1f">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div id="userFormModel" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none; padding-top: 170px;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="userModelTitle">Add User</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div class="modal-body">
                        <form id="userForm" onsubmit="return false;">
                            <fieldset style="border:0;">
                                <div class="form-group">
                                    <label class="control-label" for="userWalletAddress">User Wallet Address <i class="red">*</i></label>
                                    <input type="text" class="form-control" id="userWalletAddress" name="userWalletAddress" placeholder="Wallet Address" data-parsley-required="true" minlength="42" maxlength="42">
                                </div> 
                                <div class="form-group">
                                    <label class="control-label" for="userName">Nama <i class="red">*</i></label>
                                    <input type="text" class="form-control" id="userName" name="userName" placeholder="Nama" data-parsley-required="true">
                                </div>                              
                                <div class="form-group">
                                    <label class="control-label" for="userContactNo">No HP <i class="red">*</i></label>
                                    <input type="text" class="form-control" id="userContactNo" name="userContactNo" placeholder="No HP" data-parsley-required="true" data-parsley-type="digits" data-parsley-length="[10, 15]" maxlength="15">
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="userAlamat">Alamat <i class="red">*</i></label>
                                    <input type="text" class="form-control" id="userAlamat" name="userAlamat" placeholder="Kelurahan, Kecamatan, Kota/Kabupaten" data-parsley-required="true">
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="userRoles">User Role <i class="red">*</i></label>
                                    <select class="form-control" id="userRoles" name="userRoles" data-parsley-required="true">
                                        <option value="">Pilih Role</option>
                                        <option value="PRODUSEN">Produsen</option>
                                        <option value="PENGEPUL">Pengepul</option>
                                        <option value="PEDAGANG_GROSIR">Pedagang Grosir</option>
                                        <option value="PEDAGANG_ECERAN">Pedagang Eceran</option>
                                    </select>    
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="isActive">User Status</label>
                                    <input type="checkbox" class="js-switch" data-color="#99d683" data-secondary-color="#f96262" id="isActive" name="isActive" data-size="small"/>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="userProfileHash">Profile Image <i class="red">*</i></label>
                                    <input type="file" class="form-control" onchange="handleFileUpload(event);" />
                                    <input type="hidden" class="form-control" id="userProfileHash" name="userProfileHash" placeholder="User Profile Hash" data-parsley-required="true" >
                                    <span id="imageHash"></span>
                                </div>
                            </fieldset>
                        </div>
                        <div class="modal-footer">
                            <i style="display: none;" class="fa fa-spinner fa-spin"></i>
                                <button type="submit" onclick="userFormSubmit();" class="fcbtn btn btn-primary btn-outline btn-1f" id="userFormBtn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div id="userUpdateFormModel" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none; padding-top: 170px;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Update Profile</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div class="modal-body">
                            <form id="updateUserForm" onsubmit="return false;">
                                    <fieldset style="border:0;">
                                        <div class="form-group">
                                            <label class="control-label" for="Updatefullname">Full Name <i class="red">*</i></label>
                                            <input type="text" class="form-control" id="Updatefullname" name="Updatefullname" placeholder="Name" data-parsley-required="true">
                                        </div>                              
                                        <div class="form-group">
                                            <label class="control-label" for="UpdatecontactNumber">Contact No<i class="red">*</i></label>
                                            <input type="text" class="form-control" id="UpdatecontactNumber" name="UpdatecontactNumber" placeholder="Contact No." data-parsley-required="true" data-parsley-type="digits" data-parsley-length="[10, 15]" maxlength="15">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="Updatealamat">Alamat <i class="red">*</i></label>
                                            <input type="text" class="form-control" id="Updatealamat" name="Updatealamat" placeholder="Kelurahan, Kecamatan, Kota/Kabupaten" data-parsley-required="true">
                                        </div>     
                                        <div class="form-group">
                                            <label class="control-label" for="role">Role </label>
                                            <select class="form-control" id="role" disabled="true" name="role">
                                                <option value="">Select Role</option>
                                                <option value="PRODUSEN">Petani</option>
                                                <option value="PENGEPUL">Pengepul</option>
                                                <option value="PEDAGANG_GROSIR">Pedagang Grosir</option>
                                                <option value="PEDAGANG_ECERAN">Pedagang Eceran</option>
                                            </select>    
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="UpdateisActive">User Status</label>
                                            <input type="checkbox" class="js-switch" data-color="#99d683" data-secondary-color="#f96262" id="UpdateisActive" name="UpdateisActive" data-size="small"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="userProfileHash">Profile Image <i class="red">*</i></label>
                                            <input type="file" class="form-control" onchange="handleFileUpload(event);" />
                                            <input type="hidden" class="form-control" id="userProfileHash" name="userProfileHash" placeholder="User Profile Hash" data-parsley-required="true" >
                                            <span id="imageHash"></span>
                                        </div>
                                    </fieldset>
                        </div>
                        <div class="modal-footer">
                            <i style="display: none;" class="fa fa-spinner fa-spin"></i>
                                <button type="reset" class="btn btn-default waves-effect" >Reset</button>
                                <button type="button" onclick="userFormButton();" class="btn btn-primary" id="userFormBtn">Submit</button>
                            </form>
                        </div>
                    </div> 
                </div>
            </div>

            <div id="produsenFormModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none; padding-top: 170px;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Produsen</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div class="modal-body">
                            <form id="produsenForm">
                            <fieldset style="border:0;">
                                    <div class="form-group">
                                        <label class="control-label" for="namaProdusen">Nama Produsen</label>
                                        <input type="text" class="form-control" id="namaProdusen" name="namaProdusen" placeholder="Nama Produsen" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="tanggalPanenProdusen">Tanggal Panen</label>
                                        <input type="text" class="form-control datepicker-master" id="tanggalPanenProdusen" name="tanggalPanenProdusen" placeholder="Tanggal Panen" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="jumlahJualProdusen">Jumlah Cabai yang Dijual (Kg)</label>
                                        <input type="number" min="1" class="form-control" id="jumlahJualProdusen" name="jumlahJualProdusen" placeholder="0" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="hargaJualProdusen">Harga Cabai Per Kilogram (Rp)</label>
                                        <input type="number" min="1" class="form-control" id="hargaJualProdusen" name="hargaJualProdusen" placeholder="0" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="tanggalJualProdusen">Tanggal Penjualan Cabai</label>
                                        <input type="text" class="form-control datepicker-master" id="tanggalJualProdusen" name="tanggalJualProdusen" placeholder="Tanggal Penjualan Cabai" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="tujuanPengirimanProdusen">Alamat Pengiriman Cabai</label>
                                        <input type="text" class="form-control" id="tujuanPengirimanProdusen" name="tujuanPengirimanProdusen" placeholder="Kelurahan, Kecamatan, Kota/Kabupaten" data-parsley-required="true">
                                    </div> 
                                </fieldset>
                        </div>
                        <div class="modal-footer">
                            <i style="display: none;" class="fa fa-spinner fa-spin"></i>
                                <button type="reset" class="btn btn-default waves-effect" >Reset</button>
                                <button type="button" onclick="updateProdusenButton();" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pengepulFormModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none; padding-top: 170px;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Pengepul</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div class="modal-body">
                            <form id="pengepulForm" class="mfp-hide white-popup-block ">
                            <fieldset style="border:0;">
                                    <div class="form-group">
                                        <label class="control-label" for="namaPengepul">Nama Pengepul</label>
                                        <input type="text" class="form-control" id="namaPengepul" name="namaPengepul" placeholder="Nama Pengepul" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="diterimaCabaiPengepul">Tanggal Cabai Diterima</label>
                                        <input type="text" class="form-control datepicker-master" id="diterimaCabaiPengepul" name="diterimaCabaiPengepul" placeholder="Tanggal Cabai Diterima" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="jumlahJualPengepul">Jumlah Cabai yang Dijual (Kg)</label>
                                        <input type="number" min="1" class="form-control" id="jumlahJualPengepul" name="jumlahJualPengepul" placeholder="0" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="hargaJualPengepul">Harga Cabai Per Kilogram (Rp)</label>
                                        <input type="number" min="1" class="form-control" id="hargaJualPengepul" name="hargaJualPengepul" placeholder="0" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="tanggalJualPengepul">Tanggal Penjualan Cabai</label>
                                        <input type="text" class="form-control datepicker-master" id="tanggalJualPengepul" name="tanggalJualPengepul" placeholder="Tanggal Penjualan Cabai" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="tujuanPengirimanPengepul">Alamat Pengiriman Cabai</label>
                                        <input type="text" class="form-control" id="tujuanPengirimanPengepul" name="tujuanPengirimanPengepul" placeholder="Kelurahan, Kecamatan, Kota/Kabupaten" data-parsley-required="true">
                                    </div> 
                                </fieldset>
                        </div>
                        <div class="modal-footer">
                            <i style="display: none;" class="fa fa-spinner fa-spin"></i>
                                <button type="reset" class="btn btn-default waves-effect" >Reset</button>
                                <button type="button" onclick="updatePengepulButton();" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pedagangGrosirFormModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none; padding-top: 170px;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Pedagang Grosir</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div class="modal-body">
                            <form id="pedagangGrosirForm" class="mfp-hide white-popup-block">
                            <fieldset style="border:0;">
                                    <div class="form-group">
                                        <label class="control-label" for="namaPedagangGrosir">Nama Pedagang Grosir</label>
                                        <input type="text" class="form-control" id="namaPedagangGrosir" name="namaPedagangGrosir" placeholder="Nama Pedagang Grosir" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="diterimaCabaiPedagangGrosir">Tanggal Cabai Diterima</label>
                                        <input type="text" class="form-control datepicker-master" id="diterimaCabaiPedagangGrosir" name="diterimaCabaiPedagangGrosir" placeholder="Tanggal Cabai Diterima" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="jumlahJualPedagangGrosir">Jumlah Cabai yang Dijual (Kg)</label>
                                        <input type="number" min="1" class="form-control" id="jumlahJualPedagangGrosir" name="jumlahJualPedagangGrosir" placeholder="0" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="hargaJualPedagangGrosir">Harga Cabai Per Kilogram (Rp)</label>
                                        <input type="number" min="1" class="form-control" id="hargaJualPedagangGrosir" name="hargaJualPedagangGrosir" placeholder="0" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="tanggalJualPedagangGrosir">Tanggal Penjualan Cabai</label>
                                        <input type="text" class="form-control datepicker-master" id="tanggalJualPedagangGrosir" name="tanggalJualPedagangGrosir" placeholder="Tanggal Penjualan Cabai" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="tujuanPengirimanPedagangGrosir">Alamat Pengiriman Cabai</label>
                                        <input type="text" class="form-control" id="tujuanPengirimanPedagangGrosir" name="tujuanPengirimanPedagangGrosir" placeholder="Kelurahan, Kecamatan, Kota/Kabupaten" data-parsley-required="true">
                                    </div> 
                                </fieldset>
                        </div>
                        <div class="modal-footer">
                            <i style="display: none;" class="fa fa-spinner fa-spin"></i>
                                <button type="reset" class="btn btn-default waves-effect" >Reset</button>
                                <button type="button" onclick="updatePedagangGrosirButton();" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pedagangEceranFormModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none; padding-top: 170px;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Exporting</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div class="modal-body">
                            <form id="pedagangEceranForm" class="mfp-hide white-popup-block">
                            <fieldset style="border:0;">
                                    <div class="form-group">
                                        <label class="control-label" for="namaPedagangEceran">Nama Pedagang Eceran</label>
                                        <input type="text" class="form-control" id="namaPedagangEceran" name="namaPedagangEceran" placeholder="Nama Pedagang Eceran" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="diterimaCabaiPedagangEceran">Tanggal Cabai Diterima</label>
                                        <input type="text" class="form-control datepicker-master" id="diterimaCabaiPedagangEceran" name="diterimaCabaiPedagangEceran" placeholder="Tanggal Cabai Diterima" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="jumlahJualPedagangEceran">Jumlah Cabai yang Dijual (Kg)</label>
                                        <input type="number" min="1" class="form-control" id="jumlahJualPedagangEceran" name="jumlahJualPedagangEceran" placeholder="0" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="hargaJualPedagangEceran">Harga Cabai Per Kilogram (Rp)</label>
                                        <input type="number" min="1" class="form-control" id="hargaJualPedagangEceran" name="hargaJualPedagangEceran" placeholder="0" data-parsley-required="true">
                                    </div>
                                </fieldset>
                        </div>
                        <div class="modal-footer">
                            <i style="display: none;" class="fa fa-spinner fa-spin"></i>
                                <button type="reset" class="btn btn-default waves-effect" >Reset</button>
                                <button type="button" onclick="updatePedagangEceranButton();" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>