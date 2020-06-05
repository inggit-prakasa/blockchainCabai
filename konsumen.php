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
                    <div>BLOCKCHAIN CABAI</div>
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
                            <li>
                                <div class="profile-sidebar">
                                    <div class="profile-userpic">
                                        <img id="userImage" src="https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" alt="">
                                    </div>
                                    <div class="profile-usertitle">
                                        
                                        <div class="profile-usertitle-name" id="userRole">
                                            KONSUMEN
                                        </div>
                                       
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="mm-active">
                                    <i class="metismenu-icon pe-7s-home"></i> Overview
                                </a>
                            </li>
                            <li>
                                <a href="login.php">
                                    <i class="metismenu-icon pe-7s-back" ></i> Log Out
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>

            </div>

            <div class="app-main__outer">
                <div class="app-main__inner">

                    <!-- Page Title Account Address -->
                    <div class="app-page-title">
                        <div class="page-title-wrapper">
                            <div class="page-title-heading">
                                <div class="page-title-icon">
                                    <i class="pe-7s-box2 text-success">
                                    </i>
                                </div>
                                <div>Account Address
                                    <div class="page-title-subheading" id="CurrentAddress">
                                        0x0000000000000000000000000000000000000000
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Detail Pemesanan -->
                   <div class="row">
                        <div class="col-md-12">
                            <div class="main-card mb-3 card">

                                <div class="card-header">
                                    DETAIL TRANSAKSI
                                </div>

                                <div class="table-responsive">
                                    <table class="align-middle mb-0 table table-borderless table-hover" id="konsumenCultivationTable">
                                        <thead>
                                            <tr>
                                                <th>ID Transaksi</th>
                                                <th>QR-Code</th>
                                                <th>Produsen</th>
                                                <th>Pengepul</th>
                                                <th>Pedagang Grosir</th>
                                                <th>Pedagang Eceran</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colspan="8" align="center">No Data Available</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
        var switchery;
        $(document).ready(function(){
            initSwitch();
            initDateTimePicker();
        });

        function initSwitch(){
            /*For User Form Pop Up*/
            switchery = new Switchery($("#isActive")[0], $("#isActive").data());    
        }

        $(function () {
            $('#datetimepicker1').datetimepicker();
        });

        function initDateTimePicker(){
            $('.datepicker-master').datetimepicker({
                format: 'd-m-yy h:i:s',
                weekStart: 1,
                todayBtn:  1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                forceParse: 0,
                showMeridian: 1,
                minuteStep: 1
            });
        }
    </script>

<?php include('template/_footer.php'); ?>