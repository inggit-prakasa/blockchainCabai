<?php include("template/_header.php")?>
<?php 
     if(!isset($_GET['batchNo']) || (isset($_GET['batchNo']) && $_GET['batchNo']=='') &&
        !isset($_GET['txn']) || (isset($_GET['txn']) && $_GET['txn']=='')){
        echo "<script>window.location = 'login.php';</script>";
     }   
?>
<style type="text/css">
    .verified_info{
        color: green;
    }
</style>

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

            <div class="app-main__inner">
                <div class="app-page-title">
                    <div class="page-title-wrapper">
                        <div class="page-title-heading">
                            <div class="page-title-icon">
                                <i class="pe-7s-box2 text-info">
                                </i>
                            </div>
                            <div>
                                Batch Progress <a href="javascript:void(0);" onclick="javascript:window.print();" class="text-info" title="Print Page Report"><i class="fa fa-print"></i> Print</a>
                                <div class="page-title-subheading">
                                    Batch No. <?php echo $_GET['batchNo'];?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="white-box">

                                <ul class="timeline">
                                    <!-- Cultivation -->
                                    <li>
                                        <div class="timeline-badge danger">
                                            <i class="fa fa-check"></i>
                                        </div>

                                        <div class="timeline-panel" id="cultivationSection">
                                            <div class="timeline-heading">
                                                <h4 class="timeline-title">Kultivasi</h4>
                                                <p><small class="text-muted text-success activityDateTime"></small> </p>
                                                <span class="activityQrCode"></span>
                                            </div>
                                            <div class="timeline-body">
                                                <table class="table activityData table-responsive" >
                                                    <tr>
                                                        <td colspan="2"><p>Informasi tidak tersedia</p></td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </li>

                                    <!-- Produsen -->
                                    <li class="timeline-inverted">
                                        <div class="timeline-badge danger">
                                            <i class="fa fa-times"></i>
                                        </div>

                                        <div class="timeline-panel" id="produsenSection">
                                            <div class="timeline-heading">
                                                <h4 class="timeline-title">Produsen</h4>
                                                <p><small class="text-muted text-success activityDateTime"></small> </p>
                                                <span class="activityQrCode"></span>
                                            </div>
                                            <div class="timeline-body">
                                                <table class="table activityData table-responsive">
                                                    <tr>
                                                        <td colspan="2"><p>Informasi tidak tersedia</p></td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </li>

                                    <!-- Pengepul -->
                                    <li>
                                        <div class="timeline-badge danger">
                                            <i class="fa fa-times"></i>
                                        </div>
                                        <div class="timeline-panel" id="pengepulSection">
                                        
                                            <div class="timeline-heading">
                                                <h4 class="timeline-title">Pengepul</h4>
                                                <p><small class="text-muted text-success activityDateTime"></small> </p>
                                                <span class="activityQrCode"></span>
                                            </div>

                                            <div class="timeline-body">
                                                <table class="table activityData table-responsive" >
                                                    <tr>
                                                        <td colspan="2"><p>Informasi tidak tersedia</p></td>
                                                    </tr>
                                                </table>        
                                            </div>
                                        </div>
                                    </li>

                                    <!-- Pedagang Grosir -->
                                    <li class="timeline-inverted">

                                        <div class="timeline-badge danger">
                                            <i class="fa fa-times"></i>
                                        </div>

                                        <div class="timeline-panel" id="pedagangGrosirSection"> 

                                            <div class="timeline-heading">
                                                <h4 class="timeline-title">Pedagang Grosir</h4>
                                                <p><small class="text-muted text-success activityDateTime"></small> </p>
                                                <span class="activityQrCode"></span>
                                            </div>

                                            <div class="timeline-body">
                                                <table class="table activityData table-responsive">
                                                    <tr>
                                                        <td colspan="2"><p>Informasi tidak tersedia</p></td>
                                                    </tr>
                                                </table>  
                                            </div>
                                        </div>
                                    </li>

                                    <!-- Pedagang Eceran -->
                                    <li>
                                        <div class="timeline-badge danger">
                                            <i class="fa fa-times"></i>
                                        </div>
                                        <div class="timeline-panel" id="pedagangEceranSection">
                                            <div class="timeline-heading">
                                                <h4 class="timeline-title">Pedagang Eceran</h4>
                                                <p><small class="text-muted text-success activityDateTime"></small> </p>
                                                <span class="activityQrCode"></span>
                                            </div>
                                            <div class="timeline-body">
                                                <table class="table activityData table-responsive" >
                                                    <tr>
                                                        <td colspan="2"><p>Informasi Tidak Tersedia</p></td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    <input type="hidden" id="batchNo" value="<?php $batchNo = isset($_GET['batchNo'])?$_GET['batchNo']:''; echo $batchNo;?>">

    <style type="text/css">
        .verified_info{
            color: green;
        }
    </style>
<?php include("template/_footer.php")?>