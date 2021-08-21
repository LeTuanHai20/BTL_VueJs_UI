/**
 * Khởi tạo các tên cột của bản
 */
export const colunmNames = [
    { name: "Mã nhân viên", width: 150 , FieldName: "EmployeeCode"},
    { name: "Họ và tên", width: 200 , FieldName: "FullName"},
    { name: "Đơn vị công tác", width: 250, FieldName: "Company"},
    { name: "Giới tính", width: 100 , FieldName: "Gender"},
    { name: "Vị trí công việc", width: 200 , FieldName: "Position"},
    { name: "Ngày sinh", width: 200 , FieldName: "DateOfBirth"},
    { name: "Trình độ đào tạo", width: 200 , FieldName: "TrainingLevel"},
    { name: "Nơi đào tạo", width: 250 , FieldName: "TrainingPlace"},
    { name: "Chuyên ngành", width: 250 , FieldName: "Specialized"},
    { name: "Email cơ quan", width: 250 , FieldName: "CompanyEmail"},
    { name: "Zalo ID", width: 250 , FieldName: "Zalo"},
  ]
/**
 * Khởi tạo các dữ liệu mẫu cho các select box phần thêm nhân viên
 * CreatedBy: LTHAI(23/12/2020)
 */
export const gender = [
    {Id: 0, Name: 'Nữ'},
    {Id: 1, Name: 'Nam'},
    {Id: 2, Name: 'Khác'}
];
export const companies = [
    {Id: 0, Name: 'MISA'},
    {Id: 1, Name: 'VIETTEL'},
    {Id: 2, Name: 'RIKKEISOFT'},
    {Id: 3, Name: 'FPT'}
];
export const positions = [
    {Id: 0, Name: 'Giám đốc văn phòng'},
    {Id: 1, Name: 'Thực tập sinh'},
    {Id: 2, Name: 'Trưởng phòng nhân sự'}
];
export const nations = [
    {Id: 0, Name: 'Kinh'},
    {Id: 1, Name: 'Tày'},
    {Id: 2, Name: 'Thái'},
    {Id: 3, Name: 'Hoa'},
    {Id: 4, Name: 'Khơ-me'},
    {Id: 5, Name: 'Mường'},
    {Id: 6, Name: 'Nùng'},
    {Id: 7, Name: 'HMông'}
];

export const religions = [
    {Id: 0, Name: 'Không'},
    {Id: 1, Name: 'Phật giáo'},
    {Id: 2, Name: 'Thiên chúa giáo'},
    {Id: 3, Name: 'Tin lành'},
    {Id: 4, Name: 'Hồi giáo'}
];

export const nationalities  = [
    {Id: 0, Name: 'Việt Nam'},
    {Id: 1, Name: 'Hàn Quốc'},
    {Id: 2, Name: 'Nhật Bản'},
    {Id: 3, Name: 'Mỹ'},
    {Id: 4, Name: 'Đức'},
    {Id: 5, Name: 'Anh'},
    {Id: 6, Name: 'Nga'},
    {Id: 7, Name: 'Thái lan'},
    {Id: 8, Name: 'Lào'},

];
export const  degreTraining = [
    {Id: 0, Name: 'Đại học'},
    {Id: 1, Name: 'Cao đẳng'},
    {Id: 2, Name: 'Trung cấp'},
    {Id: 3, Name: 'Không đi học'},
];
export const  universities = [
    {
        Id: 0, 
        Name: 'Đại học Công Nghiệp Hà Nội',
        calcuties:[
            {
                Id: 0,
                Name: 'Công nghệ thông tin',
                specialized:[
                    { Id: 0, Name: 'Kỹ thuật phầm mềm'},
                    { Id: 1, Name: 'Công nghệ thông tin'}
                ]
            },
            { 
                Id: 1,
                Name: 'Cơ Khí',
                specialized:[
                    { Id: 0, Name: 'Cơ khí'}
                ]
            },
            { 
                Id: 2, 
                Name: 'Điện tử',
                specialized:[
                    { Id: 0, Name: 'Điện tử'},
                    { Id: 1, Name: 'Điện tử viễn thông'}
                ]
            }
        ]
    },
    {
        Id: 1, 
        Name: 'Đại học Công Nghệ',
        calcuties:[
            { 
                Id: 0, 
                Name: 'Công nghệ thông tin',
                specialized:[
                    { Id: 0, Name: 'Công nghệ thông tin Việt-Nhật'},
                    { Id: 1, Name: 'Công nghệ thông tin Việt-Anh'}
                ]
            },
            { 
                Id: 1, 
                Name: 'Viễn thông',
                specialized:[
                    { Id: 0, Name: 'Mạng máy tính'},
                    { Id: 1, Name: 'Công nghệ viễn thông'}
                ]
            }
        ]
    },
    {
        Id: 2, 
        Name: 'Không đi học',
        calcuties:[
            {
                specialized:[
                
                ]
            }
        ]
    }
];

export const classifications =[
    {Id: 0, Name: 'Khá'},
    {Id: 1, Name: 'Giỏi'},
    {Id: 2, Name: 'Trung bình khá'},
    {Id: 3, Name: 'Trung bình'},
    {Id: 4, Name: 'Yếu'},
    {Id: 5, Name: 'Kém'}
];
export const marriages = [
    {Id: 0, Name: 'Độc thân'},
    {Id: 1, Name: 'Đã có gia đình'},
    {Id: 2, Name: 'Ly dị'},
];

export const  familyLocation = [
    {Id: 0, Name: 'Địa chủ'},
    {Id: 1, Name: 'Công chức'},
    {Id: 2, Name: 'Bần nông'},
    {Id: 3, Name: 'Bồ đội'},
    {Id: 4, Name: 'Cố nông'},
    {Id: 5, Name: 'Công nhân'},
    {Id: 6, Name: 'Dân nghèo'},
    {Id: 7, Name: 'Tiểu thương'},
    {Id: 8, Name: 'Tiểu địa chủ'}
];

export const works = [
    {Id: 0, Name: 'Viên chức'},
    {Id: 1, Name: 'Nhà văn'},
    {Id: 2, Name: 'Chủ doanh nghiệp'},
    {Id: 3, Name: 'Nhà báo'},
    {Id: 4, Name: 'Công chức'},
    {Id: 5, Name: 'Bồ đội'},
    {Id: 6, Name: 'Lập trình viên'},
    {Id: 7, Name: 'Bác sĩ'},
    {Id: 8, Name: 'Nông dân'}
];
export const provinces = [
    {Id: 0, Name: 'Hà Nội'},
    {Id: 1, Name: 'Thành phố Hồ Chí Minh'},
    {Id: 2, Name: 'Đà Nẵng'},
    {Id: 3, Name: 'Thanh Hóa'},
    {Id: 4, Name: 'Nghệ An'},
    {Id: 5, Name: 'Hưng Yên'}
];
export const relationals = [
    {Id: 0, Name: 'Ông'},
    {Id: 1, Name: 'Bà'},
    {Id: 2, Name: 'Bố'},
    {Id: 3, Name: 'Mẹ'},
    {Id: 4, Name: 'Anh'},
    {Id: 5, Name: 'Chị'},
    {Id: 6, Name: 'Em trai'},
    {Id: 7, Name: 'Em gái'}
];
export const nationDetails = [
    {
        Id: 0, 
        Name: 'Việt Nam',
        province:[
            {
                Id: 0, 
                Name: 'Hà Nội',
                districts:[
                    {
                        Id: 0,
                        Name: 'Thanh Xuân',
                        commune:[
                            {
                                Id: 0,
                                Name: 'Kim Giang'
                            },
                            {
                                Id: 1,
                                Name: 'Khương Mai'
                            },
                            {
                                Id: 2,
                                Name: 'Khương Trung'
                            },
                            {
                                Id: 3,
                                Name: 'Khương Đình'
                            },
                        ]
                    },
                    {
                        Id: 1,
                        Name: 'Đống Đa',
                        commune:[
                            {
                                Id: 0,
                                Name: 'Cát Linh'
                            },
                            {
                                Id: 1,
                                Name: 'Hàng Bột'
                            },
                            {
                                Id: 2,
                                Name: 'Khâm Thiên'
                            },
                            {
                                Id: 3,
                                Name: 'Khương Thượng'
                            },
                            {
                                Id: 4,
                                Name: 'Ngã Tư Sở'
                            },
                        ]
                    }
                ]
            },
            {
                Id: 1, 
                Name: 'Thanh Hóa',
                districts:[
                    {
                        Id: 0,
                        Name: 'Hà Trung',
                        commune:[
                            {
                                Id: 0,
                                Name: 'Hà Giang'
                            },
                            {
                                Id: 1,
                                Name: 'Hà Tiến'
                            },
                            {
                                Id: 2,
                                Name: 'Hà Bắc'
                            },
                            {
                                Id: 3,
                                Name: 'Hà Yên'
                            },
                        ]
                    },
                    {
                        Id: 1,
                        Name: 'Hậu Lộc',
                        commune:[
                            {
                                Id: 0,
                                Name: 'Hoa Lộc'
                            },
                            {
                                Id: 1,
                                Name: 'Minh Lộc'
                            },
                            {
                                Id: 2,
                                Name: 'Đa Lộc'
                            },
                            {
                                Id: 3,
                                Name: 'Đại Lộc'
                            },
                            {
                                Id: 4,
                                Name: 'Thành Lộc'
                            },
                        ]
                    }
                ]
            }
        ]
    }
   
];


