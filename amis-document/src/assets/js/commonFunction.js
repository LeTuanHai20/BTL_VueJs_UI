/**
 * Lưu các hàm xử lý chung dành cho mixins
 * CreatedBy: LTHAI(23/12/2020)
 */
export default {
    methods: {
        /**
         * Chuyển giá trị datetime to date
         * @param {*} date giá trị datetime
         * CreatedBy: LTHAI(25/12/2020)
         */
        FormatDatetimeToDate: function(date)
        {
            if(date){
                date = new Date(date);
                if (Number.isNaN(date.getTime())) {
                    return "";
                } else {
                    let day = date.getDate()
                    day = day < 10 ? ("0" + day) : day;
                    let month = date.getMonth() + 1;
                    month = month < 10 ? ("0" + month) : month;
                    let year = date.getFullYear();
                    return `${day}/${month}/${year}`;
                }
            }else{
                return "";
            }
            
        },
        /**
         * Chuyển url images thành base 64
         * @param {C} file 
         * CreatedBy: LTHAI(25/12/2020)
         */
        readFileAsync: function(file){
            return new Promise((resolve, reject) =>{
              const reader = new FileReader();
              reader.onload = function(val){
                resolve(val.target.result);
              };
              reader.onerror = reject;
              reader.readAsDataURL(file);
            })
        },
        /**
         * Chuyển date to datetime
         * @param {date} date 
         * CreatedBy: LTHAI(25/12/2020)
         */
        convertToDateTime(date){
           let b = date.split(/\D/);
           return b.reverse().join('-');
        },
        /**
         * Kiểm tra định dạng dd/MM/yyyy
         * @param {string} date 
         * CreatedBy:LTHAI(25/12/2020)
         */
        validateDate(date){
            let regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
            if(date.match(regex)){
                return true;
            }
            else{
                return false;
            }
        },
        /**
         * Hàm resize table
         * @param {table} e 
         *  CreatedBy:LTHAI(1/1/2021)
         */
        resizableGrid(e) {
            var t = e.getElementsByTagName("tr")[0]
            , n = t ? t.children : void 0;
            if (n) {
                e.style.overflow = "auto";
                for (var i = e.offsetHeight, o = 0; o < n.length; o++) {
                    var r = s(i);
                    n[o].appendChild(r),
                    d(r)
                }
            }
            function d(e) {
                var t, n, i, o, r;
                e.addEventListener("mousedown", function(e) {
                    n = e.target.parentElement,
                    i = n.nextElementSibling,
                    t = e.pageX;
                    var d = function(e) {
                        if ("border-box" == l(e, "box-sizing"))
                            return 0;
                        var t = l(e, "padding-left")
                        , n = l(e, "padding-right");
                        return parseInt(t) + parseInt(n)
                    }(n);
                    o = n.offsetWidth - d,
                    i && (r = i.offsetWidth - d)
                }),
                document.addEventListener("mousemove", function(e) {
                    if (n) {
                        var d = e.pageX - t;
                        n.style.width = o + d + "px"
                    }
                }),
                document.addEventListener("mouseup", function(e) {
                    n = void 0,
                    i = void 0,
                    t = void 0,
                    r = void 0,
                    o = void 0
                })
            }
            function s(e) {
                var t = document.createElement("div");
                return t.style.top = 0,
                t.style.right = 0,
                t.style.width = "5px",
                t.style.position = "absolute",
                t.style.cursor = "col-resize",
                t.style.userSelect = "none",
                t.style.height = e + "px",
                t
            }
            function l(e, t) {
                return window.getComputedStyle(e, null).getPropertyValue(t)
            }
        }

    },
  };