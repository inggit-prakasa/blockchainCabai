<?php include('template/_header.php'); ?>
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <div class="app-header header-shadow">
            <div class="app-header__logo">
                <div class="logo-src">BLOCKCHAIN SCM</div>
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
                            <li class="app-sidebar__heading">Dashboards</li>
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
                                            <div class="widget-heading">Total Users</div>
                                            <div class="widget-subheading">Jumlah Pengguna</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-success">0</div>
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
                                            <div class="widget-heading">Total Roles</div>
                                            <div class="widget-subheading">Jumlah Pekerja</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-warning">0</div>
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
                                            <div class="widget-heading">Total Pemesanan</div>
                                            <div class="widget-subheading">Jumlah Pesanan</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-danger">0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <!-- Detail Pemesanan -->
                    <button type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" > Buat Pesanan </button>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="main-card mb-3 card">

                                <div class="card-header">
                                    DETAIL PEMESANAN
                                </div>

                                <div class="table-responsive">
                                    <table class="align-middle mb-0 table table-borderless table-hover">
                                        <thead>
                                            <tr>
                                                <th>ID Detail Pemesanan</th>
                                                <th>QR-Code</th>
                                                <th>Produsen</th>
                                                <th>Pengepul</th>
                                                <th>Pedagang Grosir</th>
                                                <th>Pedagang Eceran</th>
                                                <th>Konsumen</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colspan="8" align="center">No Data Available</td>
                                            </tr>   
                                        </tbody>
                                        <!-- <tbody>
                                            <tr>
                                                <td class="text-center text-muted">0xA70336fB63f55110bE13E6376296aA083B7C15a4</td>
                                                <td>
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left flex2">
                                                                <div class="widget-heading">John Doe</div>
                                                                <div class="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="text-center">
                                                    <div class="badge badge-warning">Pending</div>
                                                </td>
                                                <td class="text-center">
                                                    <div class="badge badge-warning">Pending</div>
                                                </td>
                                                <td class="text-center">
                                                    <div class="badge badge-warning">Pending</div>
                                                </td>
                                                <td class="text-center">
                                                    <div class="badge badge-warning">Pending</div>
                                                </td>
                                                <td class="text-center">
                                                    <div class="badge badge-warning">Pending</div>
                                                </td>
                                                <td class="text-center">
                                                    <button type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr>
                                        </tbody> -->
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
                                            <div class="widget-heading">Address Admin</div>
                                            <div id="AddressAdmin" class="widget-subheading">0x0000000000000000000000000000000000000000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-6">
                                <div class="card mb-3 widget-content bg-arielle-smile">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Address Contract Penyimpanan</div>
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
                                        <div class="widget-heading">Address SCM Cabai</div>
                                        <div id="AddressSCMCabai" class="widget-subheading">0x0000000000000000000000000000000000000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6">
                            <div class="card mb-3 widget-content bg-premium-dark">
                                <div class="widget-content-wrapper text-white">
                                    <div class="widget-content-left">
                                        <div class="widget-heading">Address User Contract</div>
                                        <div id="AddressUserContract" class="widget-subheading">0x0000000000000000000000000000000000000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p class="mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <script type="text/javascript">
                        var batchFormInstance, userFormInstance;
                        $(document).ready(function(){
                            userFormInstance = $("#userForm").parsley();
                            batchFormInstance = $("#batchForm").parsley();

                            initSwitch();
                        });

                        function initSwitch(){
                            /*For User Form Pop Up*/
                            //  new Switchery($("#isActive")[0], $("#isActive").data());     
                        }
                    </script> -->
                    
                    <div class="app-wrapper-footer">
                    <div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="./assets/scripts/main.js"></script>
</body>

</html>


<!-- Large modal -->
<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>