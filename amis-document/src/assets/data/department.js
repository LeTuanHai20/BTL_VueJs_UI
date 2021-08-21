// Dữ liệu cho phần phòng ban của phần thông tin chung khi thêm
export const departments=[
    {
      "DepartmentId": 1,
      "DepartmentName": "TestAmis2",
      "expanded": true
    },
    {
      "DepartmentId": "1_1",
      "categoryId": 1,
      "DepartmentName": "Phòng Chăm Sóc KH",
      "expanded": true
    },
    {
      "DepartmentId": "1_1_1",
      "categoryId": "1_1",
      "DepartmentName": "Phòng Chăm Sóc KH Tổ Chức"
    },
    {
        "DepartmentId": "1_2",
        "categoryId": 1,
        "DepartmentName": "Phòng Giám Đốc",
        "expanded": true
      },
      {
        "DepartmentId": "1_2_1",
        "categoryId": "1_2",
        "DepartmentName": "Phòng Thư Ký"
      },
      {
        "DepartmentId": "1_2_2",
        "categoryId": "1_2",
        "DepartmentName": "Công ty cổ phần truyền thông Ngôi Sao"
      },
      {
        "DepartmentId": "1_2_3",
        "categoryId": "1_2",
        "DepartmentName": "Trợ Lý Giám Đốc"
      },
      {
        "DepartmentId": "1_3",
        "categoryId": 1,
        "DepartmentName": "Phòng Kinh Doanh",
        "expanded": true
      },
      {
        "DepartmentId": "1_3_1",
        "categoryId": "1_3",
        "DepartmentName": "Phòng Kinh Doanh Mới"
      },
      {
        "DepartmentId": "1_3_2",
        "categoryId": "1_3",
        "DepartmentName": "Phòng Kinh Doanh Tổng Công Ty"
      },
      {
        "DepartmentId": "1_4",
        "categoryId": 1,
        "DepartmentName": "Phòng Kế Toán",
        "expanded": true
      },
      {
        "DepartmentId": "1_4_1",
        "categoryId": "1_4",
        "DepartmentName": "Quản Trị Nguồn Nhân Lực"
      },
      {
        "DepartmentId": "1_5",
        "categoryId": 1,
        "DepartmentName": "Phòng Kế Toán",
        "expanded": true
      },
      {
        "DepartmentId": "1_5_1",
        "categoryId": "1_5",
        "DepartmentName": "Phòng Kế Toán"
      },
      {
        "DepartmentId": "1_5_2",
        "categoryId": "1_5",
        "DepartmentName": "Phòng Sáng Tạo"
      },
      {
        "DepartmentId": "1_5_3",
        "categoryId": "1_5",
        "DepartmentName": "Phòng Tổng Hợp"
      },
      {
        "DepartmentId": "1_5_4",
        "categoryId": "1_5",
        "DepartmentName": "Phòng Thiết Kế"
      },
      {
        "DepartmentId": "1_6",
        "categoryId": 1,
        "DepartmentName": "Trung Tâm Phát Triển Phầm Mềm",
        "expanded": true
      },
      {
        "DepartmentId": "1_6_1",
        "categoryId": "1_6",
        "DepartmentName": "Truyền Thông"
      },
      {
        "DepartmentId": "1_6_2",
        "categoryId": "1_6",
        "DepartmentName": "Trung Tâm Kinh Doanh"
      },
      {
        "DepartmentId": "1_7",
        "categoryId": 1,
        "DepartmentName": "Văn Phòng Đại Diện Tại Nghệ An",
        "expanded": true
      },
      {
        "DepartmentId": "1_7_1",
        "categoryId": "1_7",
        "DepartmentName": "Phòng Truyền Thông"
      },
  ]
// Dữ liệu cho phần vị trí/chức vụ của phần thông tin chung khi thêm
  export const positions=[
    {
        "PositionId": 1,
        "PositionCode": "NV-0001",
        "PositionName": "Giám Đốc",
        "Department": "Phòng Nhân Sự",
    },
    {
        "PositionId": 2,
        "PositionCode": "NV-0002",
        "PositionName": "Phó Giám Đốc",
        "Department": "Phòng Nhân Sự",
    },
    {
        "PositionId": 3,
        "PositionCode": "NV-0003",
        "PositionName": "Nhân Viên Nhân Sự",
        "Department": "Phòng Nhân Sự",
    },
    {
        "PositionId": 4,
        "PositionCode": "NV-0004",
        "PositionName": "Nhân Viên Hành Chính",
        "Department": "Phòng Hành Chính",
    },
    {
        "PositionId": 5,
        "PositionCode": "NV-0005",
        "PositionName": "Nhân Viên Kế Toán",
        "Department": "Phòng Kế Toán",
    },
    {
        "PositionId": 6,
        "PositionCode": "NV-0006",
        "PositionName": "Nhân Viên Kiểm Thử",
        "Department": "Phòng Kiểm Thử",
    },
    {
        "PositionId": 7,
        "PositionCode": "NV-0007",
        "PositionName": "Nhân Viên Nghiệp Vụ",
        "Department": "Phòng Kiểm Thử",
    },
    {
        "PositionId": 8,
        "PositionCode": "NV-0008",
        "PositionName": "Vị Trí Test",
        "Department": "Phòng Kiểm Thử",
    },
    {
        "PositionId": 9,
        "PositionCode": "NV-0009",
        "PositionName": "Công Nhân",
        "Department": "Nhà Máy",
    },
    {
        "PositionId": 10,
        "PositionCode": "NV-00010",
        "PositionName": "Nhân Viên Kỹ Thuật",
        "Department": "Nhà Máy",
    },
    {
        "PositionId": 11,
        "PositionCode": "NV-00011",
        "PositionName": "Quản Đốc Phân Xưởng",
        "Department": "Nhà Máy",
    },
    {
        "PositionId": 12,
        "PositionCode": "NV-00012",
        "PositionName": "Trưởng Phòng Kỹ Thuật",
        "Department": "Nhà Máy",
    },
    {
        "PositionId": 13,
        "PositionCode": "NV-00013",
        "PositionName": "Chuyên Gia Phân Tích Thiết Kế",
        "Department": "Phòng Thiết Kế",
    },
    {
        "PositionId": 14,
        "PositionCode": "NV-00014",
        "PositionName": "Nhân Viên Làm Rõ Yêu Cầu",
        "Department": "Phòng Thiết Kế",
    },
    {
        "PositionId": 15,
        "PositionCode": "NV-00015",
        "PositionName": "Nhân Viên Viết Tài Liệu",
        "Department": "Phòng Thiết Kế",
    },
    {
        "PositionId": 13,
        "PositionCode": "NV-00013",
        "PositionName": "Chuyên Gia Phân Tích Thiết Kế",
        "Department": "Phòng Thiết Kế",
    },
    ]