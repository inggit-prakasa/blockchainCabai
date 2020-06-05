<?php include('template/_header.php'); ?>

    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <div class="app-header header-shadow">

            <div class="app-header__logo">
                <div class="logo-src">BLOCKCHAIN CABAI</div>
                <!-- <div class="header__pane ml-auto">
                    <div>
                        <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div> -->
            </div>

            <div class="app-header__mobile-menu">
                <div>
                    <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>

        </div>

        <div class="app-main">

            <div class="app-sidebar sidebar-shadow">

                <div class="app-header__logo">
                    <div>BLOCKCHAIN SCM</div>
                    <div class="header__pane ml-auto">
                        <div>
                            <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="scrollbar-sidebar">
                    <div class="app-sidebar__inner">
                        <ul class="vertical-nav-menu">
                            <li class="app-sidebar__heading">Dashboard Admin</li>
                            <li>
                                <a href="admin.php" class="mm-active">
                                    <i class="metismenu-icon pe-7s-bookmarks"></i> Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="userAdmin.php">
                                    <i class="metismenu-icon pe-7s-user"></i> User
                                </a>
                            </li>
                            <li>
                                <a href="login.php">
                                    <i class="metismenu-icon pe-7s-back"></i> Log Out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>

            <div class="app-main__outer">
                <div class="app-main__inner">

                    <!-- Jumlah total -->
                    <div class="row">
                        <div class="col-md-6 col-xl-4">
                            <div class="card mb-3 widget-content">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Users</div>
                                            <div class="widget-subheading">Jumlah Pengguna</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-success" id="totalUsers">0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="card mb-3 widget-content">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Role</div>
                                            <div class="widget-subheading">Jumlah Stakeholder</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-warning">5</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="card mb-3 widget-content">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Transaksi</div>
                                            <div class="widget-subheading">Jumlah Transaksi</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-danger" id="totalBatch">0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 


                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-info" id="divOngoingTransaction" style="display: none">Ongoing Transaction: <span id="linkOngoingTransaction">None</span> </div>
                    </div>    
                </div>
                    <!-- Detail Pemesanan -->
                    <button type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#batchFormModel" > Tambah Transaksi Baru </button>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="main-card mb-3 card">

                                <div class="card-header">
                                    DETAIL TRANSAKSI
                                </div>

                                <div class="table-responsive">
                                    <table class="align-middle mb-0 table table-borderless table-hover" id="adminCultivationTable">
                                        <thead>
                                            <tr>
                                                <th>ID Transaksi</th>
                                                <th>QR-Code</th>
                                                <th>Produsen</th>
                                                <th>Pengepul</th>
                                                <th>Pedagang Grosir</th>
                                                <th>Pedagang Eceran</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colspan="7" align="center">No Data Available</td>
                                            </tr>   
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Address admin dan kontak penyimpanan -->
                    <div class="row">
                            <div class="col-md-6 col-xl-6">
                                <div class="card mb-3 widget-content bg-midnight-bloom">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Admin Address</div>
                                            <div id="CurrentAddress" class="widget-subheading">0x0000000000000000000000000000000000000000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-6">
                                <div class="card mb-3 widget-content bg-arielle-smile">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Storage Contract Address</div>
                                            <div id="AddressContractPenyimpanan" class="widget-subheading">0x0000000000000000000000000000000000000000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                    <!-- Address SCM cabai dan User contract -->
                    <div class="row">
                        <div class="col-md-6 col-xl-6">
                            <div class="card mb-3 widget-content bg-grow-early">
                                <div class="widget-content-wrapper text-white">
                                    <div class="widget-content-left">
                                        <div class="widget-heading">Cabai Transaction Contract Address</div>
                                        <div id="AddressSCMCabai" class="widget-subheading">0x0000000000000000000000000000000000000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6">
                            <div class="card mb-3 widget-content bg-premium-dark">
                                <div class="widget-content-wrapper text-white">
                                    <div class="widget-content-left">
                                        <div class="widget-heading">User Contract Address</div>
                                        <div id="AddressUserContract" class="widget-subheading">0x0000000000000000000000000000000000000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="app-wrapper-footer">
                    <div class="app-footer">
                        <div class="app-footer__inner">
                            <div class="app-footer-right">
                                <ul class="nav">
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link">
                                        © Blockchain Cabai 2020
                                            </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <script type="text/javascript">
        var batchFormInstance, userFormInstance;
        $(document).ready(function(){
            userFormInstance = $("#userForm").parsley();
            batchFormInstance = $("#batchForm").parsley();

            // initSwitch();
        });

        function initSwitch(){
            /*For User Form Pop Up*/
                new Switchery($("#isActive")[0], $("#isActive").data());     
        }
    </script>

<?php include('template/_footer.php') ?>