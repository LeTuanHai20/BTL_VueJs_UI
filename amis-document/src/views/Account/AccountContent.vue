<template lang="">
 <div class="account-content">
   <div class="breadcrumbs">
        <ul>
            <li class="home">
                <a href="https://canifa.com/" title="Trang chủ">Trang chủ</a>
                <span>/ </span>
            </li>
            <li class="Tài khoản">
                <strong>Tài khoản</strong>
            </li>
        </ul>
    </div>
    
    <div class="main ">
        <div class="col-left sidebar col-sm-2">
            <div class="col-left-first">
                <div class="block block-account">
                
                    <div class="block-content">
                    <ul>
                        <li class="account current"><a href="https://canifa.com/customer/account/"><strong>Tài khoản của tôi</strong></a></li>
        
                        <li class="address_book" ><a href="https://canifa.com/customer/address/">Sổ địa chỉ</a></li>
        
                        <li class="order_checking" ><a href="https://canifa.com/order/checking/">Kiểm tra đơn hàng</a></li>
        
                        <li class="orders" ><a href="https://canifa.com/sales/order/history/">Lịch sử đơn hàng</a></li>
        
                        <li class="cardview" ><a href="https://canifa.com/customer/cardview/">Thông tin thẻ</a></li>
        
                        <li class="vipcard" ><a href="https://canifa.com/customer/account/vipcard/">Tra cứu điểm thẻ</a></li>
        
                        <li class="cpointpoin" ><a href="https://canifa.com/cpoint/poin/">C-point</a></li>
        
                        <li class="logout" ><a href="https://canifa.com/customer/account/logout/">Đăng xuất</a></li>
                    </ul>
                    </div>
                </div>
        
            </div>
        </div> 
        <div class="col-main col-sm-8">
            <div class="customer-account-index-content">
                <div class="page-title">
                    <h1>Chỉnh sửa thông tin tài khoản</h1>
                </div>
                <div class="page-description">Chỉnh sửa thông tin chi tiết sẽ giúp bạn tiết kiệm được rất nhiều thời gian trong quá trình mua hàng, hoàn thanh thanh toán</div>
                <form action="https://canifa.com/customer/account/editPost/" method="post" autocomplete="off" id="form-validate" class="scaffold-form" enctype="multipart/form-data">
                    <div class="fieldset">
                    <input name="form_key" type="hidden" value="YGvRr1ScrYpf6J18" />
                    <ul class="form-list">
                        <div class="account-radio-gender form-group">
                            <label class="label">Giới tính</label>
                            <label>
                                <input type="radio" id="gender1" name="gender" class="radio validate-one-required" value="1" checked>
                                <label for="gender1">Nam</label>
                                <input type="radio" id="gender2" name="gender" class="radio validate-one-required" value="2">
                                <label for="gender2">Nữ</label>
                            </label>
                        </div>
                        <li>
                            <p>Card ID: <span id='card_id' style="color:red"> CNFAPP00001121937</span></p>
                        </li>
                        <li class="fields">
                            <div class="customer-name">
                                <div class="field name-firstname">
                                <label for="firstname" class="required">Tên</label>
                                <div class="input-box">
                                    <input type="text" id="firstname" name="firstname" value="Lê Tuấn " title="Tên" maxlength="255" class="input-text required-entry"  />
                                </div>
                                </div>
                                <div class="field name-lastname">
                                <label for="lastname" class="required">Họ tên đệm</label>
                                <div class="input-box">
                                    <input type="text" id="lastname" name="lastname" value="Hải" title="Họ tên đệm" maxlength="255" class="input-text required-entry"  />
                                </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <label for="email" >Địa chỉ email</label>
                            <div class="input-box">
                                <input type="email" autocapitalize="off" autocorrect="off" spellcheck="false" name="app_email" id="app_email" value="" title="Địa chỉ email" class="input-text validate-email"  />
                            </div>
                        </li>
                        <li>
                            <label for="month" id="date">Ngày sinh</label>
                            <div class="input-box customer-dob">
                                <div class="dob-day">
                                <input type="text" id="day" name="day" value="20" title="Ngày" class="input-text validate-custom"  />
                                <label for="day">Ngày</label>
                                </div>
                                <div class="dob-month">
                                <input type="text" id="month" name="month" value="06" title="Tháng" class="input-text validate-custom"  />
                                <label for="month">Tháng</label>
                                </div>
                                <div class="dob-year">
                                <input type="text" id="year" name="year" value="2000" title="Năm" class="input-text validate-custom"  />
                                <label for="year">Năm</label>
                                </div>   
                                <div class="dob-full" style="display:none;">
                                <input type="hidden" id="dob" name="dob" />
                                </div>

                                <div class="validation-advice" style="display:none;"></div>
                            </div>
                        </li>
                        <li>
                            <div class="form-group input-phone">
                                <label for="email" class="required">Số điện thoại</label>
                                <div class="input-box">
                                <input type="text" autocapitalize="off" autocorrect="off" spellcheck="false" name="login[username]" value='0379123473' id="phone" class="input-text required-entry"  placeholder="Nhập số điện thoại" onchange="validateInput()"/>
                                </div>
                            </div>
                           
                        </li>
                        <li>
                            <i><small>Để thay đổi thông tin ngày sinh hoặc số điện thoại, vui lòng liên hệ bộ phận CSKH qua hotline 1800.6061 nhánh 2 (miễn phí)</small></i>
                        </li>
                        <li>
                            <input type="hidden" id="cnf_customer_validated_success" name="cnf_customer_validated_success" value="0">
                        </li> 
                        <li class="control">
                            <input type="checkbox" name="change_password" id="change_password" value="1" onclick="setPasswordForm(this.checked)" title="Thay đổi mật khẩu" class="checkbox" /><label for="change_password">Thay đổi mật khẩu</label>
                        </li>
                    </ul>
                    </div>
                    <div class="fieldset" style="display:none;">
                    <ul class="form-list">
                        <li class="fields">
                            <label for="current_password" class="required"><em>*</em>Mật khẩu hiện tại</label>
                            <div class="input-box">
                                <!-- This is a dummy hidden field to trick firefox from auto filling the password -->
                                <input type="text" class="input-text no-display" name="dummy" id="dummy" />
                                <input type="password" title="Mật khẩu hiện tại" class="input-text required-entry" name="current_password" id="current_password"  />
                            </div>
                        </li>
                        <li class="fields">
                            <div class="field">
                                <label for="password" class="required"><em>*</em>Mật khẩu mới</label>
                                <div class="input-box">
                                <input type="password" title="Mật khẩu mới" class="input-text required-entry validate-password" name="password" id="password" />
                                </div>
                            </div>
                            <div class="field">
                                <label for="confirmation" class="required"><em>*</em>Xác nhận mật khẩu mới</label>
                                <div class="input-box">
                                <input type="password" title="Xác nhận mật khẩu mới" class="input-text required-entry validate-cpassword" name="confirmation" id="confirmation" />
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                    <div class="buttons-set">
                    <button type="submit" title="Lưu" class="button" id='save'>Lưu</button>
                    </div>
                </form>
            </div>
        </div>                  
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    .account-content{
        width:68%;
    }
  .breadcrumbs{
      line-height: 20px;
      margin-bottom: 25px;
      margin-top: 25px;
   }
   .breadcrumbs ul li {
    list-style: none; 
    float: left;
    margin-right: 4px;
   }
   .breadcrumbs strong {
      font-weight: 400;
   }
   a {
      color: #333f48;
      text-decoration: none;
   }
   .col-left{
       margin-top: 20px;
   }
   .page-title h1{
      text-transform: uppercase;
      font-family: none !important;
   }
    .page-description {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 30px;
    }
    #date{
        margin-top: 20px;
    }
    .form-list label {
        line-height: 30px;
        font-weight: 500;
        font-size: 12px;
        color: #bdbdbd;
        padding-right: 15px;
    }
    .account-content input[type="search"] , input[type="email"] , input[type="password"] , input[type="text"] , input[type="date"] , input[type="submit"] , select  {
        height: 36px !important;
        display: block;
        width: 636px !important;
    }
    .form-list>li .field {
        margin-bottom: 20px;
    }
    .customer-dob {
        max-width: 325px;
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }
    .customer-dob input{
       width: 105px !important; 
    }
    button#save {
        min-width: 200px;
        font-weight: 700;
        font-size: 10px !important;
        text-transform: uppercase !important;
        text-align: center;
        height: 30px !important;
        border: 2px solid #da291c !important;
        display: block;
        background-color: transparent !important;
        width: 100%;
        padding: 0 6px !important;
        margin-bottom: 20px;
        color: #da291c;
    }
</style>
<style scoped>
    @import '../../assets/css/accountContent.css';
</style>