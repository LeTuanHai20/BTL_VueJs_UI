import BaseAPIConfig from '@/api/base/BaseAPIConfig.js';

export default class BaseAPI {

    constructor() {
        this.controler = null;
    }
    /**
     * Phương thức lấy tất cả dữ liệu
     * CreatedBy: LTHAI(26/12/2020)
     */
    getAll() {
        return BaseAPIConfig.get(`${this.controler}`);
    }
    /**
     * Lấy nhân viên theo id
     * @param {*} id 
     * CreatedBy: LTHAI(26/12/2020)
     */
    getById(id){
        return BaseAPIConfig.get(`${this.controler}/${id}`);
    }
    /**
     * Hàm lấy dữ liệu phân trang
     * @param {*} payload 
     * CreatedBy: LTHAI(26/12/2020)
     */
    paging(limit,offset) {
        return BaseAPIConfig.get(`${this.controler}/paging?limit=${limit}&offset=${offset}`);
    }
    /**
     * Thêm mới dữ liệu
     * @param {Dữ liệu mới} data 
     * CreatedBy: LTHAI(26/12/2020)
     */
    create(data){
        return BaseAPIConfig.post(`${this.controler}`, data);
    }
    /**
     * Hàm cập nhật dữ liệu
     * @param {*} id 
     * @param {*} body 
     * CreatedBy: LTHAI(26/12/2020)
     */
    update(id, body) {
        return BaseAPIConfig.put(`${this.controler}/${id}`, body);
    }
    getCodeMax(){
        return BaseAPIConfig.get(`${this.controler}/codemax`);
    }
    /**
     * Hàm xóa bản ghi
     * @param {*} id 
     * CreatedBy: LTHAI(26/12/2020)
     */
    delete(id) {
        return BaseAPIConfig.delete(`${this.controler}/${id}`);
    }
}