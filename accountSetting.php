<?php include('template/_header.php')?>

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
                            <li>
                                <div class="profile-sidebar">
                                    <div class="profile-userpic">
                                        <img id="userImage" src="assets/images/Profiles.png" alt="">
                                    </div>
                                    <div class="profile-usertitle">
                                        <div class="profile-usertitle-name" id="userName">
                                        ----
                                        </div>
                                        <div class="profile-usertitle-ContactNo" id="userContact">
                                            ----
                                        </div>
                                        <div class="profile-usertitle-job" id="userRole">
                                            ----
                                        </div>
                                        <div class="profile-usertitle-job">
                                            <a href="javascript:void(0);" class="mb-2 mr-2 badge badge-primary" data-toggle="modal" data-target="#userUpdateFormModel" onclick="EditUser();">Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="user.php" >
                                    <i class="metismenu-icon pe-7s-home"></i> Overview
                                </a>
                            </li>
                            <li>
                                <a href="accountSetting.php" class="mm-active" id="editUser">
                                    <i class="metismenu-icon pe-7s-config"></i> Account Setting
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="app-main__outer">
                <div class="app-main__inner">

                    <!-- Title Update Profile -->
                    <div class="app-page-title">
                        <div class="page-title-wrapper">
                            <div class="page-title-heading">
                                <div class="page-title-icon">
                                    <i class="pe-7s-user text-success">
                                    </i>
                                </div>
                                <div>
                                    User Profile
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


<?php include('template/_footer.php')?>