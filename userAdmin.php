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
                                <a href="admin.php">
                                    <i class="metismenu-icon pe-7s-bookmarks"></i> Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="userAdmin.php" class="mm-active">
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
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-info" id="divOngoingTransaction" style="display: none">Ongoing Transaction: <span id="linkOngoingTransaction">None</span> </div>
                    </div>    
                </div>

                <button type="button" id="userFormClick" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#userFormModel"> Add User </button>
                              
                    <div class="row">
                              
                        <!-- Card Tabel User -->
                        <div class="col-md-12">
                            <div class="main-card mb-3 card white-box">
                                <div class="card-body"><h5 class="card-title">Tabel User</h5>
                                <div class="table-responsive">
                                        <table class="mb-0 table table-responsive" id="tblUser">
                                            <thead>
                                                <tr>
                                                    <th>User Wallet Address</th>
                                                    <th>Nama</th>
                                                    <th>No HP</th>
                                                    <th>Alamat</th>
                                                    <th>Role</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card Role Table -->
                    <div class="row">
                        <div class="col-md-4">
                                <div class="main-card mb-3 card">
                                    <div class="card-body"><h5 class="card-title">USER ROLES</h5>
                                        <table class="mb-0 table table-borderless">
                                            <thead>
                                            <tr>
                                                <th>Stakeholder</th>
                                                <th>Role</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Produsen</td>
                                                    <td><div class="mb-2 mr-2 badge badge-pill badge-primary">PRODUSEN</div></td>
                                                </tr>
                                                <tr>
                                                    <td>Pengepul</td>
                                                    <td><div class="mb-2 mr-2 badge badge-pill badge-success">PENGEPUL</div></td>
                                                </tr>
                                                <tr>
                                                    <td>Pedagang Grosir</td>
                                                    <td><div class="mb-2 mr-2 badge badge-pill badge-info">PEDAGANG_GROSIR</div></td>
                                                </tr>
                                                <tr>
                                                    <td>Pedagang Eceran</td>
                                                    <td><div class="mb-2 mr-2 badge badge-pill badge-alternate">PEDAGANG_ECERAN</div></td>
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

<?php include('template/_footer.php'); ?>